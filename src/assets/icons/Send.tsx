import * as React from "react"
import { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Send = ({
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
      d="M2.317 10.332 6.3 14.314a1.08 1.08 0 0 0 1.451.07l10.653-8.786L9.617 16.25a1.08 1.08 0 0 0 .07 1.451l3.982 3.982a1.08 1.08 0 0 0 1.78-.395l6.485-17.837c.313-.862-.522-1.698-1.384-1.384L2.712 8.553a1.08 1.08 0 0 0-.395 1.779Z"
    />
  </svg>
)
export default Send
