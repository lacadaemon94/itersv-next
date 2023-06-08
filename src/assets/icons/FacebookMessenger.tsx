import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const FacebookMessenger = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M12 2C6.486 2 2 6.262 2 11.5c0 2.545 1.088 4.988 3 6.772v2.724c0 .745.784 1.23 1.45.897l2.629-1.314c.96.279 1.941.421 2.921.421 5.514 0 10-4.262 10-9.5S17.514 2 12 2Zm.468 11.858-2.218-1.774L5 14.417l5.2-5.2a1 1 0 0 1 1.332-.074l2.218 1.774L19 8.583l-5.2 5.2a1 1 0 0 1-1.332.075Z"
      fill="currentColor"
    />
  </svg>
);

export default FacebookMessenger;
