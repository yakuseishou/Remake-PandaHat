import React, { useState } from "react";
import "../css/product.css";
import Product from "./Product/Product";

function ProductLists() {

    const [list] = useState([{
        name: "Twice",
        img: "img/twice.jpg",
        description: "TestingDescription",
        price: 30.00
    },
    {
        name: "BTS",
        img: "img/bts.jpg",
        description: "TestingDescription",
        price: 35.00
    }
    ]);

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {list.map((item) => {
                return (
                    <Product 
                        name={item.name}
                        img={item.img}
                        description={item.description}
                        price={item.price}
                    />
                );
            })
            }
        </div>
    );
}

export default ProductLists;