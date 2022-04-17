import React,{ useState, useEffect } from 'react';

function UserProfile() {
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal
        fetch(`https://jsonplaceholder.typicode.com/users`, 
            {signal}
        )
        .then((data) => data.json())
        .catch(err => console.log(err))

        return () => abortController.abort();
    })

    return (
        <div>
            <h2> Exercise 5 </h2>
        </div>
    );
}

export default UserProfile;