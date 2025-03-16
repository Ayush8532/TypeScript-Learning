import { Expense } from "../types";

interface Props {
    expenses: Expense[];
    deleteExpense: (id: string) => void;
    editExpense:(expense:Expense)=>void;
}

const ExpenseList: React.FC<Props> = ({ expenses, deleteExpense,editExpense }) => {
    return (
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Expenses List</h2>
            <ul className="space-y-4">
                {expenses.map((item) => (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                        <li className="flex justify-between items-center">
                            <span className="text-lg">{item.name} - ${item.amount} ({item.category})</span>
                            <span className="text-lg">{item.date}</span>

                    <div className=" w-36 justify-between flex">
                            <button
                                className=" bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg transition-colors"
                                onClick={() => editExpense(item)}
                                >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors"
                                onClick={() => deleteExpense(item.id)}
                                >
                                Delete
                            </button>
                                </div>
                        </li>
                    </div>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mt-6 text-center">
                Total: ${expenses.reduce((acc, exp) => acc + exp.amount, 0)}
            </h3>
        </div>
    );
};

export default ExpenseList;