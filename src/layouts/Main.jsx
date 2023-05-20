import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import NotFound from '../pages/NotFound/NotFound';

const Main = () => {
  const location = useLocation();

  // Check if the current route is the 404 route
  const isNotFoundPage = ![
    '/', '/login', '/register', '/blogs', '/allToys', '/myToys', '/addToy', '/contact'
  ].includes(location.pathname);

  return (
    <div>
      {!isNotFoundPage && <Header></Header>}
      {isNotFoundPage ? (
        <NotFound></NotFound>
      ) : (
        <Outlet></Outlet>
      )}
      {!isNotFoundPage && <Footer></Footer>}
    </div>

  );
};

export default Main;