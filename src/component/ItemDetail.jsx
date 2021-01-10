import {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../store';
import '../component/detail.css'


const ItemDetail = ({item}) => {
    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("")


     function addCart(id){
         const check = data.items.every(item => {
             return item.id !== id
         })
         console.log(check)
         if(check){
             data.items.filter(product => {
                 return product.id === id
             })
             setData(
                {...data,
                cantidad: data.cantidad + counter,
                items: [...data.items, item]
               }
           )
            
        }else{
            alert('El producto ya fue agregado al carrito')
        }
       
        // setMessage(Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'Producto agregado',
        //     text: "Tu producto fue agregado al carrito",
        //     showConfirmButton: false,
        //     timer: 2000
        //   }))
        // setTimeout(() => {
        //     setRedirect(true)
        // }, 2500);  
    }

    console.log(data);


    function onAdd(){
        if(counter >= 5){
            alert('Llegaste al limite del Stock')
        }else{
            setCounter(counter + 1)
        }
    }

    function rest(){
        if(counter <= 1){
            alert('Llegaste al minimo de stock')
        }else{
            setCounter(counter - 1)
        }
    }

    return(
        <>  
            <div className="container">
                <article className="detail">
                    <img src={item.img} alt={item.descripcion} className="img-detail"/>
                    <div className="descripcion-container">
                        <div className="title-container">
                            <h2>{item.nombre}</h2>
                            <span>${item.precio}</span>
                        </div>
                        <p>{item.descripcion}</p>
                        <p>{item.content}</p>
                        <div className="conter-container">
                            <button onClick={() => rest()} disabled={counter <= 1}>-</button>
                            <span>{counter}</span>
                            <button onClick={() => onAdd()} disabled={counter >= 5}>+</button>
                        </div>
                        <button onClick={() => addCart(item.id)} className="btn-cart">Agregar al carrito</button>
                    </div>

                   { redirect && <Redirect to="/cart"/> }                    
                </article> 
            </div>
        </>
    )
}

export default ItemDetail