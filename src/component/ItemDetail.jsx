import {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../store';


const ItemDetail = ({item}) => {
    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("")


     function addCart(){
        setData(
            {...data,
            cantidad: data.cantidad + counter,
            items: [...data.items, item]
        }
        )
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
                <article className="d-flex flex-column justify-content-center align-items-center">

                    <img src={item.img} alt="Descripcion del producto"/>
                    <span>{item.descripcion}</span>
                    <span>{item.precio}</span>
                    <div className="conter-container">
                        <button onClick={() => rest()} disabled={counter <= 1}>-</button>
                        <span>{counter}</span>
                        <button onClick={() => onAdd()} disabled={counter >= 5}>+</button>
                    </div>
                    <button onClick={() => addCart()}>Agregar al carrito</button>

                   { redirect && <Redirect to="/cart"/> }                    

                </article>
               
            </div>
        </>
    )
}

export default ItemDetail