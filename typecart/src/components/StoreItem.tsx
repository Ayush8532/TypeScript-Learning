
type StoreItemProps={
    id:number
    name:string
    price:number
    imgUrl:string
}
export function StoreItem(props:StoreItemProps){
return(
    <div>
        <span>{props.name}</span> <span>{props.price}</span>
    </div>
)
}