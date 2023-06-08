"use client"
import React, {useContext} from 'react'
import { SessionContext } from '@/app/utils/SessionProvider'
import Itersv from '@/assets/icons/Itersv'
import LightBulbIcon from '@/assets/icons/LightBulbIcon'
import { MenuItem } from './MenuItem/MenuItem'

import styles from '../../styles/topbar.module.css'

type Props = {}

export const Topbar = (props: Props) => {
  const { toggleTheme } = useContext(SessionContext);
  const isLightTheme = useContext(SessionContext);

  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
        <Itersv />
        <p>
          itersv
        </p>
      </div>
      <div className={styles.menuitems}>
        <MenuItem type='navigation' href='/' text='inicio' className={styles.menuitem} />
        <MenuItem type='navigation' href='/contact' text='contacto' className={styles.menuitem} />
        <MenuItem type='button' buttonType='button' onClick={toggleTheme} theme={isLightTheme.isLightTheme} href='' icon={<LightBulbIcon />} className={styles.menuitem} />
      </div>
    </div>
  )
}