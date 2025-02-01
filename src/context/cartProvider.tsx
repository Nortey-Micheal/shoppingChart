import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { product } from "../components/products";

type CartContextType = {
    cart: product[],
    setCart: Dispatch<SetStateAction<product[]>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

type cartProviderProps = {
    children: ReactNode
}

export function CartProvider({children}:cartProviderProps){

    const [ cart, setCart ] = useState<product[]>([])

    return (
        <CartContext.Provider value={{ cart,setCart }}>
            {children}
        </CartContext.Provider>
    )
}