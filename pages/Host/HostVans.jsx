import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVanEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >

            <div className="host-van-single" key={van.id} >
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p className="van-descript">{van.description}</p>
                    <span>${van.price}/day</span>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-van-title">Your Listed Vans</h1>
            <div className="host-van-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVanEls}
                        </section>
                    ) : (
                        <h2>Loading....</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans;