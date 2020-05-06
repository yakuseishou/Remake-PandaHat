import React, {useState} from "react";
import NavButton from "./NavBarParts/NavToggleButton";
import NavBarItem from "./NavBarParts/NavBarItem";


function NavBar() {
    const [NavBarItems] = useState(["Product", "User", "Cart"]); 

    return (
        <div>
            <NavButton />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {NavBarItems.map(item => {
                        return (
                            <NavBarItem name={item} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;