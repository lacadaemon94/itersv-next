import * as React from "react"
import { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Sent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M15.98 6.99a1 1 0 0 0-.687.303l-3.838 3.838a1 1 0 1 0 1.414 1.414l3.838-3.838a1 1 0 0 0-.726-1.717Zm6 0a1 1 0 0 0-.687.303L12 16.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l10-10a1 1 0 0 0-.726-1.717Zm-19.99 6a1 1 0 0 0-.697 1.717l3.252 3.254a1 1 0 1 0 1.416-1.416l-3.254-3.252a1 1 0 0 0-.717-.303Z"
    />
  </svg>
)
export default Sent
