import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/homepage/HomePage";
import ShopPage from "../../pages/shop/ShopPage";
import CheckOutPage from "../../pages/checkout/CheckOutPage";
import Header from "../header/Header";
import SIAndSu from "../../pages/sign-in-and-sign-up/SIAndSu";
import "./App.css";
import { auth, createUser } from "../../firebase/firebase";
import { setCurrentUser } from "../../actions/user";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorCurrentUser } from "../../redux/selectors/userSelector";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log("abc");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SIAndSu />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectorCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {
      dispatch(setCurrentUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
