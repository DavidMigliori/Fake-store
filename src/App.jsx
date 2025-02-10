import { useEffect, useState } from 'react'
import './App.css'
import { Products}  from './Components/Products'

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async() => {
  let response = await fetch ("https://fakestoreapi.com/products")
  let data = await response.json() 
  setProducts(data)
}

useEffect (()=>{
  getProducts()
}, [])
  
if(products.length == 0) {
  return <>
  <h1>Cargando...</h1>
  </>
}
  return (
    <>
    <h1>Fake Store</h1>
    <p>{products[0].title}</p>
    <Products products={products[7]}/> 
    </>   
  )
}

export default App
