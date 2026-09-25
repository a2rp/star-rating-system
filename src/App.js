import { createElement, useEffect, useState } from "react";
import {
    FiAward,
    FiCheckCircle,
    FiCoffee,
    FiGlobe,
    FiHeart,
    FiMail,
    FiMousePointer,
    FiRefreshCw,
    FiArrowUp,
} from "react-icons/fi";
import {
    FaCodepen,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";
import StarRating from "./starRating";
import "./App.css";

const footerLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    [
        "YouTube",
        "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        FaYoutube,
    ],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FaPatreon],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const App = () => {
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowGoTop(window.scrollY > 360);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="appShell">
            <header className="siteHeader">
                <a
                    className="brand"
                    href="#main-content"
                    aria-label="Star rating system home"
                >
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" />
                    <span>
                        <strong>Star Rating</strong>
                        <small>React component demo</small>
                    </span>
                </a>

                <nav className="siteNav" aria-label="Primary navigation">
                    <a href="#how-it-works">How it works</a>
                    <a
                        className="githubLink"
                        href="https://github.com/a2rp/star-rating-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project on GitHub"
                        title="View project on GitHub"
                    >
                        <FaGithub aria-hidden="true" />
                        <span>GitHub</span>
                    </a>
                </nav>
            </header>

            <main id="main-content">
                <section className="heroSection">
                    <div className="heroCopy">
                        <p className="eyebrow">INTERACTIVE UI COMPONENT</p>
                        <h1>Make every opinion count.</h1>
                        <p className="heroText">
                            A clean, accessible star rating component for reviews,
                            feedback forms, product cards, and customer experiences.
                        </p>

                        <div className="featureList" id="how-it-works">
                            <div className="featureItem">
                                <FiMousePointer aria-hidden="true" />
                                <span>
                                    <strong>Hover to preview</strong>
                                    <small>See the score before selecting.</small>
                                </span>
                            </div>
                            <div className="featureItem">
                                <FiCheckCircle aria-hidden="true" />
                                <span>
                                    <strong>Click to save</strong>
                                    <small>Keep the selected value visible.</small>
                                </span>
                            </div>
                            <div className="featureItem">
                                <FiAward aria-hidden="true" />
                                <span>
                                    <strong>Ready to reuse</strong>
                                    <small>Use it anywhere in your React UI.</small>
                                </span>
                            </div>
                        </div>
                    </div>

                    <section className="ratingCard" aria-labelledby="rating-title">
                        <div className="cardTopline">
                            <span className="cardIcon">
                                <FiAward aria-hidden="true" />
                            </span>
                            <span>Live preview</span>
                        </div>
                        <h2 id="rating-title">How would you rate this?</h2>
                        <p className="cardDescription">
                            Move across the stars, then select your rating.
                        </p>
                        <StarRating />
                        <div className="cardFooter">
                            <FiRefreshCw aria-hidden="true" />
                            <span>Try a different score anytime</span>
                        </div>
                    </section>
                </section>
            </main>

            <footer className="siteFooter">
                <p>
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </p>
                <div className="footerLinks" aria-label="Social and support links">
                    {footerLinks.map(([label, href, Icon]) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            title={label}
                        >
                            {createElement(Icon, { "aria-hidden": true })}
                        </a>
                    ))}
                </div>
            </footer>

            {showGoTop && (
                <button
                    className="goTopButton"
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </button>
            )}
        </div>
    );
};

export default App;
