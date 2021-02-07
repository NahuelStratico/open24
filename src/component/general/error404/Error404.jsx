import {Link} from 'react-router-dom';

const Error404 = () => {
    return(
        <div className="container d-flex flex-column mt-5">
            <h2>Ups...parece que algo salio mal</h2>
            <p>Volve a intentarlo</p>
            <Link to="/">Ir a Home</Link>
        </div>
    )
    
}

export default Error404