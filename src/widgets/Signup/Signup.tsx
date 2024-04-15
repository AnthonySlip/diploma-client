import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../../entities/User/hook/useUserStore';
import { ISignupData } from '../../entities/User/model/types/auth.interface';
import styles from './Signup.module.scss';
interface IInputs extends ISignupData{
}

const Signup: FC = (props) => {

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>(
    { mode: 'onSubmit' },
  );

  const {signUp} = useUserStore()

  const { t } = useTranslation();

  const handleSignup = async (data: IInputs) => {
    try {
      const res = await signUp(data)
      reset()
    } catch (e) {
      console.log(e?.response?.message)
    }

  };

  return (
    <form onSubmit={handleSubmit(handleSignup)} className={styles.form}>
      <div className={styles.field}>
        <input className={styles.input} type="text" {...register('firstName', {
          required: t('Can not be empty'),
        })} placeholder={t('First Name')}/>
        {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
      </div>
      <div className={styles.field}>
        <input className={styles.input} type="text" {...register('lastName', {
          required: t('Can not be empty'),
        })} placeholder={t('Last Name')}/>
        {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
      </div>
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

export default Signup;