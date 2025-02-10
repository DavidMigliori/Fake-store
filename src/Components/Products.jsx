export const Products = ({products}) =>{
    return <>
    <h1> {products.title}</h1>
    <p>Precio {products.price}</p>
    <img src= {products.image} height={200} width={300} alt="Bolso" />
    </>
}   