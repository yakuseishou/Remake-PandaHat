import React from "react";
import Banner from "./HeaderParts/Banner";
import NavBar from "./HeaderParts/NavBar";

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light navBar shadow p-3 mb-5 rounded">
            <Banner />
            <NavBar />
        </div>  
    );
}

export default Header;