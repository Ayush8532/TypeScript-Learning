import { createContext, useContext, useState } from "react";


type ShoppingCartProviderProps={
    children:React.ReactNode

}
type CartItem={
    id:number
    quantity:number
}
type ShopingCartContext={
    getItemQuantity:(id:number)=>number
    increaseCartQuantity:(id:number)=>void
    decreaseCartQuantity:(id:number)=>void
    removeFromCart:(id:number)=>void
}

const ShoppingCartContext=createContext({} as ShopingCartContext);

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children}:ShoppingCartProviderProps){

    const[cartItem,setCartItem]=useState<CartItem[]>([])

    function getItemQuantity(id:number){
        return cartItem.find(item=>item.id===id)?.quantity||0
    }

    function increaseCartQuantity(id:number){
        setCartItem(currItems=>{
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems,{id,quantity:1}]
            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return{...item,quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id:number){
        setCartItem(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return{...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setCartItem(currItems=>{return currItems.filter(item=>item.id!==id)})
    }
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}