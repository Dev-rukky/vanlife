import { Suspense } from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";
import { BsStarFill } from "react-icons/bs";

export async function loader({ request }) {
    await requiredAuth(request)
    return defer({ vans: getHostVans() })
}

function Dashboard() {
    const loaderData = useLoaderData()

    function renderVanElements(vans) {
        const hostVanEls = vans.map((van) => (
            <div className="host-van-single" key={van.id} >
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p className="van-descript">{van.description}</p>
                    <span>${van.price}/day</span>
                    <Link to={`vans/${van.id}`}>View</Link>
                </div>

            </div>

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
        <>
            <section className="host-dashboard-earning">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <Link to="/income">Details</Link>
                </div>
                <div className="host-name-dash">
                    <h2>John Smith</h2>
                    <h1>$2,260</h1>
                </div>
            </section>

            <section className="host-dashboard-reviews">
                <div className="review-score">
                    <h2>Review score</h2>
                    <div className="star-con">
                        <p><span>5.0</span>/5</p>
                        <BsStarFill className="star" />
                    </div>
                </div>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </Suspense>
            </section>
        </>
    )
}

export default Dashboard;