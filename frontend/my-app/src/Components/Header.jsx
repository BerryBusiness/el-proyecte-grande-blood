import React, {useEffect, useState} from 'react';
import UserContext from "../Pages/UserContext.jsx";
import LinkButton from "./LinkButton.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.jsx";


const Header = ({ isAdmin, appointment, id }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const { user, setUser } = React.useContext(UserContext);

    const handleContactClick = () => {
        console.log('Contact Button clicked!');
    };
    const handlePackagesClick = () => {
        console.log('Pack Button clicked!');
    };
    const handleMainClick = () => {
        console.log('Main Button clicked!');
    };


    const handleLogoutClick = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
        navigate('/login');
    };

    return (
        <header>
            <div className="mainTitle">
                <Link to="/">
                    <img src="/imf_logo.png" alt="IMF logo" className="ImfLogo"/>
                </Link>
                {user ? `Welcome ${user.name}` : "IMF REDLABS LAB SERVICES"}
                <HamburgerMenu/>

            </div>
            <div className="buttonContainer">
                {user ? (
                    <>
                        {currentPath !== `/update/${id}` && (
                            <LinkButton to={`/update/${id}`} text="Update Account" onClick={handleMainClick}/>
                        )}
                        <LinkButton to="/" text="Logout" onClick={handleLogoutClick}/>
                    </>
                ) : (
                    <>
                        {currentPath !== "/login" && (
                        <LinkButton to="/login" text="Login" onClick={handleMainClick}/>

                        )}

                        {currentPath !== "/register" && (
                            <LinkButton to="/register" text="Register" onClick={handleMainClick}/>
                        )}
                    </>
                )}
                {isAdmin && user ? <LinkButton to="/admin" text="List all users" state={{from: id}} />
                    : ""}
            </div>
            <div className="buttonContainer">
                <LinkButton to="/contact" text="Contact" onClick={handleContactClick}/>
                <LinkButton to="/packages" text="Packages" onClick={handlePackagesClick}/>
                {currentPath !== "/" && (
                    <LinkButton to="/" text="Main Page" onClick={handleMainClick}/>
                )}

            </div>
        </header>
    );
};

export default Header;
