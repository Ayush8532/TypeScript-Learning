import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export function Store(){
    return (
        <>
        <h1>Store page</h1>
        <div>

            {
                storeItems.map((item)=>
                    // <StoreItem id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} />
                    <StoreItem {...item} />
                )
            }
            
        </div>
        </>
    )
}