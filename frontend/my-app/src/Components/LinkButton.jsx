import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, text, variant = 'primary', onClick, ...props  }) => {
    return (
        <Link to={to} className={`btn btn-${variant}`} onClick={onClick} {...props}>
            {text}
        </Link>

    );
};

export default LinkButton;
