import {useState} from 'react'

const CartCounter = () => {

    const [counter, setCounter] = useState(1)

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
        <div className="conter-container">
            <button onClick={() => rest()} disabled={counter <= 1}>-</button>
            <span>{counter}</span>
            <button onClick={() => onAdd()} disabled={counter >= 5}>+</button>
        </div>
    )
}

export default CartCounter