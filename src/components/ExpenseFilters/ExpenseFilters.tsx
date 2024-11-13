"use client";
import React, { useState } from 'react';
import { useExpenses } from '@/context/ExpenseContext';

const ExpenseFilters: React.FC = () => {
  const { filterByCategory, filterByDateRange, clearFilters } = useExpenses();
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    if (category) filterByCategory(category);
    if (startDate && endDate) filterByDateRange(startDate, endDate);
  };

  return (
    <div className="mb-4">
      <h5>Filtros</h5>
      <div className="row">
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las Categorías</option>
            <option value="Comida">Comida</option>
            <option value="Transporte">Transporte</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3 me-2" onClick={handleFilter}>
        Aplicar Filtros
      </button>
      <button className="btn btn-secondary mt-3" onClick={clearFilters}>
        Limpiar Filtros
      </button>
    </div>
  );
};

export default ExpenseFilters;
