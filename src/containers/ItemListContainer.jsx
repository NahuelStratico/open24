import {Link} from 'react-router-dom'
import '../containers/itemListContainer.css'
const ItemListContainer = ({item}) => {


    return(
        <>
            <Link to={`/item/${item.id}`}>
                <article className="d-flex flex-column text-center">
                    <img src={item.img} alt="imagen del producto"/>
                    <h3>{item.nombre}</h3>
                    <span>{item.precio}</span>
                    <button className="btn btn-outline-primary btn-block mt-4">Ver más</button>
                </article>
            </Link>
        </>
     
    )
}

export default ItemListContainer