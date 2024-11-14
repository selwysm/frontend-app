import { useState } from "react";
import api from "../services/api";
import { Expense, UseExpenseModal } from "@/utils/interfaces";

export const useExpenseModal = (
  reloadExpenses: () => void
): UseExpenseModal => {
  const [showModal, setShowModal] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState<Expense | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openAddModal = () => {
    setExpenseToEdit(null);
    setShowModal(true);
    setErrorMessage("");
  };

  const openEditModal = (expense: Expense) => {
    setExpenseToEdit(expense);
    setShowModal(true);
    setErrorMessage("");
  };

  const resetForm = () => {
    setExpenseToEdit(null);
    setErrorMessage("");
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
    setIsLoading(false);
  };

  const handleSaveExpense = async (expense: Expense) => {
    setIsLoading(true);
    try {
      let response;
      if (expenseToEdit) {
        response = await api.put("/expense-update", {
          ...expense,
          id: expenseToEdit._id,
        });
      } else {
        response = await api.post("/expense", expense);
      }

      if (response.data.success === true) {
        reloadExpenses();
        closeModal();
      } else {
        setErrorMessage(
          `Error en la ${expenseToEdit ? "edición" : "creación"} del gasto.`
        );
      }
    } catch (error) {
      console.error("Error al guardar el gasto:", error);
      setErrorMessage(
        `Error en la ${expenseToEdit ? "edición" : "creación"} del gasto.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    showModal,
    expenseToEdit,
    openAddModal,
    openEditModal,
    closeModal,
    handleSaveExpense,
    errorMessage,
    isLoading,
  };
};
