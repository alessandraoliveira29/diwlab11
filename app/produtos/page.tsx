'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Product } from '@/app/models/interfaces';
import { Card } from '@/app/municipalities/components/Card'; 

export default function ProdutosPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: products, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  const [cart, setCart] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const addItemToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const buy = async () => {
    try {
      const response = await fetch('/api/deisishop/buy', {
        method: 'POST',
        body: JSON.stringify({
          products: cart.map((product) => product.id),
          name: '', 
          student: false, 
          coupon: '', 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao realizar a compra: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Compra realizada com sucesso:', result);

      setCart([]);
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Erro ao comprar:', error);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho do localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, products]);

  if (error) return <div className="text-red-500">Erro ao carregar os produtos.</div>;
  if (isLoading) return <div className="text-gray-500">Carregando...</div>;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Produtos</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((product) => (
          <Card
            key={product.id}
            product={product}
            addItemToCart={addItemToCart}
          />
        ))}
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">O carrinho está vazio.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="border-b py-2">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={buy}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Comprar
            </button>
          </>
        )}
      </section>
    </main>
  );
}
