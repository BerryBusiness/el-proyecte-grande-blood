import React from 'react';
import UserContext from "../Pages/UserContext.jsx";
import LinkButton from "./LinkButton.jsx";

const Header = () => {
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

    return (
        <header>
            <div className="mainTitle">
                <img src="/imf_logo.png" alt="IMF logo" className="ImfLogo"/>
                {user ? `Welcome ${user.name} !` : "IMF REDLABS LAB SERVICES"}
            </div>
            <div className="buttonContainer">
            <LinkButton to="/contact" text="Contact" onClick={handleContactClick}/>
            <LinkButton to="/packages" text="Packages" onClick={handlePackagesClick}/>
            <LinkButton to="/" text="Main Page" onClick={handleMainClick}/>
            </div>
        </header>
    );
};

export default Header;
