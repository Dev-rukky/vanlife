import { Link } from "react-router-dom";
import homePic from "../assets/svg/home-pic.svg"

function Home() {
    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link class="vans" to='/vans'>
                    <span class="button__icon-wrapper">
                        <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>

                        <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                    </span>
                    Find your vans
                </Link>
            </div>
            <img src={homePic} alt="" className="homepic" />
        </div>
    )
}

export default Home;