import React from "react";
import { pbClient } from "../../index";
import companyLogo from "./YaliWall.png";
import "./style.css";

const Landing = (): JSX.Element => {
  async function initLoginPopup() {
    await pbClient.initLoginPopup();
    window.location.href = "/";
  }

  return (
    <div className="landing">
      <div className="landing-box">
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
