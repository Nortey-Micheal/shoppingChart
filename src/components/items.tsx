import { useContext } from "react"
import { DisplayContextType } from "../context/displayContext"
import { product } from "./products"
import { DisplayContext } from "../context/displayContext"
import { CartContext } from "../context/cartProvider"

type itemsProps = {
    purchase: product[]
}

export function Items({purchase}:itemsProps) {
    const displayContext = useContext<DisplayContextType>(DisplayContext)
    // const displayContext = useContext(DisplayContext)
    
    if (!displayContext) {
        throw new Error("useContext must be used within a CartProvider")
   }
    
    const { display, setDisplay } = displayContext

    let total = 0;
    for (let i = 0; i < purchase.length; i++ ){
        total += (purchase[i].price * (purchase[i].quantity || 0))
    }

    const cartContext = useContext(CartContext)
    
        if (!cartContext) {
            throw new Error("useContext must be used within a CartProvider")
        }
    
        const { setCart }  = cartContext;

    const checkout = () => {
        alert("Thanks for your purchase")
        setDisplay('none')
        setCart([])
    }

    let totalQuantity = 0

    for (let i = 0; i < purchase.length;i++) {
        totalQuantity += (purchase[i].quantity || 0)
    }

 return (
    <section style={{display}} className= "rounded-2xl p-3 max-w-5xl lg:left-1/6 scroll w-3/4 h-4/5 bg-blue-300 fixed top-1/8 left-1/8 ">
        <h3 className="font-extrabold text-3xl text-center underline">All Purchases</h3>
        <table className="w-full my-10 ">
            <thead>
                <tr className="border-b-2">
                    <th className="p-2 text-left">Products</th>
                    <th className="p-2 text-left">Quantity</th>
                    <th className="p-2 text-left">Amount</th>
                </tr>
            </thead>
            {purchase.map(product => (
                <tr className="border-b">
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">{product.quantity}</td>
                    <td className="p-2">{(product.quantity || 0) * product.price}</td>
                </tr>
            ))}
            <tr className="font-bold">
                <td className="p-2">Total </td>
                <td className="p-2">{totalQuantity} </td>
                <td className="p-2 ">{total}</td>
            </tr>
        </table>
        <button onClick={() => setDisplay('none')} className="absolute top-1 right-1 w-8 rounded-full cursor-pointer font-extrabold bg-green-600 text-2xl text-red-50">X</button>
        <button onClick={checkout} className="hover:bg-amber-800 hover:text-amber-50 cursor-pointer px-3 w-40 lg:w-72 bg-red-400 lg:mx-23 py-4 rounded-2xl text-blue-950 font-extrabold text-2xl">Checkout</button>
    </section>
 )
}