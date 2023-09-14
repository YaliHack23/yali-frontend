/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { User } from "../../types";

interface Props {
  className: any;
  user: User;
}

export const Leftsidecard = ({ className, user }: Props): JSX.Element => {
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
          <div className="name-text">{user?.email || "John Doe"}</div>
          <div className="text-wrapper">{user?.occupation || "X CEO"}</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="element-wrapper">
        <div className="element">
          <p className="div">Alumni | Cohort {user?.cohortID || "22"} | Track {user?.trackID || "5"}</p>
        </div>
      </div>
    </div>
  );
};
