import { Navbar } from "./components/navbar"

// import { useState } from "react"
function App() {

  const navLinks = [
    {label: "Home",url:"/"},
    {label: "About",url: "/"},
    {label: "Contact Us",url: "/"},
  ]

  const shoes = [
    {
      
    }
  ]

  return (
    <>
      <Navbar image="src/assets/react.sgv" links={navLinks} />
    </>
  )
}

export default App
