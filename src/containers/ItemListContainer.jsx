import {Link} from 'react-router-dom'
import '../containers/itemListContainer.css'
const ItemListContainer = ({id, titulo, precio, categoria, img, descripcion}) => {


    return(
        <>
            <Link to={`/item/${id}`} className="link">
                <article className="d-flex flex-column text-start">
                    <img src={`../products/${img}`} alt="imagen del producto" className="card-image"/>
                    <h3>{titulo}</h3>
                    <span className="precio">${precio}</span>
                    <p className="descripcion-product">{descripcion}</p>
                    <button className="btn-container">Ver detalle</button>
                </article>
            </Link>
        </>
     
    )
}

export default ItemListContainer