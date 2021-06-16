import { useEffect, useRef, useState } from "react";


function randomColor(current){
    const COLORS = ['red', 'blue', 'yellow']
    const currentIndex = COLORS.indexOf(current)
    let newIndex = currentIndex
    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() * 3)
    }
    return COLORS[newIndex]
}

function useMagicColor() {
    
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')
    useEffect(() => {
        const conlorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)
            colorRef.current = newColor
        }, 1000);
        return () => {
            clearInterval(conlorInterval)
        };
    }, []);
    return color
}



export default useMagicColor;