import { FaArrowRight } from "react-icons/fa";
function Header() {
    const listItems = ["Home", "Products", "Pricing", "Contact"];
    return (
        <header id="header">
            <nav className="navbar">
                <a href="#" className="logo">
                    EduBridge
                </a>
                <ul className="nav-links">
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
                <div className="account">
                    <a href="#" className="log-in">Login</a>
                    <a href="#" className="btn-join">
                        JOIN US<FaArrowRight />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
