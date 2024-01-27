import React from "react"
import { json, useParams } from "react-router-dom";

function VanDetails() {
    const [van, setVan] = React.useState(null)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="van-details">
            <div className="van-heading">
                <h1>Explore our van options</h1>
            </div>
            <div className="filters"></div>
            <div className="van-details-container">
                {van ? (
                    <div className="van-details">
                        <img src={van.imageUrl} />
                        <div className="van-info-container">
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h2>{van.name}</h2>
                            <span>${van.price}/day</span>
                            <p>{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </div>
    )
}


export default VanDetails;