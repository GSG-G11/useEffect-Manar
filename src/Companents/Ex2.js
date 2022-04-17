import React,{ useState, useEffect } from 'react';

function Ex2() {
    const [width, setwidth] = useState('400px');
    const [height, setheight] = useState('400px');
    const [backgroundColor, setbackgroundColor] = useState('tomato');

    const handelSquareDis = e => {
        setwidth((prev) => e.offsetX)
        setheight((prev) => e.offsetY)

        if(width >= height/2){
            setbackgroundColor((prev) => 'blue')
        }

    }
    useEffect(() => {
        const squere = document.querySelector('.squere');
        squere.addEventListener('mousemove',handelSquareDis);

        return () => squere.removeEventListener('mousemove' , handelSquareDis)
    })

    return (
        <>
            <p className="squere" style={ { width : '250px' , height : '250px', backgroundColor : backgroundColor}}>I am now on X : {width}px and Y : {height}px</p>
        </>
    );
}

export default Ex2;