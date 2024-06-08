import React from "react"
import { BsStarFill } from "react-icons/bs"

function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2024",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2023",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return (
        <div>
            <section className="host-reviews">
                <div className="top-review-container">
                    <div className="top-text">
                        <h2>Your reviews</h2>
                        <p>Last <span>30 days</span></p>
                    </div>
                    <div className="review-stats">
                        <div className="overall-rate">
                            <h3>5.0</h3>
                            <BsStarFill className="star" />
                            <p>overall rating</p>
                        </div>
                        <div className="starss">
                            <div className="five-star">
                                <p>5 stars</p>
                                <div className="progress-bar-filled"></div>
                                <p>100%</p>
                            </div>
                            <div className="four-star">
                                <p>4 stars</p>
                                <div className="progress-bar"></div>
                                <p>0%</p>
                            </div>
                            <div className="four-star">
                                <p>3 stars</p>
                                <div className="progress-bar"></div>
                                <p>0%</p>
                            </div>
                            <div className="four-star">
                                <p>2 stars</p>
                                <div className="progress-bar"></div>
                                <p>0%</p>
                            </div>
                            <div className="four-star">
                                <p>1 stars</p>
                                <div className="progress-bar"></div>
                                <p>0%</p>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="customer-review">
                    <h3>Reviews (2)</h3>
                    {reviewsData.map((review) => (
                        <div key={review.id}>
                            <div className="review">
                                {[...Array(review.rating)].map((_, i) => (
                                    <BsStarFill className="review-star" key={i} />
                                ))}
                                <div className="review-info">
                                    <p className="name">{review.name}</p>
                                    <p className="date">{review.date}</p>
                                </div>
                                <p className="review-text">{review.text}</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Reviews;