import {useState} from 'react'

const ItemCounter = ({stock, initial="1"}) => {

    let style={
        margin: '0 30px'
    }
    
    const [number, setNumber] = useState(0);

    return(
        <>
            <button onClick={()=>setNumber(number + 1)} >Sumar</button>
            <span style={style}>{number}</span>
            <button onClick={()=>setNumber(number - 1)}>Restar</button>
        </>
    )
}

export default ItemCounter