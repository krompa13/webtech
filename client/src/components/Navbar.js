import { Link } from 'react-router-dom';

const Navbar = ({loggedIn, logout}) => {
    if(loggedIn){
        return ( 
            <nav className="navbar">
                <h1>Coffee Shop</h1>
                <div className="links">
                    <Link to="/products">Coffee list</Link>
                    <Link to="/addproduct">Coffee order</Link>
                    <button onClick={() => {logout()}}>Log out</button>
                </div>
            </nav>
        );
    } else {
        return ( 
            <nav className="navbar">
                <h1>Coffee Shop</h1>
                <div className="links">
                    <Link to="/">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;