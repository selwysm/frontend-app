"use client";
import React, { useEffect } from "react";
import ExpenseFilters from "@/components/ExpenseFilters/ExpenseFilters";
import ExpenseList from "@/components/ExpenseList/ExpenseList";
import ExpenseSummary from "@/components/ExpenseSummary/ExpenseSummary";
import ExpenseModal from "@/components/ExpenseModal/ExpenseModal";
import { useExpenses } from "@/context/ExpenseContext";
import { useExpenseModal } from "@/hooks/useExpenseModal";
import { useDeleteExpense } from "@/hooks/useDeleteExpense";

const HomePage: React.FC = () => {
  const { fetchExpenses } = useExpenses();
  const {
    showModal,
    expenseToEdit,
    openAddModal,
    openEditModal,
    closeModal,
    handleSaveExpense,
    errorMessage,
    isLoading,
  } = useExpenseModal(fetchExpenses);

  const { deleteExpense, errorMessage: deleteError, isDeleting } = useDeleteExpense(fetchExpenses);

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="container">
      <ExpenseSummary onAddExpense={openAddModal} />
      <ExpenseFilters />
      <ExpenseList 
        onEditExpense={openEditModal} 
        onDeleteExpense={deleteExpense} 
      />
      <ExpenseModal
        show={showModal}
        onHide={closeModal}
        onSave={handleSaveExpense}
        expenseToEdit={expenseToEdit || undefined}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
      {deleteError && <div className="alert alert-danger mt-3">{deleteError}</div>}
    </div>
  );
};

export default HomePage;
