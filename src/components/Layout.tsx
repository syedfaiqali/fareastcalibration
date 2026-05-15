import React, { Suspense, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BrandLoader from './BrandLoader';

const Layout: React.FC = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  if (booting) {
    return <BrandLoader />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Suspense fallback={<BrandLoader />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </Box>

  );
};

export default Layout;
