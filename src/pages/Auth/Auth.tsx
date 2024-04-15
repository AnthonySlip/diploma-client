import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Signin from '../../widgets/Signin/Signin';
import Signup from '../../widgets/Signup/Signup';
import { AuthStore } from '../../entities/Auth/lib/AuthStore';
import { Navigate } from 'react-router';
import { privatePaths } from '../../app/routes/utils';

interface IInputs {

}

const Auth: FC = () => {

  const {isAuth} = AuthStore()

  const [isSignin, setIsSignin] = useState<boolean>(true);

  const { t } = useTranslation();

  return isAuth? (<Navigate replace to={privatePaths.profile}/>) : (
    <Container>
      <p>{isSignin ? t('Signin') : t('Signup')}</p>
      <Form>
        {isSignin ? (<Signin />) : (<Signup />)}
        <span onClick={() => setIsSignin(!isSignin)}>{!isSignin ? t('Signin') : t('Signup')}</span>
      </Form>
    </Container>
  );
};

const Container = styled.div`
    margin: 6vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        font-size: 2rem;
        font-weight: 600;
        color: var(--blue);
    }
`;
const Form = styled.div`
    margin: 2vh auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 18px;
    padding: 42px 24px;
    width: 300px;
    border-radius: 12px;
    box-shadow: 1px 1px 1px var(--dark-blue);
    background-color: var(--light-blue);
`;

export default Auth;