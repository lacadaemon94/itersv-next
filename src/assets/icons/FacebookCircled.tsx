import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}


const FacebookCircled = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M12 2C6.477 2 2 6.477 2 12c0 5.395 4.275 9.78 9.621 9.981v-6.942H9.278v-2.725h2.343v-2.005c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H15.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.365v6.659C18.768 20.613 22 16.689 22 12c0-5.523-4.477-10-10-10Z"
      fill="currentColor"
    />
  </svg>
);

export default FacebookCircled;
