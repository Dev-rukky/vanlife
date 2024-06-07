import React from "react";
import chart from "../../assets/svg/chart.svg";
function Income() {
    const transactionData = [
        { amount: 720, date: "Jan 3, 2023", id: "1" },
        { amount: 560, date: "Dec 3, 2022", id: "2" },
        { amount: 980, date: "Jun 3, 2024", id: "3" }
    ]
    return (
        <div>
            <section className="host-dashboard-earning host-review">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                </div>
                <div className="host-name-dash">
                    <h2>John Smith</h2>
                    <h1>$2,260</h1>
                </div>
            </section>
            <section className="review-data">
                <img src={chart} alt="chart data" />
                <div className="info-main">
                    <div className="income-info">
                        <h3>Your transactions (3)</h3>
                        <p>Last<span>30 days</span></p>
                    </div>
                    <div className="transactions">
                        {transactionData.map((item) => (
                            <div key={item.id} className="transaction">
                                <h3>${item.amount}</h3>
                                <p>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Income;