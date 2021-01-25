import {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../store';
import '../component/detail.css';
import CartCounter from '../component/CartWidget/CartCounter';
import {getFirestore} from '../firebase/index'


const ItemDetail = ({item}) => {
    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("");
    const db = getFirestore();
    const [stock, setStock] = useState(item.stock);

    console.log(stock)

    item.pedidos= counter;

    // Funcion agregar al carrito
        function addCart(id){
        const check = data.items.every(item => {
            return item.id !== id
        })

        if(check){

            // Verifico si el ID del producto es el mismo del clickeado
            data.items.filter(product => {
                return product.id === id
            })

            // Actualizo el stock de la base de datos
            setStock(stock -1);

            db.collection('productos').doc(id).update({
                stock: stock,
            })
            .then(() => console.log('Se actualizó correctamente'))
            .catch(error => console.log(error));

            // Atualizo el context
            setData(
                {...data,
                cantidad: data.cantidad += counter,
                items: [...data.items, item],
                total: data.total + (item.precio * counter)
                }
            )   

            // Mensaje de confirmación 
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

        }else{
        // // Mensaje de que el producto ya se agrego al carrito
            setMessage(Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'El producto ya fue agregado al carrito',
                }))
            }
                
        }

    
    console.log(stock)

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
                        {
                            stock > 0 ?
                            <button onClick={() => addCart(item.id)} className="btn-cart">Agregar al carrito</button>
                            :
                            <button className="btn-cart" disabled="disabled">Producto agotado</button>
                        }
                    </div>

                   { redirect && <Redirect to="/cart"/> }                    
                </article> 
            </div>
        </>
    )
}

export default ItemDetail