"use client";
import React from 'react';
import { useExpenses } from '@/context/ExpenseContext';

const ExpenseSummary: React.FC = () => {
  const { totalExpense, categoryTotals } = useExpenses();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Resumen de Gastos</h4>
        <p>Total Gastado: ${totalExpense.toFixed(2)}</p>
        <h5>Gastos por Categoría:</h5>
        <ul>
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <li key={category}>
              {category}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseSummary;