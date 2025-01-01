'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/app/models/interfaces';
import { Card } from '@/app/municipalities/components/Card';

export default function ProdutosPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: products, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  if (error) return <div className="text-red-500">Erro ao carregar os produtos.</div>;
  if (isLoading) return <div className="text-gray-500">Carregando...</div>;
  if (!products || products.length === 0) return <div className="text-gray-500">Nenhum produto disponível.</div>;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </main>
  );
}

