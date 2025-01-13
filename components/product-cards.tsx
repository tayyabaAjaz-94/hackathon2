
// products 

import React from "react";

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-4 text-lg font-medium">{name}</h3>
      <p className="text-gray-500">{price}</p>
    </div>
  );
};

export default ProductCard;