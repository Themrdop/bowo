import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Categoria from "./Categoria";
import Item from './Item';
import productos from './data/productos.json';
import Navbar from "./NavBar";


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
    //const instagramUrl = "https://www.instagram.com/bowo.crc/";

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
                            <Navbar/>
                        </div>
                    </div>
                </header>

                <main className="site-main container">
                    <div className="row">
                        <aside className="sidebar-container col-lg-1 col-md-1 col-6 order-last order-md-first sidebar-left area-sidebar-shop">
                            <h3>Categorías</h3>
                            <Categoria URLImagen={"/images/chiles.jpeg"}
                                    URLNavegacion={"/"}
                                    Titulo={"Chiles"}/>
                            <Categoria URLImagen={"/images/concerva.jpeg"}
                                    URLNavegacion={"/"}
                                    Titulo={"Concerva"}/>
                            <Categoria URLImagen={"/images/funcionales.jpeg"}
                                    URLNavegacion={"/"}
                                    Titulo={"Funcionales"}/>
                        </aside>
                        <div className="grid site-content shop-content-area col-lg-9 col-12 col-md-9 description-area-before content-with-products wd-builder-off ajax-loaded">
                            {productos.map((p) => {
                                return <Item URL={p.url}
                                    NombreProducto={p.nombre}
                                    Descripcion={p.descripcion}/>
                            })}
                        </div>
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