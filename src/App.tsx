import React from 'react'
import { List } from './components/List'

const App = () => {


  const productos = [
    {
      nombre: "Leche", 
      precio: 250
    }, 
    {
      nombre: "Pan", 
      precio: 25
    }, 
    {
      nombre: "Queso", 
      precio: 20
    }
  ]

  return (
    <div><List
    name = {"Listado"}
    productos = {productos}    
    /></div>
  )
}

export default App