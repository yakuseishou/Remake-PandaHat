import React from "react";
import Banner from "./HeaderParts/Brand";
import NavBar from "./HeaderParts/NavBar";

function Header() {
    return (
            <div className="navbar navbar-expand-lg navbar-light navBar shadow p-2 mb-3 rounded">
                <Banner />
                <NavBar />
            </div>  
    );
}

export default Header;