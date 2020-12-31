import {useState} from 'react';

const ItemDetail = ({item, action}) => {

    
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
                    <button onClick={action}>Agregar al carrito</button>

                   {/* alert que sale cuando agregan al carrito */}
                    <div className={action? 'alert alert-success': 'd-none'} role="alert">
                        Producto agregado al carrito
                    </div>
                    

                </article>
               
            </div>
        </>
    )
}

export default ItemDetail