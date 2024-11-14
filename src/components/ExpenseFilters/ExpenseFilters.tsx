"use client";
import React, { useState } from "react";
import { useExpenses } from "@/context/ExpenseContext";

const ExpenseFilters: React.FC = () => {
  const { applyFilters, clearFilters } = useExpenses();
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    const filters = {
      categories: category ? [category] : undefined,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
    };

    applyFilters(filters);
  };

  const handleClearFilters = () => {
    setCategory("");
    setStartDate("");
    setEndDate("");
    clearFilters();
  };

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="category" className="form-label">
            Categoría
          </label>
          <select
            id="category"
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
          <label htmlFor="startDate" className="form-label">
            Fecha de Inicio
          </label>
          <input
            id="startDate"
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="endDate" className="form-label">
            Fecha Final
          </label>
          <input
            id="endDate"
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
      <button className="btn btn-secondary mt-3" onClick={handleClearFilters}>
        Limpiar Filtros
      </button>
    </div>
  );
};

export default ExpenseFilters;
