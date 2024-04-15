import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Logo.module.scss';
interface Props {
}

const Logo: FC = (props) => {

  const {t} = useTranslation()

  return (
    <div className={styles.logo}>
      <span className={styles.log}>{t('Log')}</span>
      <span className={styles.analysis}>{t('Analysis')}</span>
    </div>
  );
};

export default Logo;