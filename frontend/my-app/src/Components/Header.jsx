import React from 'react';
import UserContext from "../Pages/UserContext.jsx";
import LinkButton from "./LinkButton.jsx";

const Header = ({ handleClick }) => {
    const { user, setUser } = React.useContext(UserContext);

    const handleContactClick = () => {
        console.log('Button clicked!');
    };

    return (
        <header>
            <div className="mainTitle">
                <img src="/imf_logo.png" alt="IMF logo" className="ImfLogo"/>
                {user ? `Welcome ${user.name} !` : "IMF REDLABS LAB SERVICES"}
            </div>
            <LinkButton to="/contact" text="Contact" onClick={handleContactClick}/>
        </header>
    );
};

export default Header;
