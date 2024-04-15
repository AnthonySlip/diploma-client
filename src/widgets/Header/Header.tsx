import React, { FC } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigaton/Navigation';
import Logo from '../../shared/UI/Logo/Logo';

interface Props {
}

const Header: FC = () => {

  return (
    <Container>
      <Logo/>
      <Navigation/>
    </Container>
  );
};

const Container = styled.header`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    padding: 6px 26px;
`

export default Header;