import React, { useState } from 'react';
import './ColorBox.scss'
function ColorBox() {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('colorbox') || 'deeppink'
        return initColor
    });

    const changeColor = () => {
        const colors = ['gray', 'red', 'green', 'black']
        var item = getRandomColor(colors);
        localStorage.setItem('colorbox', item)
        setColor(item);
    }
    return (
        <div className="color-box" style={{
            backgroundColor: color,
        }} onClick={changeColor}>
            Color box
        </div>
    );
}

const getRandomColor = (colors) => {
    return colors[Math.floor(Math.random()*colors.length)]
}

export default ColorBox;