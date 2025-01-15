import React from "react";
import Image from "next/image"
import HEADER from "@/components/HEADER";
import Navbar from "@/components/Navigation";
import Footer from "@/components/FOOTER";

const ProductDetail = () => {
  const product = {
    name: "Nike Air Force 1 PLT.AF.ORM",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. It's 'inside out'-inspired construction, including unique layering and popped foam accents, ups the ante on timeless Jordan Brand silhouettes. Details like the exposed stitching on the Swoosh and sculpted tread, plus the unexpected shading, mesh luxe materials and bold sneaker aesthetic to give this release an artisan finish.",
    price: "₹ 8,695.00",
    image: "/Rectangle.png",
  };

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
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-4">{product.price}</p>
          <button className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800">
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
