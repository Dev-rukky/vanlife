import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom"; 


function HostVansDetails() {
    
    const { id } = useParams();
    const [currentVan, setCurrentVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])

    if(!currentVan) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}

export default HostVansDetails;