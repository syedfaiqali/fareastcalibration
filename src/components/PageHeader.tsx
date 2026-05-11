import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
          <Typography color="inherit">{breadcrumb || title}</Typography>
        </Breadcrumbs>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>{title}</Typography>
        {subtitle && <Typography variant="h6" sx={{ mt: 1, opacity: 0.8, fontWeight: 400 }}>{subtitle}</Typography>}
      </Container>
    </Box>
  );
};

export default PageHeader;
