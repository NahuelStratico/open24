
const ItemDetail = ({item}) => {
    return(
        <>  <div className="container">
                <article className="d-flex flex-column justify-content-center align-items-center">
                    <img src={item.img} alt="Descripcion del producto"/>
                    <p>{item.description}</p>
                    <span>{item.precio}</span>
                    <button>Agregar al carrito</button>
                </article>
            </div>
        </>
    )
}

export default ItemDetail