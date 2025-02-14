import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './Components/Products'
import { Carrito } from './Components/carrito'


function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])
  const [shopPage, setShopPage] = useState(false)

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const buyProducts = (idProduct) => {
    setShop([...shop, idProduct])
  }

  if (products.length == 0) {
    return <>
      <h1>Cargando...</h1>
    </>
  }

  if (shopPage == false){
  return (
    <>
      <h1>Fake Store</h1>
      <button>Carrito</button>
      <Products products={products} buyProducts={buyProducts} />
    </>
  )
} else {
  return <>
    <Carrito shop={shop} setShopPage={setShopPage} setShop={setshop}/>
  </>
}
}

export default App
