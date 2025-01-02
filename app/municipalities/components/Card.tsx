import React from 'react';
import Image from 'next/image'; // Import necessário para imagens no Next.js
import { Product } from '@/app/models/interfaces';

interface CardProps {
  product: Product;
  addItemToCart: (product: Product) => void;
}

export function Card({ product, addItemToCart }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={`Imagem de ${product.title}`}
          layout="fill"
          objectFit="contain" // Faz com que a imagem se ajuste proporcionalmente ao container
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <p className="text-sm text-gray-600">Categoria: {product.category}</p>
        <p className="text-lg font-semibold text-blue-500 mt-4">
          Preço: ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center mt-2 text-yellow-500">
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
    </div>
  );
}
