"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import api from "../services/api";
import { Expense, ExpenseContextType } from "@/utils/interfaces";

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState<{
    [key: string]: number;
  }>({});
  const [currentFilters, setCurrentFilters] = useState<{
    categories?: string[];
    startDate?: string;
    endDate?: string;
  }>({});

  const fetchExpenses = useCallback(async () => {
    try {
      const response = await api.post("/expenses");
      setExpenses(response.data);
      setFilteredExpenses(response.data);
      calculateSummary(response.data);
    } catch (error) {
      console.error("Error al obtener los gastos:", error);
    }
  }, []);

  const fetchExpensesWithFilters = async (filters: {
    categories?: string[];
    startDate?: string;
    endDate?: string;
  }) => {
    try {
      setCurrentFilters(filters);
      const response = await api.post("/expenses", filters);
      setFilteredExpenses(response.data);
      calculateSummary(response.data);
    } catch (error) {
      console.error("Error al obtener los gastos filtrados:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateSummary = (expenses: Expense[]) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setTotalExpense(total);

    const totalsByCategory: { [key: string]: number } = {};
    expenses.forEach((expense) => {
      if (!totalsByCategory[expense.category])
        totalsByCategory[expense.category] = 0;
      totalsByCategory[expense.category] += expense.amount;
    });
    setCategoryTotals(totalsByCategory);
  };

  const applyFilters = (filters: {
    categories?: string[];
    startDate?: string;
    endDate?: string;
  }) => {
    fetchExpensesWithFilters(filters);
  };

  const clearFilters = () => {
    setCurrentFilters({});
    fetchExpenses();
  };

  const refetchWithCurrentFilters = () => {
    if (Object.keys(currentFilters).length > 0) {
      fetchExpensesWithFilters(currentFilters);
    } else {
      fetchExpenses();
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        totalExpense,
        categoryTotals,
        filteredExpenses,
        applyFilters,
        clearFilters,
        fetchExpenses: refetchWithCurrentFilters,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses debe usarse dentro de ExpenseProvider");
  }
  return context;
};
