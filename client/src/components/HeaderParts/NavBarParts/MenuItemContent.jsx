import React from "react";

function MenuItemContent(props) {
    return (
        <a className="dropdown-item" href={"/" + props.content}>{props.content}</a>
    );
}

export default MenuItemContent;
