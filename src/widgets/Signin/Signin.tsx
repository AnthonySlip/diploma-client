import React, { FC } from 'react';
import styles from '../Signup/Signup.module.scss';
import { useForm } from 'react-hook-form';
import { useUserStore } from '../../entities/User/hook/useUserStore';
import { useTranslation } from 'react-i18next';
import { ISigninData } from '../../entities/User/model/types/auth.interface';

interface IInputs extends ISigninData{
}

const Signin: FC = () => {

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>(
    { mode: 'onSubmit' },
  );

  const {signIn} = useUserStore()

  const { t } = useTranslation();

  const handleSignup = async (data: IInputs) => {
    try {
      const res = await signIn(data)
      reset()
    } catch (e) {
      console.log(e?.response?.message)
    }

  };

  return (
    <form onSubmit={handleSubmit(handleSignup)} className={styles.form}>
      <div className={styles.field}>
        <input className={styles.input} type="text" {...register('email', {
          required: t('Can not be empty'),
        })} placeholder={t('Email')} />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>
      <div className={styles.field}>
        <input className={styles.input} type="password" {...register('password', {
          required: t('Can not be empty'),
        })} placeholder={t('Password')} />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      </div>
      <button type={'submit'} className={styles.submit}>{t('Signup')}</button>
    </form>
  );
};

export default Signin;