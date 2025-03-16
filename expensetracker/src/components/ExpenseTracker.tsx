import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { Expense } from "../types";
import { useEffect, useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseTracker: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [editExpense,setEditExpense]=useState<Expense|null>(null);
    const [selectedCategory,setSelectedCategory]=useState("");

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense: Expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id: string) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };
    const updateExpense=(updatedExpense:Expense)=>{
        setExpenses(expenses.map(exp=>(exp.id===updatedExpense.id?updatedExpense:exp)));
        setEditExpense(null);
    }

    const filterExpenses=selectedCategory?expenses.filter(expenses=>expenses.category===selectedCategory):expenses;
    const categories=[...new Set(expenses.map(expenses=>expenses.category))];
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-center text-purple-700">Expense Tracker</h1>
            <ExpenseForm addExpenses={addExpense} editExpense={editExpense} updateExpense={updateExpense}/>
            <ExpenseFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ExpenseList expenses={filterExpenses} deleteExpense={deleteExpense} editExpense={setEditExpense} />
        </div>
    );
};

export default ExpenseTracker;