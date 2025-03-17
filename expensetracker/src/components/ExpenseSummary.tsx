import { Expense } from "../types"

interface Props{
    expenses:Expense[];
}

const ExpenseSummary:React.FC<Props>=({expenses})=>{

    const monthlyExpenses:{[key:string]:number}={};

    expenses.forEach((expenses)=>{
        const month=new Date(expenses.date).toLocaleString("default",{month:"long",year:"numeric"});
        if(!monthlyExpenses[month]){
            monthlyExpenses[month]=0;
        }
        monthlyExpenses[month]+=expenses.amount;
    })
    return(
        <>
        <div>
            <h2>Monthly Expenses</h2>
            <ul>
                {Object.entries(monthlyExpenses).map(([month,total])=>
                <li key={month}>
                    <strong>{month}</strong>"${total}"
                </li>
                )}

            </ul>
        </div>
        </>
    )
}

export default ExpenseSummary;