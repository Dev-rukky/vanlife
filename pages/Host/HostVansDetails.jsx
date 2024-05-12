import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";

export async function loader( {params} ) {
    await requiredAuth()
    return getHostVans(params.id)
}

function HostVansDetails() {
    const currentVan = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <Link to=".."
                relative="path"
                className="back-button">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M12.959 6.65045C13.3403 6.65045 13.6495 6.34131 13.6495 5.95996C13.6495 5.57861 13.3403 5.26947 12.959 5.26947V6.65045ZM0.511069 5.47171C0.241416 5.74136 0.241416 6.17856 0.511069 6.44821L4.90533 10.8425C5.17498 11.1121 5.61218 11.1121 5.88183 10.8425C6.15149 10.5728 6.15149 10.1356 5.88183 9.86597L1.97582 5.95996L5.88183 2.05395C6.15149 1.7843 6.15149 1.3471 5.88183 1.07745C5.61218 0.807795 5.17498 0.807795 4.90533 1.07745L0.511069 5.47171ZM12.959 5.26947L0.999321 5.26947V6.65045L12.959 6.65045V5.26947Z" fill="#858585" />
                </svg>
                <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>

                        <div className="host-van-details-nav">
                            <NavLink 
                                style={({ isActive }) => isActive ? activeStyles : null}
                                to="." end >Details</NavLink>
                            <NavLink 
                                style={({ isActive }) => isActive ? activeStyles : null}
                                to="pricing">Pricing</NavLink>
                            <NavLink 
                                style={({ isActive }) => isActive ? activeStyles : null}
                                to="photos"
                            >Photos</NavLink>
                        </div>

                        <Outlet context={{ currentVan }} />

                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default HostVansDetails;