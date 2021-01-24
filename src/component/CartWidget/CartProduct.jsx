import {useState, useContext} from 'react';
import {Store} from '../../store';
import CounterCartCheck from './CounterCartCheck';
import './cartWidget.css'


const CartProduct = ({items, key, id, img, titulo, precio, pedidos,descripcion}) => {

    const [counter, setCounter]= useState(pedidos);
    const [data, setData]= useContext(Store);


    const [precioProducto,setPrecioProducto]= useState(precio);
/*     const [cantidadProducto,setCantidadProducto]= useState(cantidad) */
    console.log(precioProducto)
  
    // Funcion eliminar item del carrito
    const deleteItem = id => {
        const prod = data.items.find((prod) => prod.id === id);

        if(window.confirm('¿Querés eliminar el producto del carrito?')){
            data.items.forEach((item, index) => {
                 if(item.id === id) {
                     data.items.splice(index, 1)
                 }
             })
             setData({...data,
                 cantidad: data.cantidad -1,
                 items: [...data.items],
                 total: data.total - (prod.precio * prod.pedidos)
             });
        }
    }


    return (
        <>
            <div className="container detail-container">
                <article className="detail">
                    <div className="img-group">
                        <img src={`../../../products/${img}`} alt={titulo} className="img_detail-checkout"/>
                        <div className="img-descripcion">
                            <h2>{titulo}</h2>
                            <p className="descripcion">Categoria: {descripcion}</p>
                        </div>
                    </div>
                    <div className="descripcion-container">
                        <div className="title-descripcion">
                            <p>Precio por unidad: $ {precio}</p>
                            <p>Precio por cantidad: <b>$ {precioProducto*items.pedidos}</b> </p>
                        </div>
                        {/* <h3 className="text-center mb-3 Bellota-text-bold">{titulo} - ${precio}</h3> */}
                        
                            <CounterCartCheck
                            key={items.id}
                            items={items}
                            counter={counter}
                            setCounter={setCounter}
                            pedidos={pedidos}
                            stock={items.stock}
                            setPrecioProducto={setPrecioProducto}
                            precioProducto={items.precio}
                            />
                        
                            <span onClick={() => deleteItem(id)} className="delete"> Eliminar </span>
                        {/* <button onClick={ () => deleteItem(id)}>BORRAR</button> */}
                    </div>
                </article>
            </div>

        </>
      );
}
 
export default CartProduct;