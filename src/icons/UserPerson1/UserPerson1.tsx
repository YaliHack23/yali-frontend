/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const UserPerson1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user-person-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.64 22H7.35997C6.34915 21.9633 5.40754 21.477 4.79232 20.6742C4.1771 19.8713 3.95254 18.8356 4.17997 17.85L4.41997 16.71C4.69601 15.1668 6.02259 14.0327 7.58997 14H16.41C17.9774 14.0327 19.3039 15.1668 19.58 16.71L19.82 17.85C20.0474 18.8356 19.8228 19.8713 19.2076 20.6742C18.5924 21.477 17.6508 21.9633 16.64 22Z"
        fill="black"
      />
      <path
        className="path"
        d="M12.5 12H11.5C9.29083 12 7.49997 10.2092 7.49997 8.00001V5.36001C7.49731 4.46807 7.85045 3.61189 8.48115 2.98119C9.11185 2.35049 9.96803 1.99735 10.86 2.00001H13.14C14.0319 1.99735 14.8881 2.35049 15.5188 2.98119C16.1495 3.61189 16.5026 4.46807 16.5 5.36001V8.00001C16.5 9.06088 16.0785 10.0783 15.3284 10.8284C14.5783 11.5786 13.5608 12 12.5 12Z"
        fill="black"
      />
    </svg>
  );
};
