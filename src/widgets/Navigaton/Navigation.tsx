import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from './lib/useNavigation';
import styles from './navigation.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
}
const Nav: FC<Props> = () => {

  const navigations = useNavigation()
  const {t} = useTranslation()

  return <ul className={styles.list}>
    {navigations.map((nav, index) => (
      <li key={index} className={styles.item}>
        <Link to={nav.link} className={styles.link}>{t(nav.title)}</Link>
      </li>
    ))}
  </ul>
}

export default Nav