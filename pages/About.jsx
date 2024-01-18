import aboutbg from "../assets/images/about-pic.png"
import { Link } from "react-router-dom"

function About() {
    return (
        <div>
            <div className="about-page-container">
                <div className="about-heading">
                    <p>About Us</p>
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                </div>
                <div className="our-mission">
                    <div className="our-mission-text">
                        <h1>Our Mission</h1>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
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
                    <img src={aboutbg} alt="our mission" />
                </div>
            </div>
            <div className="about-cta">
                <h1>Your destination is waiting. Your van is ready.</h1>
                <Link class="vans" to='/vans'>
                    <span class="button__icon-wrapper">
                        <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>

                        <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                    </span>
                    Explore Our Vans
                </Link>
            </div>
        </div>
    );
}

export default About;