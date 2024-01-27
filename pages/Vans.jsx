import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="van-info">
                <h2>{van.name}</h2>
                <span>${van.price}/day</span>
            </div>
            <p className="van-descript">{van.description}</p>
            <div className="van-cta">
                <p className={`van-type ${van.type} selected`}>{van.type}</p>
                <Link 
                    aria-label={`View details for ${van.name},priced at $${van.price} per day`}
                    to={`/vans/${van.id}`}>Learn More
                </Link>
            </div>
        </div>
    ))


    return (
        <div className="van-list-container">
            <div className="van-heading">
                <h1>Explore our van options</h1>
            </div>
            <div className="filters"></div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}