
import {useContext} from 'react';
import {Store} from '../store';

const ItemCartContainer = (item) => {

    const [data, setData] = useContext(Store);

    const deleteItem = id => {
        if(window.confirm('¿Querés eliminar el producto del carrito?')){
            data.items.forEach((item, index) => {
                 if(item.id === id) {
                     data.items.splice(index, 1)
                 }
             })
             setData({...data,
                 cantidad: data.cantidad -1,
                 items: [...data.items]
             });
        }
    }

    return(
        <>
            <h3 className="text-center mt-5">Estas en el carrito</h3>

            {
                data.items.map(item => (
                    <article className="detail">
                        <img src={item.img} alt={item.descripcion} className="img-detail"/>
                        <div className="descripcion-container">
                            <div className="title-container">
                                <h2>{item.nombre}</h2>
                                <span>${item.precio}</span>
                            </div>
                            <p>{item.descripcion}</p>
                            <p>Unidades: {data.cantidad}</p>
                            <span onClick={() => deleteItem(item.id)}>Delete</span>
                        </div>
                    </article>
                ))

            }
           
        </>
        
    )
}

export default ItemCartContainer