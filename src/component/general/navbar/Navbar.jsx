import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../navbar/navbar.css';
import logo from '../../../assets/logoOpen.png';
import { IoIosMenu } from "react-icons/io";
import {Sidebar} from './Sidebar';
import CartWidget from '../../CartWidget/CartWidget'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
       <>
       <header className="header">
            <div className="container">
                <Link to="/" >
                    <img src={logo} alt="Logo 24/7" className="logo"/>
                </Link>

                <div className="nav-container">
                    <nav className="navbar" >
                            <ul className="navbar-content">
                                <li className="navbar-item"><Link to="/" className="navbar-link link">Inicio</Link></li>
                                <li className="navbar-item"><Link to="/category/drugstore" className="navbar-link link">Drugstore</Link></li>
                                <li className="navbar-item"><Link to="/category/helados-y-drinks" className="navbar-link link">Helados & Drinks</Link></li>
                                <li className="navbar-item"><Link to="/category/tabaqueria-y-grow" className="navbar-link link">Tabaquería & Grow Shop</Link></li>
                                <li className="navbar-item"><Link to="/category/deco-y-energetica" className="navbar-link link">Deco & Energética</Link></li>
                                <li className="navbar-item"><Link to="/category/libreria-y-tecno" className="navbar-link link">Librería & Tecno</Link></li>
                                <li className="navbar-item"><Link to="/category/almacen-y-snack" className="navbar-link link">Almacén & Snacks</Link></li>
                                <li className="navbar-item"><Link to="/category/jugueteria-y-relagos" className="navbar-link link">Juguetería & Regalería</Link></li>
                            </ul>                    
                    </nav>
                    <div className="hamburger-nav">
                        <Link to="#" className="menu-bars">
                        <IoIosMenu onClick={showSidebar}/>
                        </Link>
                    </div>
                   <Link to="/cart"><CartWidget/></Link> 
                </div>
                
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-item" onClick={showSidebar}>
                   {Sidebar.map((menu, index) => {
                       return(
                        <li key={index} className={menu.cName}>
                            <Link to={menu.url}>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                       )
                   })}
                </ul>
            </div> 
       </header>
       </>
    )
}

export default Navbar