import React, { Suspense } from 'react';
import { Box, LinearProgress } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<LinearProgress color="secondary" sx={{ height: 4, position: 'fixed', top: 64, left: 0, right: 0, zIndex: 9999 }} />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
