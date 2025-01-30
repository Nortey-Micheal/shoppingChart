import { createContext, ReactNode } from "react";
import { Cart } from "./cartContext";

export const CartContext = createContext(Cart)

type cartProviderProps = {
    children: ReactNode
}

export function CartProvider({children}:cartProviderProps){
    return (
        <CartContext.Provider value={Cart}>
            {children}
        </CartContext.Provider>
    )
}