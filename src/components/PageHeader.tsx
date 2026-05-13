import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        bgcolor: '#0f172a', 
        color: 'white', 
        pt: 12, 
        pb: 10,
        overflow: 'hidden'
      }}
    >
      {/* Decorative Elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: -100, 
          right: -100, 
          width: 400, 
          height: 400, 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: -50, 
          left: -50, 
          width: 300, 
          height: 300, 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 0
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs sx={{ color: 'rgba(255,255,255,0.5)', mb: 3, '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.3)' } }}>
            <Link component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Home</Link>
            <Typography sx={{ color: 'primary.light', fontWeight: 600 }}>{breadcrumb || title}</Typography>
          </Breadcrumbs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 900, 
              fontSize: { xs: '3rem', md: '4.5rem' },
              lineHeight: 1,
              mb: 2,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to right, #fff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 1, 
                opacity: 0.7, 
                fontWeight: 500, 
                maxWidth: '700px', 
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              {subtitle}
            </Typography>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default PageHeader;
