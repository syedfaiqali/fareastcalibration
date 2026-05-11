import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Stack, 
  Avatar,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.95)} 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 10, md: 20 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <MotionTypography 
            variant="h1" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}
          >
            Precision. Reliability. Excellence.
          </MotionTypography>
          <MotionTypography 
            variant="h5" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ mb: 4, opacity: 0.9, fontWeight: 400, maxWidth: '800px', mx: 'auto' }}
          >
            Fareast Calibration is your premier partner for state-of-the-art calibration and validation services, ensuring your instruments meet global standards.
          </MotionTypography>
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="contained" color="secondary" size="large" sx={{ mr: 2, px: 4, py: 1.5 }}>
              Our Services
            </Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', px: 4, py: 1.5 }}>
              Contact Us
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -5, mb: 10, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          {[
            { label: 'Happy Clients', value: '500+', icon: <GroupsIcon sx={{ fontSize: 40 }} /> },
            { label: 'Calibrations Done', value: '15,000+', icon: <VerifiedIcon sx={{ fontSize: 40 }} /> },
            { label: 'Turnaround Time', value: '24-48h', icon: <SpeedIcon sx={{ fontSize: 40 }} /> },
            { label: 'Expert Engineers', value: '20+', icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} /> },
          ].map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Box sx={{ color: 'secondary.main', mb: 1 }}>{stat.icon}</Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Highlight */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Our Expertise</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            We provide a wide range of calibration services across various domains to keep your industry moving forward with accuracy.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {[
            { title: 'Thermal Calibration', desc: 'Precise calibration for ovens, furnaces, chillers, and temperature sensors.' },
            { title: 'Mechanical Calibration', desc: 'Accuracy for pressure gauges, vacuum gauges, and dimensional tools.' },
            { title: 'Electrical Calibration', desc: 'Expert calibration for multimeters, oscilloscopes, and power supplies.' },
            { title: 'Validation Services', desc: 'Comprehensive HVAC, cleanroom, and equipment validation for pharma.' },
          ].map((service, index) => (
            <Grid size={{ xs: 12, md: 3 }} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
                  <Button sx={{ mt: 2, p: 0 }}>Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.03), py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 8 }}>What Our Clients Say</Typography>
          <Grid container spacing={4}>
            {[
              { name: 'Dr. Amit Sharma', company: 'Global Pharma', text: 'Fareast Calibration has been our go-to partner for validation services for over 5 years. Their expertise is unmatched.' },
              { name: 'Rajesh Khanna', company: 'Apex Industries', text: 'Fast turnaround and highly accurate reports. Highly recommended for industrial calibration.' },
            ].map((t, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Card sx={{ p: 4, position: 'relative' }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>"{t.text}"</Typography>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>{t.name[0]}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{t.company}</Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
