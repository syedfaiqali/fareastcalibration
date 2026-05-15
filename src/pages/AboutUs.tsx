import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import directorImg from '../assets/director.png';
import { BadgeCheck, Target, Eye, HeartHandshake, Sparkles } from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as any }
};



const AboutUs: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <PageHeader
        title="Our Story. Our Precision."
        subtitle="Fareast Calibration isn't just about measurements; it's about the confidence that keeps industries running without a second thought."
      />

      {/* Modern Intro Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{ position: 'relative' }}
            >
              {/* Decorative quote mark */}
              <Box sx={{ position: 'absolute', top: -40, left: -40, opacity: 0.05, color: 'primary.main' }}>
                <Typography sx={{ fontSize: 160, fontWeight: 900, lineHeight: 1 }}>"</Typography>
              </Box>
              
              <Stack spacing={4}>
                <MotionBox variants={fadeInUp} initial="initial" whileInView="animate">
                  <Chip 
                    label="ESTABLISHED 2013" 
                    sx={{ width: 'fit-content', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', fontWeight: 800, letterSpacing: 1 }} 
                  />
                </MotionBox>
                
                <MotionTypography 
                  variants={fadeInUp} 
                  initial="initial" 
                  whileInView="animate"
                  transition={{ delay: 0.1 }}
                  variant="h2" 
                  sx={{ fontWeight: 900, lineHeight: 1.1, color: 'secondary.main' }}
                >
                  Setting the Standard for <Box component="span" sx={{ color: 'primary.main' }}>Calibration</Box>
                </MotionTypography>

                <MotionTypography 
                  variants={fadeInUp} 
                  initial="initial" 
                  whileInView="animate"
                  transition={{ delay: 0.2 }}
                  variant="h6" 
                  sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 400 }}
                >
                  Fareast Calibration was founded on a simple premise: that industrial precision should be accessible, traceable, and absolutely reliable. We don't just provide certificates; we provide the peace of mind that your operations are built on a foundation of accuracy.
                </MotionTypography>

                <MotionTypography 
                  variants={fadeInUp} 
                  initial="initial" 
                  whileInView="animate"
                  transition={{ delay: 0.3 }}
                  variant="body1" 
                  sx={{ color: 'text.secondary', lineHeight: 1.9 }}
                >
                  Over the last decade, we have grown from a small specialized lab into a regional leader in metrology, serving hundreds of clients across diverse industrial sectors. Our journey is defined by a relentless pursuit of excellence and a commitment to our clients' success.
                </MotionTypography>
              </Stack>
            </MotionBox>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: -20,
                  border: '2px solid rgba(15,122,79,0.1)',
                  borderRadius: '40px',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                sx={{
                  width: '100%',
                  height: 500,
                  objectFit: 'cover',
                  borderRadius: '40px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 40px 80px rgba(15,122,79,0.15)'
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Vision & Mission Split-Screen */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 10, md: 15 }, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp}>
                <Stack spacing={4}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center' }}>
                    <Eye size={40} color="#0f7a4f" />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>Our Vision</Typography>
                  <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, lineHeight: 1.8 }}>
                    To be the most trusted and sought-after calibration partner in the region, recognized for our uncompromising integrity, technical prowess, and the ability to solve the most complex measurement challenges.
                  </Typography>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                  <Typography variant="body1" sx={{ opacity: 0.6 }}>
                    We aim to redefine industry standards by integrating cutting-edge technology with traditional craftsmanship in metrology.
                  </Typography>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp} transition={{ delay: 0.2 }}>
                <Stack spacing={4}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center' }}>
                    <Target size={40} color="#0f7a4f" />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>Our Mission</Typography>
                  <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, lineHeight: 1.8 }}>
                    To empower industries with high-precision calibration and validation services that ensure compliance, safety, and operational excellence. We are dedicated to providing fast, accurate, and traceable results every time.
                  </Typography>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                  <Typography variant="body1" sx={{ opacity: 0.6 }}>
                    Our mission is built on the core values of accuracy, transparency, and a customer-first approach to technical support.
                  </Typography>
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Leadership Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 20 } }}>
        <Grid container spacing={8} sx={{ alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  position: 'absolute',
                  top: -40,
                  left: -40,
                  width: 200,
                  height: 200,
                  bgcolor: 'rgba(15,122,79,0.05)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
              />
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{ position: 'relative', zIndex: 1 }}
              >
                <Stack spacing={4}>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                    LEADERSHIP
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main' }}>
                    Guided by Experience, Driven by Quality
                  </Typography>
                  <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'text.secondary', fontWeight: 400, borderLeft: '4px solid #0f7a4f', pl: 3 }}>
                    "Quality is not an act, it is a habit. In calibration, it is our only language."
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                    Under the leadership of our Director of Operations, Fareast Calibration has maintained a 99% client retention rate. We believe that true technical leadership comes from being on the ground, understanding the nuances of every instrument, and never compromising on traceability.
                  </Typography>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main' }}>Mr. R.K. Sharma</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700 }}>Director Operations</Typography>
                  </Box>
                </Stack>
              </MotionBox>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(24px, 24px)',
                  borderRadius: '40px',
                  bgcolor: 'primary.main',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src={directorImg}
                alt="Director"
                sx={{
                  width: '100%',
                  height: 600,
                  objectFit: 'cover',
                  borderRadius: '40px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 30px 60px rgba(15,122,79,0.2)'
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Core Values Section */}
      <Box sx={{ bgcolor: '#f4fbf7', py: { xs: 10, md: 15 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
              OUR FOUNDATION
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main' }}>
              Core Values That Define Us
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {[
              { title: 'Traceable Accuracy', icon: BadgeCheck, text: 'Every measurement is traceable to national and international standards (NIST/NABL).' },
              { title: 'Industrial Focus', icon: Target, text: 'We speak the language of engineering, downtime, and audit compliance.' },
              { title: 'Partnership Support', icon: HeartHandshake, text: 'We are more than a lab; we are a technical extension of your quality team.' },
              { title: 'Innovative Metrology', icon: Sparkles, text: 'Integrating modern software and workflows into traditional calibration cycles.' }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <MotionPaper
                  whileHover={{ y: -15 }}
                  sx={{
                    p: 5,
                    height: '100%',
                    borderRadius: '30px',
                    bgcolor: 'white',
                    border: '1px solid rgba(15,122,79,0.05)',
                    boxShadow: '0 15px 30px rgba(15,122,79,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ width: 70, height: 70, borderRadius: '50%', bgcolor: 'rgba(15,122,79,0.08)', color: 'primary.main', display: 'grid', placeItems: 'center', mb: 3 }}>
                    <item.icon size={32} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: 'secondary.main' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
