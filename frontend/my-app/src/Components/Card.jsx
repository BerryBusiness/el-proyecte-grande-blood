import React from 'react';

const Card = ({ imgurl, text  }) => {
    return (
        <div className="card">
            <img src={imgurl} className="card-img" alt={text}/>
            <div className="card-img-overlay">
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;
