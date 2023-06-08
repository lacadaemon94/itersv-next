import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const Mail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M4 4c-.666 0-1.253.327-1.615.83a.729.729 0 0 0 .217 1.037l8.78 5.473c.379.236.857.236 1.235 0l8.744-5.52a.734.734 0 0 0 .188-1.074A1.982 1.982 0 0 0 20 4H4Zm17.516 4.086a.47.47 0 0 0-.248.074l-8.65 5.455a1.167 1.167 0 0 1-1.235-.002L2.73 8.223a.478.478 0 0 0-.73.406V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.564a.479.479 0 0 0-.484-.478Z"
      fill="currentColor"
    />
  </svg>
);

export default Mail;
