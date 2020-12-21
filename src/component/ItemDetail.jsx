
const ItemDetail = (img, description, precio) => {
    return(
        <>
        <img src={img} alt=""/>
        <p>{description}</p>
        <span>{precio}</span>
        </>
    )
}

export default ItemDetail