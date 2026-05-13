import React, { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Loader />
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="suspense-fallback">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
