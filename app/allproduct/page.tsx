"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import HEADER from "@/components/HEADER";
import Navbar from "@/components/Navigation";
import Sidebar from "@/components/sidebar";
import ProductCard from "@/components/product-cards";
import Footer from "@/components/FOOTER";
import Link from "next/link";

// Define the Product interface
interface Product {
  _id: string;
  productName: string;
  price: number;
  imageUrl: string; // Optional in case the image is not available
  category: string;
  description: string; // Optional, as some products might not have a description
  colors?: string[]; // Optional
  status: string;
  inventory: number;
}

// Configure the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          productName,
          price,
          "imageUrl": image.asset->url,
          category,
          description,
          colors,
          status,
          inventory
        }`;

        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <HEADER />
      <Navbar />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-100 p-4">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link href={`/productdetail/${product._id}`} key={product._id}>
              <ProductCard
                name={product.productName}
                description={product.description}
                price={`₹ ${product.price}`}
                image={product.imageUrl}
              />
            </Link>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
