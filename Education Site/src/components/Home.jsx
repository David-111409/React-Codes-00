import React from "react";
import { cardsData } from "./data";
function Home() {
    return (
        <section id="home">
            <div className="container">
                <div className="home-header">
                    <span>Join Us</span>
                    <h1>Best Learning Opportunities</h1>
                    <p>
                        We know how large objects will act, but things on a
                        small scale just do not act that way.
                    </p>
                    <a href="#" className="btn btn-red">
                        Get Quote Now
                    </a>
                    <a href="#" className="btn btn-transparent">
                        Learn More
                    </a>
                </div>
                <div className="card-container">
                    {cardsData.map(
                        ({ id, title, img, description, color, bgColor }) => (
                            <div className="card" key={id}>
                                <span
                                    className="icon"
                                    style={{
                                        color: color,
                                        backgroundColor: bgColor,
                                    }}
                                >
                                    {img}
                                </span>
                                <h2>{title}</h2>
                                <span className="line"></span>
                                <p>{description}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Home;
