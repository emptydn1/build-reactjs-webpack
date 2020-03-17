import React from "react";
import { connect } from "react-redux";
import Button from "../custom-button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cartSelector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../actions/cart";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        checkout
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

//when set cennect to component well, second parameter if we don't set mapdispatchtoprops,
//connect will supply a props is dispatch to this component
