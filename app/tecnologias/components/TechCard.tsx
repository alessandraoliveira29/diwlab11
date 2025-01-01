import React from 'react';

interface CardProps {
  title: string;
  description: string;
  rating: number;
}

export function TechCard({ title, description, rating }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="text-yellow-500 mt-2 font-semibold">⭐ Rating: {rating}/5</p>
    </div>
  );
}
