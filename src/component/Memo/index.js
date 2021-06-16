import React from 'react';


function Hero(props) {
    const {name}= props
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default React.memo(Hero);