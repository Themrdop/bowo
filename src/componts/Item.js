import * as React from "react";
import { Link } from "react-router-dom";


// Styles
import "../styles/app.css"

function Item() {

    return (
        <div className="post-card">
            <header className="post-card-header">
            <div
                className="post-card-image"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg)`,
                }}/>
                <h2 className="post-card-title">Fruta 1</h2>
            </header>
            <section className="post-card-excerpt">blah blah</section>
            <footer className="post-card-footer">
                <div className="Counter_stepperInput__QuRj0">
                    <button className="Counter_decrement__BJh_A" type="button">–</button>
                    <input type="number" className="Counter_quantity__lx_LP" value="1"/>
                    <button className="Counter_increment__MsHxZ" type="button">+</button>
                </div>
                <div class="ProductItem_productAction__Q1gga">
                    <button className="" type="button">ADD TO CART</button>
                </div>
            </footer>
        </div>
    );
};

export default Item;