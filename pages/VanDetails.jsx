import React from "react"
import { json, useParams, Link, useLocation } from "react-router-dom";

function VanDetails() {
    const [van, setVan] = React.useState(null)
    const location = useLocation()
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="vansDetails">
            <div className="van-heading">
                <h1>Explore our van options</h1>
            </div>
            <div className="filters"></div>
            <div className="van-details-container">
            <Link to={`..${search}`}
                relative="path"
                className="back-button">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M12.959 6.65045C13.3403 6.65045 13.6495 6.34131 13.6495 5.95996C13.6495 5.57861 13.3403 5.26947 12.959 5.26947V6.65045ZM0.511069 5.47171C0.241416 5.74136 0.241416 6.17856 0.511069 6.44821L4.90533 10.8425C5.17498 11.1121 5.61218 11.1121 5.88183 10.8425C6.15149 10.5728 6.15149 10.1356 5.88183 9.86597L1.97582 5.95996L5.88183 2.05395C6.15149 1.7843 6.15149 1.3471 5.88183 1.07745C5.61218 0.807795 5.17498 0.807795 4.90533 1.07745L0.511069 5.47171ZM12.959 5.26947L0.999321 5.26947V6.65045L12.959 6.65045V5.26947Z" fill="#858585" />
                </svg>
                <span>Back to {type} vans</span>
            </Link>
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