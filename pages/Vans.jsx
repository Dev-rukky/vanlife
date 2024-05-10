import React from "react"
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../api"


export function loader() {
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const [error, setError] = React.useState(null)
    const vans = useLoaderData()
    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <span>${van.price}/day</span>
            </div>
            <p className="van-descript">{van.description}</p>
            <div className="van-cta">
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <Link
                    aria-label={`View details for ${van.name},priced at $${van.price} per day`}
                    to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>Learn More
                </Link>
            </div>
        </div>
    ))


    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }


    return (
        <div className="van-list-container">
            <div className="van-heading">
                <h1>Explore our van options</h1>
            </div>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => setSearchParams({ type: "simple" })}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button
                    onClick={() => setSearchParams({ type: "luxury" })}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button
                    onClick={() => setSearchParams({ type: "rugged" })}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>
                {typeFilter ? (<button
                    onClick={() => setSearchParams({})}
                    className="van-type clear-filters"
                >Clear filter</button>) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}