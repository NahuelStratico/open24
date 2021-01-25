import {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../store';
import '../component/detail.css';
import CartCounter from '../component/CartWidget/CartCounter';


const ItemDetail = ({item}) => {
    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("");

    item.pedidos= counter;

    // Funcion agregar al carrito
     function addCart(id){
         const check = data.items.every(item => {
             return item.id !== id
         })

         if(check){
             data.items.filter(product => {
                 return product.id === id
             })
             setData(
                {...data,
                cantidad: data.cantidad += counter,
                items: [...data.items, item],
                total: data.total + (item.precio * counter)
               }
           )   
            setMessage(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado',
                text: "Tu producto fue agregado al carrito",
                showDenyButton: false,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: `Ir al carrito`,
                denyButtonText: `Seguir comprando`,
                }).then(res =>{
                    if(res.isConfirmed){
                        setRedirect(true)
                    }
                })
            )
        }
        else{
            setMessage(Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'El producto ya fue agregado al carrito',
              }))
        }
       
   
    }

    return(
        <>  
            <div className="container">
                <article className="detail">
                    <img src={`/products/${item.img}`} alt={item.descripcion} className="img-detail"/>
                    <div className="descripcion-container">
                        <div className="title-container">
                            <h2>{item.titulo}</h2>
                            <span>${item.precio * counter}</span>
                        </div>
                        <p className="item-descripcion">{item.descripcion}</p>
                        <p>{item.content}</p>
                        {/* <div className="conter-container">
                            <button onClick={() => rest()} disabled={counter <= 1}>-</button>
                            <span>{counter}</span>
                            <button onClick={() => onAdd()} disabled={counter >= 5}>+</button>
                        </div> */}
                        <CartCounter
                            item={item}
                            counter={counter}
                            setCounter={setCounter}
                        />
                        <button onClick={() => addCart(item.id)} className="btn-cart">Agregar al carrito</button>
                    </div>

                   { redirect && <Redirect to="/cart"/> }                    
                </article> 
            </div>
        </>
    )
}

export default ItemDetail