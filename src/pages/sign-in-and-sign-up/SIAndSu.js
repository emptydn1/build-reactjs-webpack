import "./SIAndSu.scss";

import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/Sign-up/SignUp";

const SIAndSu = () => {
  return (
    <div className="siasu">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SIAndSu;
