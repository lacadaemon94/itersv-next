import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Twitter = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm.05 6.514v.343c0 3.257-2.486 7.029-7.029 7.029-1.371 0-2.657-.429-3.771-1.114h.6c1.114 0 2.229-.429 3.086-1.029-1.114 0-1.971-.771-2.314-1.714.171 0 .343.086.429.086.257 0 .429 0 .686-.086-1.114-.257-1.971-1.2-1.971-2.4.343.171.686.257 1.114.343-.686-.6-1.114-1.286-1.114-2.143 0-.429.086-.857.343-1.2 1.2 1.457 3 2.486 5.057 2.571 0-.171-.086-.343-.086-.6a2.488 2.488 0 0 1 2.486-2.486c.686 0 1.371.257 1.8.771.6-.086 1.114-.343 1.543-.6-.171.6-.6 1.029-1.114 1.371.514-.086.943-.171 1.457-.429a5.789 5.789 0 0 1-1.202 1.287Z"
      fill="currentColor"
    />
  </svg>
);

export default Twitter;
