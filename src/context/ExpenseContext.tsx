"use client";
import React, { createContext, useContext} from 'react';
import { useState, useEffect } from "react";
import api from '../services/api';

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

interface ExpenseContextType {
  expenses: Expense[];
  totalExpense: number;
  categoryTotals: { [key: string]: number };
  filteredExpenses: Expense[];
  filterByCategory: (category: string) => void;
  filterByDateRange: (startDate: string, endDate: string) => void;
  clearFilters: () => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState<{ [key: string]: number }>({});
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [dateRangeFilter, setDateRangeFilter] = useState<{ startDate: string; endDate: string } | null>(null);

  useEffect(() => {
    // api.get('/expenses').then((response) => {
    //   setExpenses(response.data);
    //   setFilteredExpenses(response.data);
    //   calculateSummary(response.data);
    // });
  }, []);

  const calculateSummary = (expenses: Expense[]) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setTotalExpense(total);

    const totalsByCategory: { [key: string]: number } = {};
    expenses.forEach((expense) => {
      if (!totalsByCategory[expense.category]) totalsByCategory[expense.category] = 0;
      totalsByCategory[expense.category] += expense.amount;
    });
    setCategoryTotals(totalsByCategory);
  };

  const filterByCategory = (category: string) => {
    setCategoryFilter(category);
    const filtered = expenses.filter((expense) => expense.category === category);
    setFilteredExpenses(filtered);
  };

  const filterByDateRange = (startDate: string, endDate: string) => {
    setDateRangeFilter({ startDate, endDate });
    const filtered = expenses.filter(
      (expense) => expense.date >= startDate && expense.date <= endDate
    );
    setFilteredExpenses(filtered);
  };

  const clearFilters = () => {
    setCategoryFilter(null);
    setDateRangeFilter(null);
    setFilteredExpenses(expenses);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        totalExpense,
        categoryTotals,
        filteredExpenses,
        filterByCategory,
        filterByDateRange,
        clearFilters,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses debe usarse dentro de ExpenseProvider');
  }
  return context;
};
