import { FiAward, FiCheckCircle, FiGithub, FiMousePointer, FiRefreshCw } from "react-icons/fi";
import StarRating from "./starRating";
import "./App.css";

const App = () => (
    <div className="appShell">
        <header className="siteHeader">
            <a className="brand" href="#main-content" aria-label="Star rating system home">
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
                    <FiGithub aria-hidden="true" />
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
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" title="Portfolio">Web</a>
                <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FiGithub aria-hidden="true" /></a>
                <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer" aria-label="CodePen" title="CodePen">CP</a>
                <a href="https://www.linkedin.com/in/aashishranjan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
                <a href="https://www.facebook.com/theash.ashish/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">f</a>
                <a href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">YT</a>
                <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Support" title="Support">S</a>
                <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer" aria-label="Buy Me a Coffee" title="Buy Me a Coffee">BC</a>
                <a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer" aria-label="Patreon" title="Patreon">P</a>
            </div>
        </footer>
    </div>
);

export default App;