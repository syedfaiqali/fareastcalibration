import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  Chip,
  Paper,
  Divider,
  TextField,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Sparkles,
  TimerReset,
  MessageSquare,
} from 'lucide-react';
import {
  heroStats,
  heroSlides,
  serviceGroups,
  testimonials,
  clients,
} from '../data/siteContent';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionPaper = motion(Paper);
const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <Box sx={{ bgcolor: '#f4fbf7' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'primary.main', // Navy Blue background for the hero
          color: 'white',
          minHeight: { xs: 'auto', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.05), transparent 40%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            background: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4}>
                <AnimatePresence mode="wait">
                  <MotionBox
                    key={slide.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 40, height: 2, bgcolor: 'secondary.main' }} />
                        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 2 }}>
                          Fareast Calibration Excellence
                        </Typography>
                      </Stack>
                      
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: { xs: '3rem', md: '4.5rem' },
                          lineHeight: 1.1,
                          fontWeight: 900,
                          color: 'white',
                          textShadow: '0 4px 20px rgba(0,0,0,0.2)'
                        }}
                      >
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                            {word}
                          </span>
                        ))}
                      </Typography>
                      
                      <Typography
                        variant="h6"
                        sx={{ 
                          color: 'rgba(255,255,255,0.8)', 
                          maxWidth: 550, 
                          lineHeight: 1.8, 
                          fontWeight: 400,
                          fontSize: '1.1rem'
                        }}
                      >
                        {slide.description}
                      </Typography>

                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ pt: 2 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          endIcon={<ArrowRight size={20} />}
                          sx={{ 
                            px: 4, 
                            py: 2, 
                            fontSize: '1rem',
                            boxShadow: '0 10px 30px rgba(15, 122, 79, 0.3)',
                            '&:hover': {
                              bgcolor: 'secondary.dark',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          Explore Services
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ 
                            px: 4, 
                            py: 2, 
                            color: 'white', 
                            borderColor: 'rgba(255,255,255,0.3)',
                            fontSize: '1rem',
                            '&:hover': {
                              borderColor: 'white',
                              bgcolor: 'rgba(255,255,255,0.05)'
                            }
                          }}
                          startIcon={<PhoneCall size={20} />}
                        >
                          Contact Specialist
                        </Button>
                      </Stack>
                    </Stack>
                  </MotionBox>
                </AnimatePresence>

                {/* Slider Controls with Progress Loader */}
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center', mt: 4 }}>
                  <Stack direction="row" spacing={1}>
                    <Box 
                      component="button" 
                      onClick={() => setActiveSlide((v) => (v - 1 + heroSlides.length) % heroSlides.length)}
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: '50%', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        bgcolor: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'grid',
                        placeItems: 'center',
                        transition: 'all 0.3s',
                        '&:hover': { bgcolor: 'white', color: 'primary.main' }
                      }}
                    >
                      <ChevronLeft size={24} />
                    </Box>
                    <Box 
                      component="button" 
                      onClick={() => setActiveSlide((v) => (v + 1) % heroSlides.length)}
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: '50%', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        bgcolor: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'grid',
                        placeItems: 'center',
                        transition: 'all 0.3s',
                        '&:hover': { bgcolor: 'white', color: 'primary.main' }
                      }}
                    >
                      <ChevronRight size={24} />
                    </Box>
                  </Stack>

                  <Box sx={{ flex: 1, maxWidth: 200, height: 2, bgcolor: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                      key={activeSlide}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5.2, ease: "linear" }}
                      style={{ height: '100%', background: '#0f7a4f', position: 'absolute', top: 0, left: 0 }}
                    />
                  </Box>
                  
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, opacity: 0.6 }}>
                    0{activeSlide + 1} / 0{heroSlides.length}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {/* NDCL style circular image frame */}
                <MotionBox
                  key={slide.image}
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  sx={{
                    position: 'relative',
                    width: { xs: 300, md: 540 },
                    height: { xs: 300, md: 540 },
                    borderRadius: '50%',
                    border: '12px solid rgba(255,255,255,0.05)',
                    padding: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'visible'
                  }}
                >
                  {/* Rotating outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: 'absolute',
                      inset: -20,
                      borderRadius: '50%',
                      border: '1px dashed rgba(255,255,255,0.2)',
                    }}
                  />
                  
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={slide.image}
                        src={slide.image}
                        alt={slide.title}
                        initial={{ scale: 1.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </AnimatePresence>
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(15,122,79,0.3) 0%, transparent 50%, rgba(13,63,43,0.2) 100%)',
                      }}
                    />
                  </Box>

                  {/* Floating Stat Badges */}
                  <MotionBox
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    sx={{
                      position: 'absolute',
                      top: '10%',
                      right: '-5%',
                      bgcolor: 'white',
                      p: 2,
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      zIndex: 10
                    }}
                  >
                    <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 1, borderRadius: 2 }}>
                      <BadgeCheck size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>100%</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Accuracy</Typography>
                    </Box>
                  </MotionBox>

                  <MotionBox
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    sx={{
                      position: 'absolute',
                      bottom: '10%',
                      left: '-5%',
                      bgcolor: 'white',
                      p: 2,
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      zIndex: 10
                    }}
                  >
                    <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 1, borderRadius: 2 }}>
                      <TimerReset size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>24/7</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Support</Typography>
                    </Box>
                  </MotionBox>
                </MotionBox>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Floating background elements */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            right: -50,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            opacity: 0.05,
            filter: 'blur(100px)',
          }}
        />
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
        <Box 
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: 0.03, 
            backgroundImage: 'radial-gradient(#001b5e 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} 
        />
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  sx={{
                    width: { xs: 320, md: 480 },
                    height: { xs: 320, md: 480 },
                    borderRadius: '50%',
                    border: '2px dashed rgba(15,122,79,0.3)',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box component="img" src="/fareastcalibrationLogo.jpeg" sx={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                  </Box>
                  {/* Decorative floating dots */}
                  <Box sx={{ position: 'absolute', top: 40, right: 40, width: 60, height: 60, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                    {[...Array(9)].map((_, i) => (
                      <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    ))}
                  </Box>
                </MotionBox>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Chip 
                  label="Welcome To Fareast Calibration" 
                  sx={{ 
                    width: 'fit-content', 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    fontWeight: 700, 
                    px: 1,
                    borderRadius: '50px'
                  }} 
                />
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  New Delhi Calibration Laboratory Private Limited
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Providing scientific accuracy and confidence in every measurement since our inception. We specialize in high-precision calibration services for various industries, ensuring your instruments perform at their absolute best.
                </Typography>
                
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center', pt: 2 }}>
                  <Box 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'grid', 
                      placeItems: 'center',
                      boxShadow: '0 10px 20px rgba(15,122,79,0.2)'
                    }}
                  >
                    <PhoneCall size={28} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Have Any Questions?</Typography>
                    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 900 }}>(+91) 98109 77012</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}>
                    Why Choose Us?
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, color: 'secondary.main' }}>
                    Accurate & Reliable Calibration Solutions
                  </Typography>
                </Box>
                
                <Stack spacing={3}>
                  {[
                    { title: "Traceability Guaranteed", text: "All our measurements are traceable to national/international standards." },
                    { title: "Fast Turnaround Time", text: "We understand your deadlines and offer optimized scheduling for minimal downtime." },
                    { title: "Customized Solutions", text: "Tailored calibration plans that fit your specific industrial requirements." }
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={2.5} sx={{ alignItems: 'flex-start' }}>
                      <Box sx={{ mt: 0.5, bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', p: 1, borderRadius: '50%' }}>
                        <BadgeCheck size={20} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main' }}>{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.text}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative' }}>
                <MotionBox
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  sx={{
                    borderRadius: '24px 24px 100px 24px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.12)',
                    height: { xs: 350, md: 500 }
                  }}
                >
                  <Box component="img" src="https://images.unsplash.com/photo-1579154235884-10f5fe138760?auto=format&fit=crop&w=1200&q=80" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </MotionBox>
                
                {/* Experience Badge */}
                <MotionBox
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '-10%',
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(15,122,79,0.15)',
                    border: '8px solid white',
                    zIndex: 2
                  }}
                >
                  <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1 }}>11+</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>Years Of<br />Experience</Typography>
                </MotionBox>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Precision Gallery Section - NEW */}
      <Box sx={{ py: 12, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
              PRECISION IN ACTION
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main' }}>
              Our Laboratory & Field Excellence
            </Typography>
          </Stack>
          
          <Grid container spacing={3}>
            {[
              { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', title: 'Electrical Testing' },
              { url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', title: 'Pressure Calibration' },
              { url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80', title: 'Precision Metrology' },
              { url: 'https://images.unsplash.com/photo-1532187875605-1832d244b14a?auto=format&fit=crop&w=800&q=80', title: 'Scientific Verification' },
              { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80', title: 'Cleanroom Standards' },
              { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', title: 'Thermal Analysis' }
            ].map((img, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <MotionBox
                  whileHover={{ y: -10 }}
                  sx={{ 
                    position: 'relative', 
                    height: 300, 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(15,122,79,0.08)'
                  }}
                >
                  <Box 
                    component="img" 
                    src={img.url} 
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to top, rgba(13,63,43,0.8) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                      {img.title}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Our Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative' }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}>
              Our Services
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main' }}>
              Comprehensive Calibration Services
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {serviceGroups.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <MotionCard
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: '20px',
                      bgcolor: 'white',
                      border: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -30,
                        right: -30,
                        width: 120,
                        height: 120,
                        border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: '50%',
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 70, 
                        height: 70, 
                        borderRadius: '50%', 
                        bgcolor: 'rgba(15,122,79,0.08)', 
                        color: 'secondary.main', 
                        display: 'grid', 
                        placeItems: 'center',
                        mb: 3
                      }}
                    >
                      <Icon size={32} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                      {service.summary}
                    </Typography>
                    <Button 
                      variant="text" 
                      color="secondary" 
                      endIcon={<ArrowRight size={16} />}
                      sx={{ p: 0, '&:hover': { bgcolor: 'transparent', transform: 'translateX(5px)' }, transition: 'transform 0.3s' }}
                    >
                      Read More
                    </Button>
                  </MotionCard>
                </Grid>
              );
            })}
          </Grid>

          {/* Stats Bar */}
          <Box sx={{ mt: 10 }}>
            <Paper
              sx={{
                bgcolor: '#fec001',
                borderRadius: '100px',
                p: { xs: 4, md: 5 },
                boxShadow: '0 30px 60px rgba(254,192,1,0.2)',
                border: '4px solid rgba(255,255,255,0.3)'
              }}
            >
              <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                {heroStats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 6, md: 3 }}>
                    <Stack 
                      direction="row" 
                      spacing={2.5} 
                      sx={{ 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderRight: { md: index < 3 ? '1px solid rgba(13,63,43,0.1)' : 'none' }
                      }}
                    >
                      <MotionBox
                        animate={{ 
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut", 
                          delay: index * 0.3 
                        }}
                        sx={{ color: 'secondary.main', display: 'flex' }}
                      >
                        <stat.icon size={36} strokeWidth={2.5} />
                      </MotionBox>
                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main', lineHeight: 1 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 800, color: 'secondary.main', opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1.5, display: 'block', mt: 0.5 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Our Clients Section - BRAND THEME PREMIUM */}
      <Box 
        sx={{ 
          py: { xs: 10, md: 15 }, 
          bgcolor: 'white', 
          position: 'relative', 
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(15,122,79,0.1), transparent)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 4 }}>
                TRUSTED PARTNERS
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1 }}>
                Supporting Industrial <Box component="span" sx={{ color: 'primary.main' }}>Leaders</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mt: 2 }}>
                We provide high-precision calibration services for organizations that demand absolute measurement confidence.
              </Typography>
            </MotionBox>
          </Stack>

          {/* Premium Logo Marquee - Rectangular Consistency */}
          <Box sx={{ position: 'relative', overflow: 'hidden', py: 4 }}>
            <MotionBox
              animate={{ x: [0, -2000] }}
              transition={{ 
                duration: 35, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              sx={{ display: 'flex', gap: 4, width: 'max-content', alignItems: 'center' }}
            >
              {[...clients, ...clients, ...clients].map((client, i) => (
                <Box 
                  key={i} 
                  sx={{ 
                    width: { xs: 160, md: 240 }, 
                    height: { xs: 80, md: 120 }, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '16px',
                    border: '1px solid rgba(15,122,79,0.06)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(15,122,79,0.08)',
                    }
                  }}
                >
                  <Box 
                    component="img" 
                    src={client.logo} 
                    alt={client.name}
                    sx={{ 
                      maxWidth: '85%', 
                      maxHeight: '85%', 
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.5,
                      '&:hover': { filter: 'grayscale(0%)', opacity: 1 },
                      transition: 'all 0.4s'
                    }} 
                  />
                </Box>
              ))}
            </MotionBox>
            
            {/* Soft gradient masks for the edges */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: { xs: 100, md: 250 }, background: 'linear-gradient(90deg, #ffffff 10%, transparent 100%)', zIndex: 2 }} />
            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: { xs: 100, md: 250 }, background: 'linear-gradient(-90deg, #ffffff 10%, transparent 100%)', zIndex: 2 }} />
          </Box>



          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={RouterLink}
              to="/clients"
              variant="text"
              color="primary"
              endIcon={<ArrowRight size={20} />}
              sx={{ fontWeight: 800, fontSize: '1.1rem' }}
            >
              Explore our full client portfolio
            </Button>
          </Box>
        </Container>
      </Box>




      {/* Book Appointment Section - BEAUTIFIED */}
      <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: '#f4fbf7' }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ borderRadius: '50px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(15,122,79,0.1)' }}>
            {/* Left Panel: Trust & Image Gallery */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ bgcolor: 'primary.main', p: { xs: 5, md: 8 }, color: 'white', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 800, letterSpacing: 2 }}>
                  GET IN TOUCH
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 3 }}>
                  Ready to Schedule Your Calibration?
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, lineHeight: 1.8 }}>
                  Our team of expert engineers is ready to provide you with the highest precision services. Fill out the form, and we'll get back to you within 24 hours.
                </Typography>

                <Stack spacing={4}>
                  {[
                    { label: 'Accredited Lab', val: 'ISO/IEC 17025' },
                    { label: 'Experience', val: '11+ Years' },
                    { label: 'Turnaround', val: 'Fast & Reliable' }
                  ].map((stat, i) => (
                    <Box key={i}>
                      <Typography variant="caption" sx={{ opacity: 0.6, fontWeight: 700, letterSpacing: 1 }}>{stat.label}</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{stat.val}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Decorative Circle */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: -100, 
                  right: -100, 
                  width: 300, 
                  height: 300, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(255,255,255,0.05)',
                  zIndex: 1
                }} 
              />
            </Grid>

            {/* Right Panel: The Form */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ bgcolor: 'white', p: { xs: 5, md: 8 } }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                    Send Us a Message
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Please provide your details and requirements below.
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      {...({
                        fullWidth: true,
                        label: "Your Name",
                        variant: "standard",
                        InputLabelProps: { shrink: true },
                        sx: { '& .MuiInput-root': { py: 1 } }
                      } as any)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      {...({
                        fullWidth: true,
                        label: "Email Address",
                        variant: "standard",
                        InputLabelProps: { shrink: true },
                        sx: { '& .MuiInput-root': { py: 1 } }
                      } as any)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      {...({
                        fullWidth: true,
                        label: "Phone Number",
                        variant: "standard",
                        InputLabelProps: { shrink: true },
                        sx: { '& .MuiInput-root': { py: 1 } }
                      } as any)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      {...({
                        fullWidth: true,
                        label: "Service Type",
                        variant: "standard",
                        placeholder: "e.g. Temperature",
                        InputLabelProps: { shrink: true },
                        sx: { '& .MuiInput-root': { py: 1 } }
                      } as any)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField 
                      {...({
                        fullWidth: true,
                        label: "Your Message",
                        variant: "standard",
                        multiline: true,
                        rows: 3,
                        InputLabelProps: { shrink: true },
                        sx: { '& .MuiInput-root': { py: 1 } }
                      } as any)}
                    />
                  </Grid>
                </Grid>

                <Button 
                  variant="contained" 
                  size="large"
                  fullWidth
                  sx={{ 
                    py: 2, 
                    fontSize: '1.1rem', 
                    fontWeight: 800, 
                    borderRadius: '15px',
                    boxShadow: '0 20px 40px rgba(15,122,79,0.2)'
                  }}
                >
                  Send Request Now
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Industrial Projects Gallery Slider - BEAUTIFIED */}
      <Box sx={{ py: 12, bgcolor: '#ffffff', borderTop: '1px solid rgba(15,122,79,0.05)' }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: 'primary.main', fontWeight: 800, mb: 6, letterSpacing: 3 }}>
            OUR PRECISION PROJECTS
          </Typography>
          
          <Box sx={{ overflow: 'hidden', position: 'relative', py: 2 }}>
            <MotionBox
              animate={{ x: [0, -2000] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              sx={{ display: 'flex', gap: 4, width: 'max-content' }}
            >
              {[
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1532187875605-1832d244b14a?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
              ].map((url, i) => (
                <Box 
                  key={i} 
                  sx={{ 
                    width: { xs: 300, md: 450 }, 
                    height: 280, 
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}
                >
                  <Box 
                    component="img" 
                    src={url} 
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to top, rgba(13,63,43,0.4) 0%, transparent 50%)'
                    }} 
                  />
                </Box>
              ))}
            </MotionBox>
            
            {/* Soft gradient masks for the edges */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 200, background: 'linear-gradient(90deg, #ffffff 10%, transparent 100%)', zIndex: 2 }} />
            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 200, background: 'linear-gradient(-90deg, #ffffff 10%, transparent 100%)', zIndex: 2 }} />
          </Box>
        </Container>
      </Box>

      {/* CTA Bar above Footer */}
      <Box sx={{ bgcolor: 'primary.main', py: 4 }}>
        <Container maxWidth="lg">
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={3} 
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'white', color: 'primary.main', display: 'grid', placeItems: 'center', boxShadow: '0 10px 20px rgba(15,122,79,0.1)' }}>
                <MessageSquare size={30} />
              </Box>
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>
                Call if any query to related to our services — (+91) 9810977012
              </Typography>
            </Stack>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'secondary.main', 
                color: 'white', 
                px: 4, 
                py: 1.5, 
                borderRadius: '50px',
                '&:hover': { bgcolor: 'secondary.dark' }
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
