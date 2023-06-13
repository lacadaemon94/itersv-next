import React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  text?: string;
  icon?: JSX.Element;
  link?: string;
  ariaLabel?: string;
  className: string;
  cssSecondary?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  text,
  icon,
  link,
  ariaLabel,
  className,
  cssSecondary,
  onClick,
}: Props) => {
  return (
    <button type={type} className={className} onClick={onClick} data-issecondary={cssSecondary}>
      {link ? (
        <a href={link} aria-label={ariaLabel} rel="noopener noreferrer" target="_blank">
          {<p>{text}</p>}
          {icon && <span>{icon}</span>}
        </a>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {<p>{text}</p>}
        </>
      )}
    </button>
  );
};

export default Button;
