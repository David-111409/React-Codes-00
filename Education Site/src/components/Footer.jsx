import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="col">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className="social">
                            <a href="#">
                                <FaFacebook />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Company Info</h2>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Carrier</a>
                            </li>
                            <li>
                                <a href="#">We are hiring</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Features</h2>
                        <ul>
                            <li>
                                <a href="#">Business Marketing</a>
                            </li>
                            <li>
                                <a href="#">User Analytic</a>
                            </li>
                            <li>
                                <a href="#">Live Chat</a>
                            </li>
                            <li>
                                <a href="#">Unlimited Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Resources</h2>
                        <ul>
                            <li>
                                <a href="#">IOS & Android</a>
                            </li>
                            <li>
                                <a href="#">Watch a Demo</a>
                            </li>
                            <li>
                                <a href="#">Customers</a>
                            </li>
                            <li>
                                <a href="#">API</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copy-right">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} | All Rights
                        Reserved Made By{" "}
                        <a
                            target="_blank"
                            href="https://github.com/David-111409"
                        >
                            <strong className="text-primary">David</strong>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
