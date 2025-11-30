import React from "react";
import SectionHeader from "./SectionHeader";
import { courses } from "./data";
import { FaStar, FaBookOpen } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
function Course({
    course: {
        img,
        department,
        title,
        rating,
        description,
        sales,
        price,
        discount,
        duration,
        lessons,
    },
}) {
    return (
        <div className="course">
            <span className="sale">Sale</span>
            <img src={img} alt={title} />
            <div className="content">
                <div className="course-field">
                    <span className="department">{department}</span>
                    <span className="rating">
                        <FaStar /> {rating}
                    </span>
                </div>
                <h3>{title}</h3>
                <p className="description">{description}</p>
                <p className="sales">{sales} Sales</p>
                <p className="price">
                    <del>${price}</del>
                    <span className="text-secondary">${discount}</span>
                </p>
                <div className="course-info">
                    <p>
                        <IoMdAlarm /> {duration}
                    </p>
                    <p>
                        <FaBookOpen /> {lessons} Lessons
                    </p>
                </div>
                <a href="#" className="btn-learn" onClick={(e) => e.preventDefault()}>
                    Learn More <FaChevronRight />
                </a>
            </div>
        </div>
    );
}
function Courses() {
    return (
        <section id="courses">
            <div className="container">
                <SectionHeader
                    title="Make Online Learning More Accessible"
                    description="Education is the most powerful tool we possess, enabling us to unlock our potential and transform our future. It opens doors to new opportunities, fuels creativity and innovation, and gives us the confidence to pursue our dreams. Through continuous learning, we gain the knowledge and skills needed to grow, adapt, and make a meaningful impact on the world."
                />
            </div>
            <div className="courses-container container">
                {courses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}

export default Courses;
