import React from "react";

function Product(props) {
    return (
      <div className="col-4 col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-3">
        <div className="card hat">
          <img src={props.img} className="card-img-top shadow bg-white rounded item-img" alt="item-img"/>
          <div className="card-body shadow bg-white rounded">
              <h5 className="card-title hat_name">{props.name}</h5>
              <p className="card-text detail">Description - {props.description}<br/>
                Price - ${Math.round((props.price * 100) / 100).toFixed(2)}</p>
			        <div className="add_cart">
			        	<form method="GET" action="../controller/cart.php">Quantity: 
			        		<input className="add-value" type="number" name="quantity" min="0"/>
  		          		<input type="submit" value="Add to cart"/>
  		          		<input type="hidden" name="login" value="'.$_SESSION['current_user']['login'].'"/>
  		          		<input type="hidden" name="action" value="add_to_cart"/>
  		          		<input type="hidden" name="product" value="'.$product['name'].'"/>
			        	</form>
			        </div>
          </div>
        </div>
      </div>
    );
}

export default Product;