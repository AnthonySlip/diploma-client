import React, { FC } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

interface Props {
}

const Layout: FC = (props) => {

  return (
    <Wrapper>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
`
const Content = styled.div`
  flex: 1 1 auto;
`

export default Layout;