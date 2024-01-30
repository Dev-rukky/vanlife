import { Link, Outlet } from "react-router-dom";

function HostLayout() {
    return (
        <>
            <div className="host-nav">
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </div>

            <Outlet />
        </>
    )
}

export default HostLayout;