function Review({ rating: { name, job, description, img, stars } }) {
    return (
        <div className="rating">
            <span className="stars">{stars}</span>
            <p className="description">{description}</p>
            <div className="person">
                <img src={img} alt={name} />
                <div>
                    <h3 className="text-primary">{name}</h3>
                    <p className="job">{job}</p>
                </div>
            </div>
        </div>
    );
}
export default Review;
