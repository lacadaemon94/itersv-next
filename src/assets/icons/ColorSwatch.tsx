import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const ColorSwatch = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.8 2.4a2.4 2.4 0 0 0-2.4 2.4V18a3.6 3.6 0 1 0 7.2 0V4.8a2.4 2.4 0 0 0-2.4-2.4H4.8ZM6 19.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm6-2.108 5.88-5.88a2.4 2.4 0 0 0 0-3.394L16.182 6.12a2.4 2.4 0 0 0-3.394 0L12 6.908v10.184Zm7.2 4.508h-8.315l7.2-7.2H19.2a2.4 2.4 0 0 1 2.4 2.4v2.4a2.4 2.4 0 0 1-2.4 2.4Z"
      fill="currentColor"
    />
  </svg>
);

export default ColorSwatch;
