import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from "../Pages/UserContext.jsx";
import { push as Menu } from 'react-burger-menu';

/*const CustomBurgerIcon = () => <img src="path/to/your/icon.png" />;*/
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser, isAdmin } = useContext(UserContext);
    const { pathname } = useLocation();
    const id = user?.id;

    const handleLogoutClick = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
        navigate('/login');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        <Menu className={"hamburger"} width={ '20%' }  /*customBurgerIcon={ <CustomBurgerIcon /> }*/>
            {user && pathname !== `/update/${id}` && (
                <Link className="menu-item" to={`/update/${id}`} onClick={toggleMenu}>Update Account</Link>
            )}
            {user && (
                <Link className="menu-item" to="/" onClick={() => { handleLogoutClick(); toggleMenu(); }}>Logout</Link>
            )}
            {!user && pathname !== "/login" && (
                <Link className="menu-item" to="/login" onClick={toggleMenu}>Login</Link>
            )}
            {!user && pathname !== "/register" && (
                <Link className="menu-item" to="/register" onClick={toggleMenu}>Register</Link>
            )}
            {isAdmin && user && (
                <Link className="menu-item" to="/admin" onClick={toggleMenu}>List all users</Link>
            )}

        </Menu>

    );
};

export default HamburgerMenu;
