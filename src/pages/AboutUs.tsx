import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import PageHeader from '../components/PageHeader';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DiamondIcon from '@mui/icons-material/Diamond';
import directorImg from '../assets/director.png';

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#fcfcfc' }}>
      <PageHeader 
        title="About Us" 
        subtitle="Leading the way in calibration excellence since 2014." 
      />

      {/* Director Message Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: -20, 
                  left: -20, 
                  width: '100%', 
                  height: '100%', 
                  bgcolor: 'primary.main', 
                  borderRadius: '24px', 
                  opacity: 0.1,
                  zIndex: 0
                }} 
              />
              <Box
                component="img"
                src={directorImg}
                alt="Director Operations"
                sx={{
                  width: '100%',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  position: 'relative',
                  zIndex: 1,
                  display: 'block'
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: 20, 
                  right: 20, 
                  bgcolor: 'white', 
                  p: 2, 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  zIndex: 2
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>Muhammad Aamir</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Director Operations</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                  LEADERSHIP REFLECTION
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: '#1a1a1a' }}>
                  Director's Message
                </Typography>
                <Divider sx={{ width: 60, height: 4, bgcolor: 'primary.main', borderRadius: 2, mb: 4 }} />
              </Box>
              
              <Box sx={{ position: 'relative' }}>
                <FormatQuoteIcon sx={{ position: 'absolute', top: -10, left: -40, fontSize: 60, color: 'primary.main', opacity: 0.1 }} />
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', fontStyle: 'italic' }}>
                  "Progress for me has never been a dream. It has always been a distant reality and once one milestone is achieved, there is always another one waiting to be crossed. It is with this belief that we started Fareast calibration & testing services in 2014."
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Almost instantly, Fareast Calibration & Testing Services became a prominent name in its business segment, but like every company director to their dream, I always wanted to push my company to more prosperous milestones. More than being a global player, I always perceived my company as a unit that could make a difference with its quality and competitively priced services.
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Overcoming challenge with the help of Almighty Allah & support of my brilliant team, I have been successful in bringing Fareast Calibration & Testing services to a new milestone of global recognition with ISO 9001:2015 & ISO/IEC 17025:2017 Accredited Laboratory (Komite Akreditasi Nasional).
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', fontWeight: 500 }}>
                The journey of Fareast Calibration & Testing Services is never ending. But with the help of Almighty Allah & support of my team and clients, I am confident that the company will continue to scale milestones of excellence for years to come.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Introduction Section with Gradient Background */}
      <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 2 }}>
                WHO WE ARE
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 4 }}>
                Introduction
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.9, mb: 3, lineHeight: 1.8 }}>
                Fareast calibration is formed with the objective to provide laboratory calibration and onsite calibration services. We serve all the major industries such as Oil and gas, Manufacturing industry, Marine industry, R&D laboratories, food and beverage, Electrical companies, Mechanical companies, Testing laboratories, Hotels.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
                Our quality system compliance to ISO 9001:2015 & ISO/IEC 17025:2017 Accredited Laboratory (Komite Akreditasi Nasional) standards we are certified for the competency of testing and calibration services.
              </Typography>
              <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, borderLeft: '4px solid', borderColor: 'primary.main' }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "All the instruments either for laboratory use or field use will be periodically calibrated and traceable to either accredited laboratory or national laboratory."
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: 400, 
                    borderRadius: '50% 20% 50% 20%', 
                    bgcolor: 'primary.main', 
                    filter: 'blur(80px)', 
                    position: 'absolute', 
                    opacity: 0.2 
                  }} 
                />
                <Grid container spacing={2}>
                  {[
                    'Oil & Gas', 'Manufacturing', 'Marine', 'R&D Labs', 'Food & Beverage', 'Electrical'
                  ].map((text, i) => (
                    <Grid size={{ xs: 6 }} key={i}>
                      <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                        <Typography sx={{ fontWeight: 600 }}>{text}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision, Mission, Values */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Grid container spacing={4}>
          {[
            {
              title: 'Our Vision',
              icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
              text: 'Fareast calibration and testing services vision is to become a well-known accredited calibration laboratory. We would like to see ourselves in upcoming years as one of the best calibration service providers in the region.',
              color: '#3f51b5'
            },
            {
              title: 'Our Mission',
              icon: <AdsClickIcon sx={{ fontSize: 40 }} />,
              text: 'To be well-known calibration service providers in the region. We deliver high-quality services, improving our methods and instrumentation to compliment new measurement technology with specialized staff.',
              color: '#00bcd4'
            },
            {
              title: 'Our Values',
              icon: <DiamondIcon sx={{ fontSize: 40 }} />,
              text: 'Integrity, Precision, and Excellence. We believe in providing traceable and accurate results that empower industries to reach their full potential with safety and reliability.',
              color: '#4caf50'
            }
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 6, 
                  height: '100%', 
                  borderRadius: 6, 
                  bgcolor: 'white', 
                  border: '1px solid #eee',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                    borderColor: item.color
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: 4, 
                    bgcolor: `${item.color}15`, 
                    color: item.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 4
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 3 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
