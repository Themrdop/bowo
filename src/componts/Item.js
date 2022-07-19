import * as React from "react";

// Styles
import "../styles/Item.css"

function Item({NombreProducto, Descripcion, URL}) {

    return (
        <div className="post-card">
            <header className="post-card-header">
            <div
                className="post-card-image"
                style={{
                    backgroundImage: `url(`+URL+`)`,
                }}/>
                <h2 className="post-card-title">{NombreProducto}</h2>
            </header>
            <section className="post-card-excerpt">{Descripcion}</section>
            <footer className="post-card-footer">
                <div className="Counter_stepperInput__QuRj0">
                    <button className="Counter_decrement__BJh_A" type="button">–</button>
                    <input type="number" className="Counter_quantity__lx_LP" style={{width:"35px"}} value="1"/>
                    <button className="Counter_increment__MsHxZ" type="button">+</button>
                </div>
                <br/>
                <div class="ProductItem_productAction__Q1gga">
                    <button className="Add_to_car_button" type="button">ADD TO CART</button>
                </div>
            </footer>
        </div>
    );
};

export default Item;