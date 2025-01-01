import React from 'react';
import { Municipality } from '@/app/models/interfaces';

export function MunicipalityCard({ id, name, district_name }: Municipality) {
  return (
    <div className="municipality-card">
      <h3>{name}</h3>
      <p>
        <strong>District:</strong> {district_name}
      </p>
      <small>ID: {id}</small>
    </div>
  );
}
