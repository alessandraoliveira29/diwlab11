import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export function Card({ title, description, image, price, rating }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={`Imagem de ${title}`}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-semibold text-blue-500 mt-4">Preço: ${price.toFixed(2)}</p>
        <div className="flex items-center mt-2 text-yellow-500">
          ⭐ {rating.rate} 
          <span className="text-gray-500 ml-2">({rating.count} avaliações)</span>
        </div>
      </div>
    </div>
  );
}
