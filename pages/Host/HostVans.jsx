import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";
import React from "react";

export async function loader({ request }) {
    await requiredAuth(request)
    return defer({ vans: getHostVans() })
}

function HostVans() {
    const dataPromise = useLoaderData()

    function renderVanElements(vans) {
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
            <div className="host-van-list">
                <section>
                    {hostVanEls}
                </section>
            </div>
        )
    }



    return (
        <section>
            <h1 className="host-van-title">Your Listed Vans</h1>
            <Suspense fallback={<h1>Loading....</h1>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </section>
    )
}

export default HostVans;