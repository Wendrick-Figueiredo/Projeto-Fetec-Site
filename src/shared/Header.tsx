import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                <Link className="navbar-brand" href="/">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="FOI"
                        width={100}
                        height={40}
                    />
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/features">
                                Features
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                            >
                                Pages
                            </button>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <Link className="dropdown-item" href="/blog">
                                    Blog
                                </Link>
                                <Link className="dropdown-item" href="/login">
                                    Login
                                </Link>
                                <Link className="dropdown-item" href="/register">
                                    Register
                                </Link>
                                {/* Add other dropdown items similarly */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item mr-2 mb-3 mb-lg-0">
                            <Link className="btn btn-secondary" href="/register">
                                Sign up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-secondary" href="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="header-content">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Great app that makes your life awesome</h1>
                        <p className="text-dark">
                            He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.
                        </p>
                        <Link className="btn btn-primary mb-4" href="/get-started">
                            Get Started
                        </Link>
                        <div className="my-2">
                            <p className="header-app-download-title">GET OUR MOBILE APP</p>
                        </div>
                        <div>
                            <button className="btn btn-app-download mr-2">
                                <Image
                                    src="/assets/images/ios.svg"
                                    alt="App store"
                                    width={135}
                                    height={40}
                                />
                            </button>
                            <button className="btn btn-app-download">
                                <Image
                                    src="/assets/images/android.svg"
                                    alt="Play store"
                                    width={135}
                                    height={40}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image
                            src="/assets/images/app_1.png"
                            alt="app"
                            width={388}
                            height={600}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;