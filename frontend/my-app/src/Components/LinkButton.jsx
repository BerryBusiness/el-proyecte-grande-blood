import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, text, variant = 'primary' }) => {
    return (
        <Link to={to} className={`btn btn-${variant}`}>
            {text}
        </Link>
    );
};

export default LinkButton;
