import React,{ useState, useEffect } from 'react';

function Roboapi() {
    const [search , setSearch] = useState("")
    const [image , setImg] = useState([])


    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal
        fetch(`https://robohash.org/${search}`, 
            {signal}
        )
        .then((data) => setImg(data.url))
        .catch(err => console.log(err))

        return () => abortController.abort();
    } , [search])


    return (
        <div>
            <h2> Exercise 4 </h2>
            <hr />
            <form>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="search"
            />
            </form>
            <img src={image} alt="search"/>
        </div>
    );
}

export default Roboapi;