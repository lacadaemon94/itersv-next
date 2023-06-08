import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const AtSymbol = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.091 6.908a7.2 7.2 0 1 0-1.183 11.141 1.2 1.2 0 1 1 1.305 2.014A9.6 9.6 0 1 1 21.6 12a3.6 3.6 0 0 1-5.76 2.881A4.8 4.8 0 1 1 16.8 12a1.2 1.2 0 1 0 2.4 0 7.18 7.18 0 0 0-2.108-5.092ZM14.4 12a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0Z"
      fill="currentColor"
    />
  </svg>
);

export default AtSymbol;
