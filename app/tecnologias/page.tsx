'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json'; 
import { TechCard } from './components/TechCard'; 

export default function TecnologiasPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tecnologias Aprendidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tecnologias.map((tech) => (
          <TechCard
            key={tech.title}
            title={tech.title}
            description={tech.description}
            rating={tech.rating}
          />
        ))}
      </div>
    </div>
  );
}
