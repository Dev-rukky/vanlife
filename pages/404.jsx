import notPic from "../assets/svg/404.svg";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-container">
            <img src={notPic} alt="error-image" />
            <Link to="/" className="link-btn">Return to Home</Link>
        </div>
    )
}

export default NotFound;