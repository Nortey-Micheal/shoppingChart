import { useContext } from "react"
import { CartContext } from "../context/cartProvider"

type link = {
    label:string,
    url: string
}

type navbarProps = {
    links: link[],
    image: string
}

export function Navbar({links,image}: navbarProps) {
    const cart = useContext(CartContext)

    return (
        <nav>
            <img src={image} alt="Logo" />
            <ul>
                {links.map((link,index) => {
                    return (
                        <li key={index}><a href={link.url} >{link.label}</a></li>
                    )
                })}
            </ul>
            <button style={{backgroundImage: ("src/assets/react.svg")}}>{cart.length}</button>
        </nav>
    )
}