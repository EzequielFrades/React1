import { Link } from 'react-router-dom';
import { CartWidget } from 'React\src\Components\CartWindget\CartWidget.jsx';
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
      <nav className="navbar">
        <div className="navbar-brand">Sugar</div>
        <div className="nav-links">
        <Link to={"/"}>
        <button className="nav-link">Home</button>
          </Link>
          <Link to={"/category/accesorios perro"}>  
          <button className="nav-link" >Galletitas</button>
          </Link>
          <Link to={"/category/accesorios gato"}> 
          <button className="nav-link" >Golocinas</button>
          </Link>
          <Link to={"/category/alimento para gato"}> 
          <button className="nav-link" >Chocolates</button>
          </Link>  
          <Link to={"/category/alimento para perros"}> 
          <button className="nav-link">Bebidas</button> 
          </Link>
        </div>
        <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
    </>
    );
  };