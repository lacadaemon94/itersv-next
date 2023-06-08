import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Globe = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2ZM5.198 9.632a7.214 7.214 0 0 1 2.295-3.247c.321.491.876.815 1.507.815A1.8 1.8 0 0 1 10.8 9v.6a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 1 1.827-2.332A7.172 7.172 0 0 1 19.2 12c0 .408-.034.81-.1 1.2H18a2.4 2.4 0 0 0-2.4 2.4v2.636a7.167 7.167 0 0 1-3.6.964v-2.4a2.4 2.4 0 0 0-2.4-2.4A2.4 2.4 0 0 1 7.2 12a2.4 2.4 0 0 0-2.002-2.368Z"
      fill="currentColor"
    />
  </svg>
);

export default Globe;
