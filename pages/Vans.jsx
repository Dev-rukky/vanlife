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
            <img src={van.imageUrl} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <span>${van.price}/day</span>
            </div>
            <p className="van-descript">{van.description}</p>
            <div className="van-cta">
                <p className="van-type">{van.type}</p>
                <Link>Learn More</Link>
            </div>
            {/* <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i> */}
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