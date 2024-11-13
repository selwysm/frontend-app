"use client";

import React from 'react';
import { useExpenses } from '@/context/ExpenseContext';

const ExpenseList: React.FC = () => {
  const { filteredExpenses } = useExpenses();

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Categoría</th>
          <th>Monto</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{new Date(expense.date).toLocaleDateString()}</td>
            <td>{expense.category}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
