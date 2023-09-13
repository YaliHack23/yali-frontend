/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const UserPerson2 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`user-person-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M19.58 16.71L19.82 17.85C20.0474 18.8356 19.8229 19.8713 19.2077 20.6741C18.5924 21.477 17.6508 21.9632 16.64 22H7.36C6.34918 21.9632 5.40757 21.477 4.79235 20.6741C4.17713 19.8713 3.95257 18.8356 4.18 17.85L4.42 16.71C4.69604 15.1668 6.02262 14.0327 7.59 14H16.41C17.9774 14.0327 19.304 15.1668 19.58 16.71ZM16.64 20.49C17.1478 20.4841 17.6257 20.2488 17.94 19.85V19.86C18.3257 19.3762 18.476 18.7458 18.35 18.14L18.11 17C17.9768 16.1552 17.2646 15.5226 16.41 15.49H7.59001C6.73537 15.5226 6.02317 16.1552 5.89001 17L5.65001 18.14C5.52716 18.7426 5.67727 19.3686 6.06001 19.85C6.37434 20.2488 6.85222 20.4841 7.36001 20.49H16.64Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12.5 12H11.5C9.29085 12 7.49999 10.2091 7.49999 7.99998V5.35998C7.49732 4.46804 7.85046 3.61186 8.48117 2.98116C9.11187 2.35046 9.96805 1.99732 10.86 1.99998H13.14C14.0319 1.99732 14.8881 2.35046 15.5188 2.98116C16.1495 3.61186 16.5027 4.46804 16.5 5.35998V7.99998C16.5 10.2091 14.7091 12 12.5 12ZM10.86 3.49998C9.83274 3.49998 8.99999 4.33273 8.99999 5.35998V7.99998C8.99999 9.3807 10.1193 10.5 11.5 10.5H12.5C13.8807 10.5 15 9.3807 15 7.99998V5.35998C15 4.86668 14.804 4.39358 14.4552 4.04477C14.1064 3.69595 13.6333 3.49998 13.14 3.49998H10.86Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UserPerson2.propTypes = {
  color: PropTypes.string,
};
