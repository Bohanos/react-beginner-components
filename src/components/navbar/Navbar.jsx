import React from "react";
import "./Navbar.css"


function Button (){
    return <button>Contact Us</button>
}



export default function Navbar(){
    return(
        <div className="navbar">
            <h1>logo</h1>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Company</a>
            </nav>
            <Button/>
        </div>
    )
}

