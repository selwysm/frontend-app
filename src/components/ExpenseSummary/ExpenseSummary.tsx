"use client";
import React from "react";
import "./ExpenseSummary.css";
import { useExpenses } from "@/context/ExpenseContext";
import { ExpenseSummaryProps } from "@/utils/interfaces";

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ onAddExpense }) => {
  const { totalExpense, categoryTotals } = useExpenses();

  return (
    <div className="card mb-4 expense-summary-container">
      <button className="btn btn-primary btn-position" onClick={onAddExpense}>
        Agregar Gasto
      </button>
      <div className="card-body">
        <h4 className="card-title">Resumen de Gastos</h4>
        <div className="summary-content">
          <div className="summary-item total-expense">
            <strong>Total Gastado:</strong> ${totalExpense.toFixed(2)}
          </div>
          <div className="summary-item category-expenses">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <span key={category} className="category-item">
                <strong>{category}:</strong> ${amount.toFixed(2)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
