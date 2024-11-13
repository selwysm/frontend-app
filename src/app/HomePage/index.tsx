import React from 'react';
import ExpenseFilters from "@/components/ExpenseFilters/ExpenseFilters";
import ExpenseList from "@/components/ExpenseList/ExpenseList";
import ExpenseSummary from "@/components/ExpenseSummary/ExpenseSummary";
import { ExpenseProvider } from "@/context/ExpenseContext";

const HomePage: React.FC = () => {
  return (
    <ExpenseProvider>
      <div className="container">
        <ExpenseSummary />
        <ExpenseFilters />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default HomePage;