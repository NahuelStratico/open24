import {Link} from 'react-router-dom'
import '../containers/itemListContainer.css'
const ItemListContainer = ({item}) => {


    return(
        <>
            <Link to={`/item/${item.id}`} className="link">
                <article className="d-flex flex-column text-start">
                    <img src={item.img} alt="imagen del producto" className="card-image"/>
                    <h3>{item.nombre}</h3>
                    <span className="precio">${item.precio}</span>
                    <p className="descripcion-product">{item.descripcion}</p>
                    <button className="btn-container">Agregar al carrito</button>
                </article>
            </Link>
        </>
     
    )
}

export default ItemListContainer