/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Leftsidecard = ({ className }: Props): JSX.Element => {
  return (
    <div className={`leftsidecard ${className}`}>
      <div className="item">
        <div className="frame">
          <div className="overlap-group">
            <div className="profile-banner" />
            <div className="card-profile-picture" />
          </div>
        </div>
        <div className="txt">
          <div className="name-text">Mr. Musa</div>
          <div className="text-wrapper">Designer and Cinematographer</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="element-wrapper">
        <div className="element">
          <p className="div">Alumni | Cohort 22 | Track 2</p>
        </div>
      </div>
    </div>
  );
};
