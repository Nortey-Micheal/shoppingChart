import { useContext } from "react"
import { Items } from "./components/items"
import { Navbar } from "./components/navbar"
import { Products } from "./components/products"
import { CartContext } from "./context/cartProvider"

// import { useState } from "react"
function App() {

  const navLinks = [
    {label: "Home",url:"/"},
    {label: "About",url: "/"},
    {label: "Contact Us",url: "/"},
  ]

  const shoes = [
    {
      image:"/assets/images/shoes/shoe1.webp",
      name: "Nike",
      description: "High-quality running shoes with excellent cushioning and support.",
      price: 180
    },
    {
      image:"/assets/images/shoes/shoe2.avif",
      name: "Pastor Shoe",
      description: "Elegant leather shoes perfect for formal occasions.",
      price: 220
    },
    {
      image:"/assets/images/shoes/shoe3.avif",
      name: "All Stars",
      description: "Classic canvas sneakers with a timeless design.",
      price: 210
    },
    {
      image:"/assets/images/shoes/shoe4.webp",
      name: "Sports Shoe",
      description: "Lightweight and breathable shoes ideal for sports activities.",
      price: 90
    },
    {
      image:"/assets/images/shoes/shoe5.webp",
      name: "Gym Shoe",
      description: "Durable and comfortable shoes designed for gym workouts.",
      price: 50
    }
  ]

  const watches = [
    {
      image:"/assets/images/watches/watch1.jpeg",
      name: "Engine Watch",
      description: "Luxury watch with a sophisticated engine design.",
      price: 200000
    },
    {
      image:"/assets/images/watches/watch2.jpg",
      name: "Bretling Watch",
      description: "High-end watch known for its precision and craftsmanship.",
      price: 200000
    },
    {
      image:"/assets/images/watches/watch3.webp",
      name: "Luxury Watch",
      description: "Elegant watch with a sleek and modern design.",
      price: 15000
    },
    {
      image:"/assets/images/watches/watch4.avif",
      name: "Tachymetre",
      description: "Advanced watch with tachymeter functionality for speed measurement.",
      price: 350000
    },
    {
      image:"/assets/images/watches/watch5.jpg",
      name: "Apollo Enchanto",
      description: "Exquisite watch with a unique and enchanting design.",
      price: 190000
    }
  ]

  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error("useContext must be used within a CartProvider")
  }

  const {cart} = cartContext

  return (
    <>
      <Navbar image="src/assets/react.sgv" links={navLinks} />
      <Products productType="Shoes" products={shoes} />
      <Products productType="Watches" products={watches} />
      <Items purchase={cart}/>
    </>
  )
}

export default App
