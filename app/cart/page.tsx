'use client';
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@sanity/client";
import HEADER from "@/components/HEADER";
import Navbar from "@/components/Navigation";
import FOOTER from "@/components/FOOTER";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  size: string;
  quantity: number;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const CartPageContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
         
          const query = `*[_type == "product" && _id == $id][0]{
            "id": _id,
            "name": productName,
            description,
            price,
            "image": image.asset->url
          }`;
          
          const data = await client.fetch(query, { id });
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      setCartItems((prev) => [
        ...prev,
        {
          ...product,
          size: "M",
          quantity: 1,
        },
      ]);
    }
  }, [product]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const updateSize = (id: string, size: string) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size } : item))
    );
  };

  const incrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6 mb-6 space-y-4 sm:space-y-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-1 sm:ml-4">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Size:{" "}
                      <select
                        value={item.size}
                        onChange={(e) => updateSize(item.id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold text-gray-800">₹ {item.price * item.quantity}</p>

                  <button onClick={() => removeItem(item.id)} className="text-red-500">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </section>

        <aside className="bg-gray-100 p-4 sm:p-6 rounded-md mt-10">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">₹ {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Delivery</span>
            <span className="font-bold">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>₹ {subtotal}</span>
          </div>
          {/* <Link
            href={{
              pathname: "/checkout",
              query: { cartItems: JSON.stringify(cartItems), subtotal },
            }}
          >
            <button className="w-full bg-black text-white py-3 rounded-md font-bold">
              Proceed to Checkout
            </button>
          </Link> */}
          <Link
  href={{
    pathname: "/checkout",
    query: { cartItems: JSON.stringify(cartItems), subtotal },
  }}
>
  <button className="w-full bg-black text-white py-3 rounded-md font-bold">
    Proceed to Checkout
  </button>
</Link>

        </aside>
      </main>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div>
      <HEADER />
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <CartPageContent />
      </Suspense>
      <FOOTER />
    </div>
  );
};

export default ShoppingCart;
