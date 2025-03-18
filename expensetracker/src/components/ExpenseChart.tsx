import { Expense } from "../types"
import { BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts";

interface Props{
    expenses:Expense[];
}

const ExpenseChart:React.FC<Props>=({expenses})=>{

    const categoryTotals:{[key:string]:number}={};

    expenses.forEach((expense)=>{
        if(!categoryTotals[expense.category]){
            categoryTotals[expense.category]=0;
        }
        categoryTotals[expense.category]+=expense.amount;
    })

    const data=Object.entries(categoryTotals).map(([category,total])=>
    ({category,total})
    );
    return(
        <>
        <div>
            <h2>Expenses Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="total" fill="#8884d8"/>

                </BarChart>
            </ResponsiveContainer>
        </div>
        </>
    )

}


export default ExpenseChart;