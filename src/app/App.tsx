import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layout from './Layout';
import { PublicRoutes } from './routes/PublicRoutes';
import { cache } from '@babel/traverse';
import path = cache.path;
import { publicPaths } from './routes/utils';
import About from '../pages/About/About';
import { PrivateRoutes } from './routes/PrivateRoutes';
import Auth from '../pages/Auth/Auth';
import { AuthStore } from '../entities/Auth/lib/AuthStore';
import './global.scss';

const App: FC = () => {


  const {isAuth} = AuthStore()

  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<About/>} />
      {PublicRoutes.map((route, index) => (
          route.path!==publicPaths.about && <Route key={index} path={route.path} element={<route.element />} />
      ))}
      {isAuth && PrivateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element/>} />
      ))}
      <Route path={'*'} element={<Navigate replace to={publicPaths.auth} />}/>
    </Route>
  </Routes>;

};

export default App;