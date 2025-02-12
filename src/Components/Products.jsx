export const Products = ({ products, buyProducts}) => {
    return <div className="row">
        {products.map((element, index) => {
            return <div className="col-3" key={index}>
                <h1> {element.title}</h1>
                <p>${element.price}</p>
                <img src={element.image} height={200} width={300} alt="Bolso" />
                <button onClick={()=>(buyProducts(element.id))}>Comprar</button>
            </div>

        })}
    </div>
}   