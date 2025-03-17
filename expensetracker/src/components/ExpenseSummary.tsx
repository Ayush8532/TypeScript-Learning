import { Expense } from "../types"

interface Props{
    expenses:Expense[];
}

const ExpenseSummary:React.FC<Props>=({expenses})=>{

    const monthlyExpenses:{[key:string]:number}={};

    expenses.forEach((expenses)=>{
        const date=new Date(expenses.date)
        const monthKey=`${date.getFullYear()}-${date.getMonth()}`;
      
        if(!monthlyExpenses[monthKey]){
            monthlyExpenses[monthKey]=0;
        }
        monthlyExpenses[monthKey]+=expenses.amount;
    });
    const sortedMonths=Object.keys(monthlyExpenses).sort((a,b)=>{
        const[yearA,monthA]=a.split("-").map(Number);
        const[yearB,monthB]=b.split("-").map(Number);

        return yearA-yearB||monthA-monthB;
    })
    console.log(sortedMonths);
    return(
        <>
  <div>
            <h2>Monthly Expenses</h2>
            <ul>
                {sortedMonths.map((monthKey) => {
                    const [year, month] = monthKey.split("-").map(Number);
                    const monthName = new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" });

                    return (
                        <li key={monthKey}>
                            <strong>{monthName}</strong>: "${monthlyExpenses[monthKey]}"
                        </li>
                    );
                })}
            </ul>
        </div>
        </>
    )
}

export default ExpenseSummary;