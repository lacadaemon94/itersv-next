import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}


const Itersv = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M24 12c0 6.627-5.373 12-12 12-2.177 0-4.218-.58-5.978-1.593l6.333-13.029a.6.6 0 0 0-.54-.862H5.407a.6.6 0 0 0-.54.337L.996 16.791A11.96 11.96 0 0 1 0 12C0 5.373 5.373 0 12 0s12 5.373 12 12Zm-6.249 3.484a3.484 3.484 0 1 0 0-6.968 3.484 3.484 0 0 0 0 6.968Z"
      fill="currentColor"
    />
  </svg>
);

export default Itersv;
