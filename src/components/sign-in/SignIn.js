import React, { Component } from "react";

import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <Button type="submit"> Sign in </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            {"Sign in with google"}
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
