import * as React from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/Categoria.css"

function Categoria({Titulo, URLImagen, URLNavegacion}) {

    return (
        <>
            <Link to={URLNavegacion}>
                <img
                    src={URLImagen}
                    style={{height:150}}
                    alt={Titulo}
                />
                <h4>{Titulo}</h4>
            </Link>
        </>
    );
};

export default Categoria;