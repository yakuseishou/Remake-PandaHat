import React, {useState} from "react";
import NavButton from "./NavBarParts/NavToggleButton";
import NavBarItem from "./NavBarParts/NavBarItem";


function NavBar() {
    const [User] = useState({
        name: "User",
        list: ["SignIn", "SignUp"]
    })

    const [Product, setProduct] = useState({
        name: "Product",
        list: ["Action", "Another action", "Something else here"]
    })

    const [Cart, setCart] = useState({
        name: "Cart",
        list: ["cart content"]
    })

    const [NavBarItems] = useState([Product, User, Cart]); 

    return (
        <div>
            <NavButton />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {NavBarItems.map(item => {
                        return (
                            <NavBarItem name={item.name} list={item.list} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;