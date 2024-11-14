import React from "react";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";
import HomePage from "./HomePage";
import { ExpenseProvider } from "@/context/ExpenseContext";

export default function Home() {
  return (
    <ExpenseProvider>
      <ResponsiveLayout>
        <HomePage />
      </ResponsiveLayout>
    </ExpenseProvider>
  );
}
