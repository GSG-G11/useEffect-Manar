//https://api.giphy.com/v1/gifs/search?api_key=QLFI5hPIKpJwq4lwVQtWjQ1o335XSrPJ&q=query&limit=25&offset=0&rating=g&lang=en
import React,{ useState, useEffect } from 'react';

function Giphyapi() {
    const [search , setSearch] = useState("")
    const [image , setImg] = useState([])
    const [isFetching, setIsFetching] = useState(false);

    // const handelimg = ({data}) => {
    //     data.forEach(element => {
    //         return element.images.original.url
    //     });
    // }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=QLFI5hPIKpJwq4lwVQtWjQ1o335XSrPJ&q=${search}&limit=25&offset=0&rating=g&lang=en`, 
            {signal}
        )
        .then(res => res.json())
        .then(({data}) => {
            data.forEach(element => {
                setImg(element.images.original.url)
                console.log(image , 'img');
            });
        })
        .catch(err => console.log(err))

        return () => abortController.abort(); // to cancal last req and begin with new one
    } , [search])


    return (
        <div>
            <hr />
            <form>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="search"
            />
            </form>
            {/* {image.map(url => <img src={url} alt="search"/>)} */}
            <img src={image} alt="search"/>
        </div>
    );
}

export default Giphyapi;