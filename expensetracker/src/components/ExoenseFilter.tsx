interface Props{
    categories:string[];
    selectedCategory:string,
    setSelectedCategory:(category:string)=>void
}

const ExportFilter:React.FC<Props>=({categories,selectedCategory,setSelectedCategory})=>{
    return(
<>
<div>
    <h1>Filter by categories</h1>
    <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
        <option value="">All</option>

{
    categories.map((category,index)=>(
        <option key={index} value={category}>{category}</option>
    ))
}
    </select>
</div>
</>
    );

}

export default ExportFilter;