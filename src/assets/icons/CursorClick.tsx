import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const CursorClick = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M8.007 2.293a1.2 1.2 0 1 0-2.319.622L6 4.074a1.2 1.2 0 0 0 2.318-.622l-.312-1.159h.002ZM2.915 5.688a1.2 1.2 0 1 0-.62 2.318l1.159.311A1.2 1.2 0 0 0 4.074 6l-1.159-.312Zm10.577-.683a1.201 1.201 0 0 0-1.698-1.697l-.849.849a1.202 1.202 0 0 0 1.698 1.698l.849-.85Zm-8.485 8.487.848-.849a1.201 1.201 0 0 0-1.697-1.699l-.85.848a1.2 1.2 0 1 0 1.699 1.698v.002Zm3.84-6.206a1.2 1.2 0 0 0-1.56 1.56l4.8 12a1.2 1.2 0 0 0 2.187.09l1.656-3.31 3.622 3.624a1.2 1.2 0 0 0 1.697-1.698l-3.623-3.624 3.312-1.655a1.2 1.2 0 0 0-.091-2.187l-12-4.8Z"
      fill="currentColor"
    />
  </svg>
);

export default CursorClick;
