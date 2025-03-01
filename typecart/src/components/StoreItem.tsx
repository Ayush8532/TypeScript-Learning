import { formatCurrency } from "../utils/formatCurrency"
type StoreItemProps={
    id:number
    name:string
    price:number
    imgUrl:string
}


export function StoreItem(props:StoreItemProps){
    const quantity=0;
return(
    <div>
        <span>{props.name}</span> <span>{formatCurrency(props.price)}</span>
        <div>
            {quantity===0 ? (
                <button>+Add to cart</button>
            ):(<div>
                <button>-</button><span>{quantity} in cart</span><button>+</button>
                <button>Remove</button>
            </div>)}
        </div>
    </div>
)
}