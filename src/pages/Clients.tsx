import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import PageHeader from '../components/PageHeader';

const Clients: React.FC = () => {
  return (
    <Box>
      <PageHeader 
        title="Our Clients" 
        subtitle="Trusted by industry leaders across the globe." 
      />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="body1" align="center" sx={{ maxWidth: 800, mx: 'auto', mb: 8, color: 'text.secondary' }}>
          We are proud to serve over 500+ satisfied clients across various sectors. Our commitment to quality and precision has made us a preferred partner for several Fortune 500 companies and government organizations.
        </Typography>

        <Grid container spacing={3}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  border: '1px solid #f0f0f0', 
                  height: 120, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }
                }}
              >
                <Typography variant="h6" sx={{ color: 'grey.300', fontWeight: 800 }}>CLIENT {index + 1}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 4 }}>Industries We Serve</Typography>
          <Grid container spacing={4}>
            {[
              'Pharmaceuticals & Biotech',
              'Aerospace & Defense',
              'Automotive Manufacturing',
              'Oil & Gas / Energy',
              'Food & Beverage',
              'Hospital & Healthcare'
            ].map((industry, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box sx={{ p: 3, bgcolor: 'rgba(0,117,74,0.05)', borderRadius: 2, borderLeft: '4px solid #00754A' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{industry}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
