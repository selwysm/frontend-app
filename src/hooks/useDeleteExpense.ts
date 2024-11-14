import { useState } from "react";
import api from "../services/api";
import { UseDeleteExpense } from "@/utils/interfaces";

export const useDeleteExpense = (
  reloadExpenses: () => void
): UseDeleteExpense => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteExpense = async (id: string) => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const response = await api.delete("/expense", { data: { id } });
      if (response.data.success) {
        reloadExpenses();
      } else {
        setErrorMessage("Error al eliminar el gasto");
      }
    } catch (error) {
      console.error("Error al eliminar el gasto:", error);
      setErrorMessage("Error al eliminar el gasto");
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteExpense, errorMessage, isDeleting };
};
