/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ShareOutlined = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`share-outlined ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.9529 15.2302C15.4043 15.2315 15.8469 15.356 16.2329 15.5902H16.2229C17.3864 16.2842 17.7816 17.7812 17.1121 18.9591C16.4427 20.137 14.9543 20.5634 13.7626 19.9188C12.571 19.2742 12.1134 17.7951 12.7329 16.5902L9.80286 13.6002C9.59129 13.729 9.36227 13.8267 9.12286 13.8902C8.9235 13.9414 8.71868 13.9683 8.51286 13.9702C7.24414 13.9767 6.17177 13.0317 6.01849 11.7723C5.86521 10.5128 6.67963 9.33829 7.91286 9.04023C8.10923 8.99233 8.31074 8.96882 8.51286 8.97023C9.02893 8.97063 9.53213 9.13137 9.95286 9.43023L12.7329 6.65023C12.3187 5.87635 12.3444 4.94119 12.8005 4.19127C13.2567 3.44135 14.0752 2.98839 14.9529 3.00023C15.4035 2.99795 15.8461 3.11899 16.2329 3.35023C17.0188 3.78252 17.5145 4.60129 17.5331 5.49812C17.5517 6.39495 17.0905 7.23358 16.3231 7.69812C15.5557 8.16265 14.5988 8.18252 13.8129 7.75023L10.8729 10.6902C10.9055 10.7613 10.9323 10.8348 10.9529 10.9102C11.0857 11.4485 11.0328 12.0158 10.8029 12.5202L13.8029 15.5202C14.1581 15.3345 14.5521 15.2352 14.9529 15.2302ZM14.9529 4.50023C14.6018 4.49818 14.2754 4.68037 14.0929 4.98023C13.9565 5.20882 13.9169 5.48235 13.9829 5.74023C14.0406 5.99771 14.2039 6.21907 14.4329 6.35023C14.5862 6.44532 14.7624 6.49716 14.9429 6.50023C15.2959 6.50016 15.6228 6.31393 15.8029 6.01023C16.0862 5.53786 15.9342 4.92532 15.4629 4.64023C15.3098 4.54571 15.1328 4.49712 14.9529 4.50023ZM8.51286 12.4702C8.04216 12.4839 7.62568 12.1674 7.51286 11.7102C7.4499 11.451 7.4931 11.1774 7.63286 10.9502C7.76926 10.726 7.98835 10.5644 8.24286 10.5002H8.48286C8.95356 10.4865 9.37004 10.803 9.48286 11.2602C9.54604 11.515 9.50653 11.7843 9.37286 12.0102L9.31286 12.0802C9.1802 12.27 8.98581 12.4078 8.76286 12.4702H8.51286ZM14.9429 18.6802C15.2939 18.6823 15.6203 18.5001 15.8029 18.2002C16.0534 17.7392 15.905 17.1629 15.4629 16.8802C15.3095 16.7851 15.1333 16.7333 14.9529 16.7302C14.5998 16.7303 14.2729 16.9165 14.0929 17.2202C13.8095 17.6926 13.9616 18.3051 14.4329 18.5902C14.5911 18.6674 14.7678 18.6986 14.9429 18.6802Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};
