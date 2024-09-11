import React from "react";
 const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>
                Dashboard
            </h1>
            <a href="#">Home</a>
            <section className="part1">
                <div>
                    <div className="sale">sale</div>
                    <div className="cus-order">
                        <div className="customer">cus</div>
                        <div className="order">order</div>
                    </div>
                </div>
                <div className="traffic">
                    traffic
                </div>
            </section>

            <section className="part2">
                <div className="users">
                    user
                </div>
                <div className="rating">
                    <div className="box">user</div>
                    <div className="box">rate</div>
                    <div className="box">session</div>
                </div>
            </section>

            <section className="part3">
                <div className="graphs">traffic graphs</div>
            </section>
        </div>
    )
 }
 export default Dashboard;