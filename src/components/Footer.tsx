import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              FAREAST CALIBRATION
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Your trusted partner in precision calibration services. We ensure your instruments perform at their best, maintaining the highest standards of accuracy and reliability.
            </Typography>
            <Box>
              <IconButton color="inherit" size="small"><FacebookIcon /></IconButton>
              <IconButton color="inherit" size="small"><LinkedInIcon /></IconButton>
              <IconButton color="inherit" size="small"><TwitterIcon /></IconButton>
              <IconButton color="inherit" size="small"><InstagramIcon /></IconButton>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover">About Us</Link>
              <Link component={RouterLink} to="/services" color="inherit" underline="hover">Our Services</Link>
              <Link component={RouterLink} to="/clients" color="inherit" underline="hover">Our Clients</Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Temperature Calibration</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Pressure Calibration</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Dimensional Calibration</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Electrical Calibration</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Details
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              A-123, Industrial Area Phase II, New Delhi - 1100XX
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Phone: +91 98765 43210
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Email: info@fareastcalibration.com
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
        
        <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Fareast Calibration Private Limited. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
