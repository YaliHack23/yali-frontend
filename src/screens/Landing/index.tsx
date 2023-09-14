import React from "react";
import { pbClient } from "../../index";

function initLoginPopup() {
  pbClient.initLoginPopup();
}

const Landing = (): JSX.Element => {
  return (
    <div className="landing">
      Landing Page {pbClient.isLoggedIn ? "Logged In" : "Logged Out"}
      Landing Page {pbClient.user?.email}
      <button className="btn btn-primary" onClick={initLoginPopup}>
        Login
      </button>
    </div>
  );
};

export default Landing;
