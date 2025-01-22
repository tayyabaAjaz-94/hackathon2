
// products 

import React from "react";
import Image from "next/image"
interface ProductProps {
  name: string;
  price: string;
  image: string;
  description: string
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image, description}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image src={image} alt={name} width={100} height={100} className="w-full h-40 object-cover rounded-md"  />
      <h3 className="mt-4 text-lg font-medium">{name}</h3>
      <h3 className="mt-4 text-lg font-medium line-clamp-2">{description}</h3>
      <p className="text-gray-500">{price}</p>
    </div>
  );
};

export default ProductCard;