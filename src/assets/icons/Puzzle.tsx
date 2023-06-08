import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Puzzle = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M12 4.2a1.8 1.8 0 1 1 3.6 0v.6A1.2 1.2 0 0 0 16.8 6h3.6a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-.6a1.8 1.8 0 0 0 0 3.6h.6a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-3.6a1.2 1.2 0 0 1-1.2-1.2v-.6a1.8 1.8 0 1 0-3.6 0v.6a1.2 1.2 0 0 1-1.2 1.2H7.2A1.2 1.2 0 0 1 6 20.4v-3.6a1.2 1.2 0 0 0-1.2-1.2h-.6a1.8 1.8 0 1 1 0-3.6h.6A1.2 1.2 0 0 0 6 10.8V7.2A1.2 1.2 0 0 1 7.2 6h3.6A1.2 1.2 0 0 0 12 4.8v-.6Z"
      fill="currentColor"
    />
  </svg>
);

export default Puzzle;
