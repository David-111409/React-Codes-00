import React from "react";
import SectionHeader from "./SectionHeader";
import "../index.css";
import { ratings } from "./data";
import Review from "./Review";
function Reviews() {
    return (
        <section id="reviews" className="container">
            <SectionHeader
                title={"Each and every client is imoprtant"}
                description={
                    "Discover what our students are saying in the Reviews section! Real feedback from learners helps us shape the future of our courses."
                }
            />
            <div className="ratings container">
                {ratings.map((rating) => (
                    <Review key={rating.id} rating={rating} />
                ))}
            </div>
        </section>
    );
}

export default Reviews;
