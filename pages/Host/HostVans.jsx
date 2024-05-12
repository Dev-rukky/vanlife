import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";

export async function loader() {
    await requiredAuth()
    return getHostVans()
}

function HostVans() {
    const vans = useLoaderData()

    const hostVanEls = vans.map(van => (
        <Link
            to={van.id}
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
                <section>
                    {hostVanEls}
                </section>
            </div>
        </section>
    )
}

export default HostVans;