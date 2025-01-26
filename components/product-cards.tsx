import React from "react";
import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      {/* Responsive Image */}
      <Image 
        src={image} 
        alt={name} 
        width={400} 
        height={300} 
        className="w-full h-40 sm:h-48 object-cover rounded-md" 
      />
      
      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-medium">{name}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-500 line-clamp-2">
          {description}
        </p>
        <p className="mt-2 text-base sm:text-lg font-semibold text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
