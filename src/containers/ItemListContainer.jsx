
import {useState} from 'react'
import '../containers/itemListContainer.css'
const ItemListContainer = ({titulo, precio, stock}) => {

    const [counter, setCounter] = useState(1);

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
            <article className="d-flex flex-column text-center">
                <img src="https://placehold.it/200x200" alt="imagen del producto"/>
                <h3>{titulo}</h3>
                <span>{precio}</span>
            </article>
            <div className="conter-container">
                <button onClick={() => rest()} className={counter <= 1 ? 'disabled' : ''}>-</button>
                <span>{counter}</span>
                <button onClick={() => onAdd()} className={counter >= 5 ? 'disabled' : ''}>+</button>
            </div>
            <button className="btn btn-outline-primary btn-block mt-4">Agregar al carrito</button>
        </>
     
    )
}

export default ItemListContainer