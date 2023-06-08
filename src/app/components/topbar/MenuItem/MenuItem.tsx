"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link'

interface Props {
  type: 'navigation' | 'button';
  buttonType?: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
  text?: string;
  href: string;
  onClick?: () => void;
  className: string;
  theme?: boolean;
}

export const MenuItem: React.FC<Props> = ({type, buttonType, icon, text, href, onClick, className, theme}) => {

  const asPath = usePathname();

  const isActive = (): boolean => {
    return asPath === href;
  }

  return (
    <>
      {
        type === 'navigation' ?
        (
          <Link
            href={href}
            onClick={onClick}
            className={className}
            style={{
              backgroundColor: isActive() ? 'var(--color-neutral-light)' : ''
            }}
          >
            {text && (<p>{text}</p>)}
            {icon && (icon)}
          </Link>
        )
        :
        (
          <button
            type={buttonType}
            onClick={onClick}
            className={className}
            data-islight={theme}
          >
            {text && (<p>{text}</p>)}
            {icon && (icon)}
          </button>
        )
      }
    </>
  )
}