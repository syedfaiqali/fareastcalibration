import React, { Suspense, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BrandLoader from './BrandLoader';

const Layout: React.FC = () => {
  const location = useLocation();
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
          zIndex: 2, 
          bgcolor: 'background.default',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          mb: 0 // Footer is sticky underneath
        }}
      >
        <Suspense fallback={<BrandLoader />}>
          <AnimatePresence mode="wait">
            <Box
              key={location.pathname}
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <Outlet />
            </Box>
          </AnimatePresence>
        </Suspense>
      </Box>
      <Footer />
    </Box>

  );
};

export default Layout;
