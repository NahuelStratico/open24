import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return(
        <footer className=" text-center bg-dark">
            <Link to="/" className="text-decoration-none">
                    <p>Todos nuestros productos y más <span className="font-weight-bold">Open 24/7</span></p>
            </Link>
        </footer>
    )
}

export default Footer