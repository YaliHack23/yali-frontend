/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  style: "outlined" | "filled";
  className: any;
}

export const StyleFilledWrapper = ({ style, className }: Props): JSX.Element => {
  return (
    <div className={`style-filled-wrapper ${className}`}>
      <img className={`icon ${style}`} alt="Icon" src={style === "outlined" ? "/img/icon-1.svg" : "/img/icon.svg"} />
    </div>
  );
};

StyleFilledWrapper.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
};
