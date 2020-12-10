
const ItemListContainer = ({titulo, descripcion, precio}) => {
    return(
       <article>
           <img src="https://placehold.it/100x200" alt="imagen del producto"/>
            <h3>{titulo}</h3>
            <h5>{descripcion}</h5>
            <span>{precio}</span>
       </article>
    )
}

export default ItemListContainer