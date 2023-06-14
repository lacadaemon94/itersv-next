import React from 'react'

import styles from '../../../styles/footer.module.css'

type Props = {
  linkText: string;
  linkUrl: string;
  ariaLabel: string;
}

const ExternalLink = ({ linkText, linkUrl, ariaLabel }: Props) => {
  return (
    <a className={styles.externallink} href={linkUrl} aria-label={ariaLabel} rel="noopener noreferrer" target="_blank">
      {linkText}
      <div></div>
    </a>
  )
}

export default ExternalLink