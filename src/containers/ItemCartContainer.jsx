
import {useContext, useState} from 'react';
import {Store} from '../store';
import {Link} from 'react-router-dom'
import '../component/CartWidget/cartWidget.css'
import CartCounter from '../component/CartWidget/CartCounter'


const ItemCartContainer = () => {

    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(1);

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
                 total: data.total - (prod.precio * counter)
             });
        }
    }

     // Funcion contador sumar
    //  function onAdd(){
    //     if(counter >= 5){
    //         alert('Llegaste al limite del Stock')
    //     }else{
    //         setCounter(counter + 1)
    //     }
    // }
    // Funcion contador restar
    // function rest(){
    //     if(counter <= 1){
    //         alert('Llegaste al minimo de stock')
    //     }else{
    //         setCounter(counter - 1)
    //     }
        
    // }

    console.log(data.cantidad)
    
    if(data.cantidad === 0){
        return <div className="cart-empty">
                    <h2>Carrito vacio</h2>
                </div> 
    }else{

        return(
            <>
                <div className="mb-5">
    
                    <h3 className="text-center mt-5">Detalle de tu compra:</h3>
                    <div className="container mt-5">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Precio</th>
                                    <th className="has-text-cremita is-narrow">Quitar</th>
                                </tr>
                            </thead>
                            <tbody>
                    { 
                        data.items.map((item, index) => (
                                
                                <tr key={index}>
                                    <td>{item.titulo}</td>
                                    <td>{data.cantidad}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.precio}</td>
                                    <td  onClick={() => deleteItem(item.id)}> X </td> 
                                </tr>
                        ))
                    }
                            </tbody>
                        </table>
                    </div>
    
                    {/* {
                        
                        data.items.map((item, index) => (
                            <div className="container detail-container">
                               <article key={index} className="detail cart-container">
                                    <img src={`/products/${item.img}`} alt={item.descripcion} className="img-detail"/>
                                    <div className="descripcion-container">
                                        <div className="title-container">
                                            <h2>{item.titulo}</h2>
                                            <span>${item.precio * counter}</span>
                                        </div>
                                        <p>{item.descripcion}</p>
                                        <p>{item.content}</p> */}
                                        {/* <div className="conter-container">
                                            <button onClick={() => rest()} disabled={counter <= 1}>-</button>
                                            <span>{data.cantidad}</span>
                                            <button onClick={() => onAdd()} disabled={counter >= 5}>+</button>
                                        </div>  */}
                                         {/* <CartCounter
                                          
                                        />  */}
                                         {/* <p>Cantidad: {item.cantidad}</p>
                                         <span onClick={() => deleteItem(item.id)} className="delete"> Eliminar </span>
                                     </div>
                                 </article>
                             </div>
                        )) */}
    
                    {/* } */}
                    <div className="total">
                        <Link to="/checkout">Pagar</Link>   
                        <h3>Total: ${data.total}</h3>
                    </div>
                
                </div>
            </>
            
        )
    }

}

export default ItemCartContainer