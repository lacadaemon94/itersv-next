import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const SpeakerPhone = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M21.6 3.6a1.2 1.2 0 0 0-1.737-1.073L10.515 7.2H6a3.6 3.6 0 0 0 0 7.2h.336l2.125 6.38a1.2 1.2 0 0 0 1.139.82h1.2a1.2 1.2 0 0 0 1.2-1.2v-5.258l7.863 3.93A1.2 1.2 0 0 0 21.6 18V3.6Z"
      fill="currentColor"
    />
  </svg>
);

export default SpeakerPhone;
