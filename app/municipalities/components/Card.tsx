import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/models/interfaces';

interface CardProps {
  product: Product;
  addItemToCart: (product: Product) => void;
}

export function Card({ product, addItemToCart }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center p-4">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={`Imagem de ${product.title}`}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800 text-center">{product.title}</h2>
      <p className="text-sm text-gray-600 mt-2 text-center">{product.description}</p>
      <p className="text-sm text-gray-600 text-center">Categoria: {product.category}</p>
      <p className="text-lg font-semibold text-blue-500 mt-4 text-center">
        Preço: ${product.price.toFixed(2)}
      </p>
      <div className="flex items-center mt-2 text-yellow-500 text-center">
        ⭐ {product.rating.rate}
        <span className="text-gray-500 ml-2">({product.rating.count} avaliações)</span>
      </div>
      <button
        onClick={() => addItemToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
