import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Item from './Item';


// Styles
import "../styles/app.css"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
 function DefaultLayout() {
        const instagramUrl = "https://www.instagram.com/bowo.crc/";

    return <>
        <Helmet>
            <html lang="ES" />
        </Helmet>

        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header className="site-head" style={{backgroundColor:"#84B33E"}}>
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                
                            </div>
                            <div className="site-mast-right">
                                <a
                                    href={instagramUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        className="site-nav-icon"
                                        src="/images/icons/insta.svg"
                                        alt="Instagram"/>
                                </a>
                                <a
                                    href={instagramUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        className="site-nav-icon"
                                        src="/images/icons/facebook.svg"
                                        alt="Instagram"/>
                                </a>
                                <a
                                    href={instagramUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        className="site-nav-icon"
                                        src="/images/icons/whatsapp.svg"
                                        alt="Instagram"/>
                                </a>
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                src="/images/logo.jpg"
                                style={{height:150}}
                                alt="logo"
                            />
                        </div>
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                {/* The navigation items as setup in Ghost */}
                                <Link className="site-nav-item" to="/">
                                    Home
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    <div className="grid">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">Bowo</Link> © 2022
                        </div>
                        <div className="site-foot-nav-right">
                            <Link className="site-nav-item" to="/">
                                Home
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

export default DefaultLayout;