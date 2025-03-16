import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { Expense } from "../types";
import { useEffect, useState } from "react";

const ExpenseTracker: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [editExpense,setEditExpense]=useState<Expense|null>(null);

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

    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-center text-purple-700">Expense Tracker</h1>
            <ExpenseForm addExpenses={addExpense} editExpense={editExpense} updateExpense={updateExpense}/>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={setEditExpense} />
        </div>
    );
};

export default ExpenseTracker;