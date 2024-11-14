"use client";
import "./ExpenseList.css";
import { useExpenses } from "@/context/ExpenseContext";
import { ExpenseListProps } from "@/utils/interfaces";
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";



const ExpenseList: React.FC<ExpenseListProps> = ({
  onEditExpense,
  onDeleteExpense,
}) => {
  const { filteredExpenses } = useExpenses();

  return (
    <div className="expense-list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Monto</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense._id}>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.description}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => onEditExpense(expense)}
                >
                  <BsPencilSquare />
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDeleteExpense(expense._id!)}
                >
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
