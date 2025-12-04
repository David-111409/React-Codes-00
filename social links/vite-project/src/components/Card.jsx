import { user } from "./data";
export default function Card() {
    const { igm, name, location, job, links } = user;
    return (
        <div className="card">
            <div className="card-content">
                <img src={igm} alt={name} />
                <h1>{name}</h1>
                <h2>{location}</h2>
                <p>{job}</p>
                <ul className="list-items">
                    {links.map(({id, name, url}) => (
                        <li className="item" key={id}>
                            <a target="_blank" href={url}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
