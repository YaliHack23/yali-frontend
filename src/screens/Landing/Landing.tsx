import React from "react";
import "./style.css";
import { pbClient } from "../../index"; 

function initLoginPopup() {
  pbClient.initLoginPopup();
}

export const Landing = (): JSX.Element => {
  return (
    <div className="landing">
      Landing Page {pbClient.isLoggedIn ? "Logged In" : "Logged Out"}
      Landing Page {pbClient.user?.email}
      <button className="btn btn-primary" onClick={initLoginPopup}>Login</button>
    </div>
  );
};
