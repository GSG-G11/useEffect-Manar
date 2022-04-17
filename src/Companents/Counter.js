import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        return setCount(count + 1);
    }

    useEffect(() => {
        window.addEventListener('mousedown' , increment)
        return () =>  window.addEventListener('mousedown' , null)
    });

    return (
        <div>
            <div> count {count} </div>
            <hr />
        </div>
    );
}

export default Counter;