import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Collection = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M8.4 3.6a1.2 1.2 0 1 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H8.4ZM4.8 8.4A1.2 1.2 0 0 1 6 7.2h12a1.2 1.2 0 1 1 0 2.4H6a1.2 1.2 0 0 1-1.2-1.2Zm-2.4 4.8a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4V18a2.4 2.4 0 0 1-2.4 2.4H4.8A2.4 2.4 0 0 1 2.4 18v-4.8Z"
      fill="currentColor"
    />
  </svg>
);

export default Collection;
