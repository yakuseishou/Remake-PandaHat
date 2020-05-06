import React, {useState} from "react";
import menuItemsContent from "./MenuItemContent";
import MenuItemContent from "./MenuItemContent";

function NavBarItem(props) {
    const [menuItemsContent] = useState(["Action", "Another action", "Something else here"]);

    return (
        <li className="nav-item dropdown navContent">
            <a className="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.name}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {menuItemsContent.map(content => {
                    return (
                        <MenuItemContent 
                            content={content}
                        />
                    );
                })}
            </div>
        </li>
    );
}
export default NavBarItem;



