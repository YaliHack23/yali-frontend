import React from "react";
import { pbClient } from "../../index";
import companyLogo from "./YaliWall.png";
import "./style.css";

function initLoginPopup() {
  pbClient.initLoginPopup();
}

const Landing = (): JSX.Element => {
  return (
    <div className="landing">
      <div className="landing-box">
        Landing Page {pbClient.isLoggedIn ? "Logged In" : "Logged Out"}
        Landing Page {pbClient.user?.email}
        <h1 className="landing-header">YALI Connect</h1>
        {/* <img src="../../icons/Landing/Wall YALI.png" alt="" /> */}
        <img src={companyLogo} width={"50%"} alt="Works" />
        <button className="landing-connect-button" onClick={initLoginPopup}>
          Connect
        </button>
      </div>
    </div>
  );
};

export default Landing;
