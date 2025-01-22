'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // Correct hooks for navigation
import { createClient } from "@sanity/client";
import HEADER from "@/components/HEADER";
import Navbar from "@/components/Navigation";
import Footer from "@/components/FOOTER";

// Define the Product interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Configure the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams(); // Extract the product ID from the URL
  const router = useRouter(); // Initialize router

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

  const handleAddToCart = () => {
    if (product) {
      router.push(`/cart?id=${product.id}`); // Redirect to cart with product ID as a query parameter
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HEADER />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 p-8">
        {/* Product Image */}
        <div className="flex-1">
          <div className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-4">₹ {product.price}</p>
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
