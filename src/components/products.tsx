import { useContext } from "react"
import { CartContext } from "../context/cartProvider"

export type product = {
    image: string,
    name: string,
    description: string,
    price: number
    quantity?: number
}

type productsProps = {
    products: product[],
    productType: string
}

export function Products({products,productType}:productsProps) {
    const cartContext = useContext(CartContext)

    if (!cartContext) {
        throw new Error("useContext must be used within a CartProvider")
    }

    const { cart, setCart }  = cartContext;

    const addToCart = (product:product) => {
        const productInCart = cart.find(item => item.name === product.name)

        if (productInCart) {
            productInCart.quantity = (productInCart.quantity || 0) + 1
            setCart([...cart])
        } else {
            setCart([
                ...cart,{...product,quantity: 1}
            ])
        }

        

        console.log(cart)
    }

    return (
        <section className="px-2 max-w-5xl mb-20 min-w-[400px] lg:mx-auto">
            <h2 className="text-3xl my-10 text-center underline underline-offset-5">{productType}</h2>
            <div className="grid lg:grid-rows-3 lg:grid-flow-col border-2 rounded-2xl p-4 gap-5 ">
                {products.map((product,index) => {
                    return (
                        <div className="bg-blue-200 cursor-default lg:h-[600px] sm:w-[350px] max-w-[500px] lg:w-[450px] w-full rounded-2xl sm:mx-auto" key={index}>
                            <img className="h-[400px] w-full rounded-t-2xl bg-blue-50" src={product.image} alt="" />
                            <div className="flex gap-2 py-3 px-3 ">
                                <div className="">
                                    <h3 className="text-2xl mb-5 font-extrabold">{product.name}</h3>
                                    <p className="text-lg text-gray-600">{product.description}</p>
                                </div>
                                <p className="bg-blue-400 h-8 text-blue-950 font-bold py-1 px-2 rounded">${product.price}</p>
                            </div>
                            <button onClick={() => addToCart(product)} className="hover:bg-amber-800 hover:text-amber-50 cursor-pointer px-3 w-3/4 mx-10 bg-red-400 py-4 rounded-2xl text-blue-950 font-extrabold text-2xl">Add to cart</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}