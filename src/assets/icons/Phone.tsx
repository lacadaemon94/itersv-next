import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Phone = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="m19.22 15.25-2.52-.29a1.99 1.99 0 0 0-1.64.57l-1.85 1.85a14.981 14.981 0 0 1-3.818-2.772A14.982 14.982 0 0 1 6.62 10.79l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07a16.935 16.935 0 0 0 4.943 10.947A16.935 16.935 0 0 0 18.92 20.97c1.13.07 2.07-.87 2.07-2v-1.73c0-1.02-.76-1.87-1.77-1.99Z"
      fill="currentColor"
    />
  </svg>
);

export default Phone;
