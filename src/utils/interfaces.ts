export interface Expense {
  _id?: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

export interface UseExpenseModal {
  showModal: boolean;
  expenseToEdit: Expense | null;
  openAddModal: () => void;
  openEditModal: (expense: Expense) => void;
  closeModal: () => void;
  handleSaveExpense: (expense: Expense) => void;
  errorMessage: string;
  isLoading: boolean;
}

export interface UseDeleteExpense {
  deleteExpense: (id: string) => Promise<void>;
  errorMessage: string;
  isDeleting: boolean;
}

export interface ExpenseContextType {
  expenses: Expense[];
  totalExpense: number;
  categoryTotals: { [key: string]: number };
  filteredExpenses: Expense[];
  applyFilters: (filters: {
    categories?: string[];
    startDate?: string;
    endDate?: string;
  }) => void;
  clearFilters: () => void;
  fetchExpenses: () => void;
}

export interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export interface ExpenseSummaryProps {
  onAddExpense: () => void;
}

export interface ExpenseModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (expense: Expense) => void;
  expenseToEdit?: Expense;
  errorMessage: string;
  isLoading: boolean;
}

export interface ExpenseListProps {
    onEditExpense: (expense: any) => void;
    onDeleteExpense: (id: string) => void;
  }