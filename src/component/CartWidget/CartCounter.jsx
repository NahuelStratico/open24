
const CartCounter = ({counter, setCounter}) => {


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
        <div className="conter-container field has-addons">
            <div className="counter">
                <button onClick={() => rest()} disabled={counter <= 1} className="button is-danger is-light">-</button>
            </div>
            <div className="counter">
                <span className="input is-light has-text-centered is-narrow" readonly>{counter}</span>
            </div>
            <div className="counter">
                <button onClick={() => onAdd()} disabled={counter >= 5} className="button is-success is-light">+</button>
            </div>
        </div>
    )
}

export default CartCounter