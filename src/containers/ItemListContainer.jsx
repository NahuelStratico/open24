
const ItemListContainer = ({titulo, descripcion, precio}) => {
    return(
        <>
            <article className="d-flex flex-column">
                <img src="https://placehold.it/200x200" alt="imagen del producto"/>
                <h3>{titulo}</h3>
                <span>{precio}</span>
            </article>
            <button className="btn btn-primary">Agregar al carrito</button>
        </>
     
    )
}

export default ItemListContainer