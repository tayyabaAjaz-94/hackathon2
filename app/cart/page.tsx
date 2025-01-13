import React from "react";
import HEADER from "@/components/HEADER";
import Navbar from "@/components/Navigation";
import FOOTER from "@/components/FOOTER";
import { FaHeart, FaTrash } from "react-icons/fa"; // Importing icons from react-icons
import Image from "next/image"

const ShoppingCart = () => {
  return (
    <div>
      {/* Header */}
      <HEADER></HEADER>
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Section */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Bag</h2>
          {/* Free Delivery Section */}
          <div className="bg-gray-100 p-4 rounded-md text-sm mb-6">
            <p>
              <strong>Free Delivery</strong>: Applies to orders of ₹14,000.00 or more.{" "}
              <a href="#" className="text-blue-500 underline">View details</a>
            </p>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-center justify-between border-b pb-6">
              <Image
                src="/e1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={100}
                height={100}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-gray-500 text-sm">
                  Mens Short-Sleeve Running Top <br />
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-gray-500 text-sm">Size: L | Quantity: 1</p>
              </div>
              <p className="font-bold">MRP: ₹3,895.00</p>
              <div className="flex items-center space-x-4">
                <FaHeart className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b pb-6">
              <Image
                src="/rectangle (2).png"
                alt="Nike Air Max 97 SE"
                width={100}
                height={100}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold">Nike Air Max 97 SE</h3>
                <p className="text-gray-500 text-sm">
                  Mens Shoes <br />
                  Flat Pewter/Light Bone/Black/White
                </p>
                <p className="text-gray-500 text-sm">Size: 8 | Quantity: 1</p>
              </div>
              <p className="font-bold">MRP: ₹16,995.00</p>
              <div className="flex items-center space-x-4">
                <FaHeart className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <aside className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">₹20,890.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Estimated Delivery & Handling</span>
            <span className="font-bold">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>₹20,890.00</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md font-bold">
            Member Checkout
          </button>
        </aside>
      </main>
      <FOOTER></FOOTER>
    </div>
  );
};

export default ShoppingCart;
