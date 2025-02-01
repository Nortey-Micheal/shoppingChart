import { useContext } from "react"
import { CartContext } from "../context/cartProvider"
import { DisplayContext } from "../context/displayContext"

type link = {
    label:string,
    url: string
}

type navbarProps = {
    links: link[],
    image: string
}

export function Navbar({links,image}: navbarProps) {
    const cartContext = useContext(CartContext)
    const displayContext = useContext(DisplayContext)

    if (!cartContext) {
        throw new Error("useContext must be used within a CartProvider")
    }

    const { cart } = cartContext

    if (!displayContext) {
        throw new Error("useContext must be used within a CartProvider")
    }

    const { display, setDisplay} = displayContext

    const changeDisplay = () => {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <nav className="sticky top-0 min-w-[390px] bg-blue-900 text-blue-100 px-2 py-3 text-lg">
            <div className="flex justify-between max-w-5xl lg:mx-auto">
                <img src={image} alt="Logo" />
                <div className="flex lg:gap-10 gap-3">
                    <ul className="flex lg:gap-14 gap-3">
                        {links.map((link,index) => {
                            return (
                                <li className=" lg:font-bold text-blue-50 bg-blue-500 px-2 rounded hover:text-blue-500 hover:bg-blue-50" key={index}><a href={link.url} >{link.label}</a></li>
                            )
                        })}
                    </ul>
                    <button onClick={changeDisplay} className="cursor-pointer w-12"  style={{backgroundImage: `url('/assets/cart.svg')`,backgroundRepeat: "no-repeat",position:"relative"}}><p className="absolute bottom-3 left-5 text-blue-950 bg-blue-300 rounded-full w-7">{cart.length}</p></button>
                </div>
            </div>
        </nav>
    )
}