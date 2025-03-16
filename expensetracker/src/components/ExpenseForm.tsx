import React, { useEffect, useState } from "react";
import { Expense } from "../types";

interface Props {
    addExpenses: (expense: Expense) => void;
    editExpense:Expense|null;
    updateExpense:(expense:Expense)=>void
}

const ExpenseForm: React.FC<Props> = ({ addExpenses,editExpense,updateExpense }) => {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>();
    const [category, setCategory] = useState<string>("");
    const[date,setDate]=useState<string>("");


    useEffect(()=>{
        if(editExpense){
            setName(editExpense.name);
            setAmount(editExpense.amount);
            setCategory(editExpense.category)
            setDate(editExpense.date)
        }
    },[editExpense])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !amount || !category) return;

        const newExpense: Expense = {
            id: editExpense? editExpense.id:crypto.randomUUID(),
            name,
            amount,
            category,
            date
        };

        if(editExpense){
            updateExpense(newExpense);
        }else{
            addExpenses(newExpense)
        }
        setName("");
        setAmount(0);
        setCategory("");
        setDate("")
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Expense Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    placeholder="Enter Amount"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter Category"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter Date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors"
                >
                   {editExpense?"Update Expense":"Add Expense"}
                </button>
            </form>
        </div>
    );
};

export default ExpenseForm;