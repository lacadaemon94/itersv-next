import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const ShoppingCart = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M3.6 1.2a1.2 1.2 0 0 0 0 2.4h1.464l.366 1.466.012.05 1.63 6.517L6 12.703C4.488 14.215 5.558 16.8 7.697 16.8H18a1.2 1.2 0 0 0 0-2.4H7.697l1.2-1.2H16.8a1.2 1.2 0 0 0 1.073-.664l3.6-7.2A1.2 1.2 0 0 0 20.4 3.6H7.536l-.372-1.492A1.2 1.2 0 0 0 6 1.2H3.6Zm15.6 18.6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM7.8 21.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
      fill="currentColor"
    />
  </svg>
);

export default ShoppingCart;
