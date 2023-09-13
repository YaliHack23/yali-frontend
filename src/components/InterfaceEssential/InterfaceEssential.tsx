/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ShareFilled } from "../../icons/ShareFilled";
import { ShareOutlined } from "../../icons/ShareOutlined";
import "./style.css";

interface Props {
  share: "outlined" | "filled";
}

export const InterfaceEssential = ({ share }: Props): JSX.Element => {
  return (
    <>
      {share === "filled" && <ShareFilled className="instance-node" />}

      {share === "outlined" && <ShareOutlined className="instance-node" />}
    </>
  );
};

InterfaceEssential.propTypes = {
  share: PropTypes.oneOf(["outlined", "filled"]),
};
