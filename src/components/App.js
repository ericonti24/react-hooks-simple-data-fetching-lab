// create your App component here

import React, {useState, useEffect} from "react";

function App() {

    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(data => { 
            console.log(data.message)
            setImage(data.message)
            setLoading(true)
            
    })
    }, [])

    if (!loading) return <p>Loading...</p>

    return (
        <>
            <img src={image} alt="A Random Dog"/>
        </>
    )

}

export default App
