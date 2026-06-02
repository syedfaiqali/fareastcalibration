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
  TextField,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Send,
  TimerReset,
  MessageSquare,
} from 'lucide-react';
import {
  aboutImages,
  heroStats,
  heroSlides,
  homeGallery,
  projectGallery,
  serviceGroups,
  clients,
} from '../data/siteContent';
import accurateCalibrationImage  from '../assets/DIMENSIONAL 8.webp'; 

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];
  const brandBlue = '#001b5e';
  const brandGreen = '#0f7a4f';
  const brandGreenDark = '#0d3f2b';
  const softBlue = '#edf5ff';

  return (
    <Box sx={{ bgcolor: '#f4fbf7' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(circle at 78% 18%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.24) 32%, transparent 52%),
            radial-gradient(circle at 12% 85%, rgba(0,27,94,0.30) 0%, transparent 36%),
            linear-gradient(135deg, ${brandGreenDark} 0%, ${brandGreen} 68%, ${brandBlue} 100%)
          `,
          color: 'white',
          minHeight: { xs: 'auto', md: 'calc(100svh - 110px)' },
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 8, md: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.12), transparent 40%)',
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
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 7, md: 5, lg: 6 },
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}
        >
          <Grid container spacing={{ xs: 5, md: 4, lg: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={{ xs: 4, md: 2.75, lg: 3.5 }}>
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
                        <Box sx={{ width: 40, height: 2, bgcolor: 'rgba(255,255,255,0.78)' }} />
                        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.78)', fontWeight: 800, letterSpacing: 2 }}>
                          Fareast Calibration Excellence
                        </Typography>
                      </Stack>

                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: { xs: '2.4rem', sm: '3rem', md: '4.5rem' },
                          '@media (min-width: 900px) and (max-height: 820px)': {
                            fontSize: '4rem',
                          },
                          lineHeight: 1.1,
                          fontWeight: 900,
                          color: 'white',
                          textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                          display: 'flex',
                          flexWrap: 'wrap'
                        }}
                      >
                        {slide.title.split(' ').map((word, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.08) }}
                            style={{ display: 'inline-block', marginRight: '0.3em' }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          maxWidth: 550,
                          lineHeight: 1.8,
                          fontWeight: 400,
                          fontSize: '1.1rem',
                          display: 'flex',
                          flexWrap: 'wrap'
                        }}
                      >
                        {slide.description.split(' ').map((word, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 + (i * 0.03) }}
                            style={{ display: 'inline-block', marginRight: '0.35em' }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Typography>

                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ pt: 2 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          to="/services"
                          component={RouterLink}
                          size="large"
                          endIcon={<ArrowRight size={20} />}
                          sx={{
                            px: 4,
                            py: 2,
                            fontSize: '1rem',
                            bgcolor: brandBlue,
                            background: `linear-gradient(135deg, ${brandBlue} 0%, #0c3f8f 100%)`,
                            boxShadow: '0 16px 34px rgba(0,27,94,0.28)',
                            '&:hover': {
                              bgcolor: '#00144a',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          Explore Services
                        </Button>
                        <Button
                          variant="outlined"
                          to="/contact"
                          component={RouterLink}
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
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center', mt: { xs: 4, md: 2 } }}>
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
                      style={{ height: '100%', background: '#ffffff', position: 'absolute', top: 0, left: 0 }}
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
                    width: { xs: 300, md: 500, lg: 540 },
                    height: { xs: 300, md: 500, lg: 540 },
                    '@media (min-width: 900px) and (max-height: 820px)': {
                      width: 460,
                      height: 460,
                    },
                    borderRadius: '50%',
                    border: '12px solid rgba(0, 27, 94, 0.85)',
                    padding: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'visible',
                    boxShadow: '0 0 0 10px rgba(15,122,79,0.18), 0 26px 70px rgba(0,27,94,0.28)'
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
                      border: '1px dashed rgba(254,255,255,0.35)',
                      boxShadow: '0 0 0 10px rgba(0,27,94,0.08)',
                    }}
                  />

                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '6px solid rgba(255,255,255,0.88)',
                      outline: '5px solid rgba(0,27,94,0.75)',
                      outlineOffset: '-10px',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
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
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: slide.objectPosition || 'center',
                        }}
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
                      border: `1px solid rgba(0,27,94,0.12)`,
                      boxShadow: '0 20px 40px rgba(0,27,94,0.18)',
                      color: brandBlue,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      zIndex: 10
                    }}
                  >
                    <Box sx={{ bgcolor: brandGreen, color: 'white', p: 1, borderRadius: 2 }}>
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
                      border: `1px solid rgba(0,27,94,0.12)`,
                      boxShadow: '0 20px 40px rgba(0,27,94,0.18)',
                      color: brandBlue,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      zIndex: 10
                    }}
                  >
                    <Box sx={{ bgcolor: brandGreen, color: 'white', p: 1, borderRadius: 2 }}>
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
            bgcolor: brandBlue,
            opacity: 0.05,
            filter: 'blur(100px)',
          }}
        />
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: softBlue, position: 'relative', overflow: 'hidden' }}>
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
                    border: '2px dashed rgba(0,27,94,0.24)',
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
                      border: '12px solid rgba(0, 27, 94, 0.85)',
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px rgba(0,27,94,0.14)',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box component="img" src={aboutImages.intro} alt="Fareast calibration laboratory" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  {/* Decorative floating dots */}
                  <Box sx={{ position: 'absolute', top: 40, right: 40, width: 60, height: 60, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                    {[...Array(9)].map((_, i) => (
                      <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: i % 2 ? brandGreen : brandBlue }} />
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
                    bgcolor: brandBlue,
                    color: 'white',
                    fontWeight: 700,
                    px: 1,
                    borderRadius: '50px'
                  }}
                />
                <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  PT Fareast <Box component="span" sx={{ color: brandGreen }}>Calibration</Box> and Testing Services
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Independent calibration and testing laboratory in Batam, Indonesia, serving thermal, mechanical, electrical, dimensional, analytical, general, and onboard calibration needs since 2014.
                </Typography>

                <Stack direction="row" spacing={3} sx={{ alignItems: 'center', pt: 2 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: brandBlue,
                      color: 'white',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: '0 10px 20px rgba(0,27,94,0.18)'
                    }}
                  >
                    <PhoneCall size={28} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Have Any Questions?</Typography>
                    <Link href="tel:+6282286881953" color="inherit" underline="hover">
                      <Typography variant="h5" sx={{ color: brandGreen, fontWeight: 900 }}>+62 822 8688 1953</Typography>
                    </Link>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(115deg, transparent 0%, transparent 54%, rgba(0,27,94,0.04) 54%, rgba(15,122,79,0.06) 100%)' }} />
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 800, letterSpacing: 2 }}>
                    Why Choose Us?
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, color: brandBlue }}>
                    Accurate & Reliable <Box component="span" sx={{ color: brandGreen }}>Calibration</Box> Solutions
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  {[
                    { title: "KAN Accredited & ISO Certified", text: "Accredited by Komite Akreditasi Nasional in accordance with ISO/IEC 17025:2017 & ISO:9001-2015." },
                    { title: "Fast Turnaround Time", text: "Committed to delivery within lead time, with express calibration available with extra charges." },
                    { title: "Lab and Onsite Support", text: "In-lab and onsite calibration facilities with free pickup and delivery within Batam." }
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={2.5} sx={{ alignItems: 'flex-start' }}>
                      <Box sx={{ mt: 0.5, bgcolor: index % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.10)', color: index % 2 ? brandBlue : brandGreen, p: 1, borderRadius: '50%' }}>
                        <BadgeCheck size={20} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: brandBlue }}>{item.title}</Typography>
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
                    boxShadow: '0 40px 80px rgba(0,27,94,0.16)',
                    border: '1px solid rgba(0,27,94,0.10)',
                    height: { xs: 350, md: 500 }
                  }}
                >
                  <Box component="img" src={accurateCalibrationImage} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    bgcolor: brandBlue,
                    background: `linear-gradient(135deg, ${brandBlue} 0%, ${brandGreen} 100%)`,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0,27,94,0.18)',
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
      <Box sx={{ py: 12, bgcolor: softBlue }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 800, letterSpacing: 3 }}>
              PRECISION IN ACTION
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: brandBlue }}>
              Our Laboratory & <Box component="span" sx={{ color: brandGreen }}>Field Excellence</Box>
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {homeGallery.map((img, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <MotionBox
                  whileHover={{ y: -10 }}
                  sx={{
                    position: 'relative',
                    height: 300,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 22px 44px rgba(0,27,94,0.12)',
                    border: '1px solid rgba(0,27,94,0.10)',
                  }}
                >
                  <Box
                    component="img"
                    src={img.image}
                    alt={img.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(0,27,94,0.82) 0%, rgba(15,122,79,0.42) 58%, transparent 100%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                      {img.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', mt: 0.75 }}>
                      {img.caption}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Our Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.55, pointerEvents: 'none', background: `radial-gradient(circle at 10% 10%, ${softBlue}, transparent 30%), radial-gradient(circle at 90% 20%, rgba(15,122,79,0.08), transparent 26%)` }} />
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 800, letterSpacing: 2 }}>
              Our Services
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: brandBlue }}>
              Comprehensive <Box component="span" sx={{ color: brandGreen }}>Calibration</Box> Services
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {serviceGroups.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              const accentColor = index % 2 ? brandBlue : brandGreen;
              const accentRgb = index % 2 ? '0,27,94' : '15,122,79';
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <MotionCard
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.92)',
                      border: '1px solid rgba(0,27,94,0.10)',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -30,
                        right: -30,
                        width: 120,
                        height: 120,
                        border: '1px solid rgba(0,27,94,0.08)',
                        borderRadius: '50%',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 'calc(100% + 64px)',
                        height: 150,
                        mx: -4,
                        mt: -4,
                        mb: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        bgcolor: index % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.10)',
                        color: accentColor,
                        display: 'grid',
                        placeItems: 'center',
                        mb: 3
                      }}
                    >
                      <Icon size={32} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: accentColor }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                      {service.summary}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to={`/services#${service.anchor}`}
                      variant="text"
                      endIcon={<ArrowRight size={16} />}
                      sx={{
                        alignSelf: 'flex-start',
                        px: 2,
                        py: 1,
                        borderRadius: '999px',
                        border: `1px solid rgba(${accentRgb},0.20)`,
                        bgcolor: `rgba(${accentRgb},0.08)`,
                        color: accentColor,
                        fontWeight: 800,
                        transition: 'all 0.3s ease',
                        '& .MuiButton-endIcon': {
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover': {
                          bgcolor: accentColor,
                          color: 'white',
                          borderColor: accentColor,
                          boxShadow: `0 8px 18px rgba(${accentRgb},0.20)`,
                        },
                        '&:hover .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      }}
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
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'rgba(255,255,255,0.92)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f4fbf7 52%, #edf5ff 100%)',
                borderRadius: { xs: '28px', md: '42px' },
                p: { xs: 2.5, md: 3 },
                boxShadow: '0 28px 70px rgba(0,27,94,0.12), 0 16px 40px rgba(15,122,79,0.10)',
                border: '1px solid rgba(0,27,94,0.12)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                  borderTop: '5px solid rgba(0,27,94,0.78)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '8%',
                  right: '8%',
                  bottom: -30,
                  height: 70,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(15,122,79,0.16), transparent 65%)',
                  pointerEvents: 'none',
                }
              }}
            >
              <Grid container spacing={{ xs: 1.5, md: 0 }} sx={{ alignItems: 'stretch', position: 'relative', zIndex: 1 }}>
                {heroStats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 6, md: 3 }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={{ xs: 1.5, sm: 2 }}
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: { xs: 130, md: 108 },
                        px: { xs: 1, md: 3 },
                        py: { xs: 2, md: 1.5 },
                        textAlign: { xs: 'center', sm: 'left' },
                        borderRight: { md: index < 3 ? '1px solid rgba(0,27,94,0.10)' : 'none' },
                        borderRadius: { xs: 3, md: 0 },
                        bgcolor: { xs: 'rgba(255,255,255,0.62)', md: 'transparent' },
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
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: '18px',
                          color: '#0f7a4f',
                          bgcolor: 'rgba(15,122,79,0.10)',
                          border: '1px solid rgba(15,122,79,0.16)',
                          display: 'grid',
                          placeItems: 'center',
                          flexShrink: 0,
                          boxShadow: '0 12px 24px rgba(15,122,79,0.10)',
                        }}
                      >
                        <stat.icon size={30} strokeWidth={2.4} />
                      </MotionBox>
                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 900, color: '#001b5e', lineHeight: 1, fontSize: { xs: '1.9rem', md: '2.35rem' } }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 900, color: '#0f7a4f', textTransform: 'uppercase', letterSpacing: 1.6, display: 'block', mt: 0.75 }}>
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
          bgcolor: softBlue,
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
            background: 'linear-gradient(90deg, transparent, rgba(0,27,94,0.14), rgba(15,122,79,0.14), transparent)',
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
              <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 800, letterSpacing: 4 }}>
                TRUSTED PARTNERS
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, mt: 1 }}>
                Supporting Industrial <Box component="span" sx={{ color: brandGreen }}>Leaders</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mt: 2 }}>
                We provide high-precision calibration services for organizations that demand absolute measurement confidence.
              </Typography>
            </MotionBox>
          </Stack>

          {/* Optimized Lightweight Marquee */}
          <Box sx={{ position: 'relative', overflow: 'hidden', py: 4 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                width: 'max-content',
                alignItems: 'center',
                animation: 'scroll 60s linear infinite',
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 200,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.86)',
                    border: '1px solid rgba(0,27,94,0.08)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 14px 28px rgba(0,27,94,0.10)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    sx={{
                      maxWidth: '80%',
                      maxHeight: '80%',
                      objectFit: 'contain',
                      opacity: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.08)',
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 150, background: `linear-gradient(90deg, ${softBlue} 0%, transparent 100%)`, zIndex: 2 }} />
            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 150, background: `linear-gradient(-90deg, ${softBlue} 0%, transparent 100%)`, zIndex: 2 }} />
          </Box>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>




          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={RouterLink}
              to="/clients"
              variant="text"
              color="primary"
              endIcon={<ArrowRight size={20} />}
              sx={{ fontWeight: 800, fontSize: '1.1rem', color: brandBlue }}
            >
              Explore our full client portfolio
            </Button>
          </Box>
        </Container>
      </Box>




      {/* Book Appointment Section - BEAUTIFIED */}
      <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ borderRadius: '36px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,27,94,0.12)', border: '1px solid rgba(0,27,94,0.10)' }}>
            {/* Left Panel: Trust & Image Gallery */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ bgcolor: brandBlue, background: `linear-gradient(145deg, ${brandBlue} 0%, #062c68 48%, ${brandGreenDark} 100%)`, p: { xs: 5, md: 8 }, color: 'white', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 800, letterSpacing: 2 }}>
                  GET IN TOUCH
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 3 }}>
                  Ready to Schedule Your Calibration?
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, lineHeight: 1.8 }}>
                  Our technical team is ready to support your calibration and testing requirements. Fill out the form, and we will get back to you with the next step.
                </Typography>

                <Stack spacing={4}>
                  {[
                    { label: 'Accredited Lab', val: 'KAN | ISO/IEC 17025 & ISO:9001-2015' },
                    { label: 'Experience', val: '11+ Years' },
                    { label: 'Turnaround', val: 'Fast & Reliable' }
                  ].map((stat, i) => (
                    <Box key={i}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.62)', fontWeight: 700, letterSpacing: 1 }}>{stat.label}</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.92)' }}>{stat.val}</Typography>
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
                  bgcolor: 'rgba(15,122,79,0.18)',
                  zIndex: 1
                }}
              />
            </Grid>

            {/* Right Panel: The Form */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ bgcolor: 'white', p: { xs: 5, md: 8 } }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: brandBlue }}>
                    Send Us a Message
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Please provide your details and requirements below.
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      required
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '20px',
                          bgcolor: '#f8fafc',
                          border: '1px solid rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '20px',
                          bgcolor: '#f8fafc',
                          border: '1px solid rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      required
                      type="email"
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '20px',
                          bgcolor: '#f8fafc',
                          border: '1px solid rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      required
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '20px',
                          bgcolor: '#f8fafc',
                          border: '1px solid rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      required
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '20px',
                          bgcolor: '#f8fafc',
                          border: '2px solid transparent',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Tell us about your requirements..."
                      required
                      variant="filled"
                      sx={{
                        '& .MuiFilledInput-root': {
                          borderRadius: '25px',
                          bgcolor: '#f8fafc',
                          border: '2px solid transparent',
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
                          '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
                          '&:before, &:after': { display: 'none' }
                        },
                        '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<Send size={20} />}
                  sx={{
                    py: 2.5,
                    borderRadius: '20px',
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    bgcolor: brandGreen,
                    boxShadow: '0 20px 40px rgba(15,122,79,0.3)',
                    '&:hover': { transform: 'translateY(-3px)', bgcolor: brandBlue }
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Industrial Projects Gallery Slider - BEAUTIFIED */}
      <Box sx={{ py: 12, bgcolor: softBlue, borderTop: '1px solid rgba(0,27,94,0.08)' }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: brandBlue, fontWeight: 800, mb: 6, letterSpacing: 3 }}>
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
              {[...projectGallery, ...projectGallery].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: 300, md: 450 },
                    height: 280,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 22px 44px rgba(0,27,94,0.14)',
                    border: '1px solid rgba(0,27,94,0.12)',
                    position: 'relative'
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(0,27,94,0.54) 0%, rgba(15,122,79,0.20) 55%, transparent 100%)`
                    }}
                  />
                </Box>
              ))}
            </MotionBox>

            {/* Soft gradient masks for the edges */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 200, background: `linear-gradient(90deg, ${softBlue} 10%, transparent 100%)`, zIndex: 2 }} />
            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 200, background: `linear-gradient(-90deg, ${softBlue} 10%, transparent 100%)`, zIndex: 2 }} />
          </Box>
        </Container>
      </Box>

      {/* CTA Bar above Footer */}
      <Box sx={{ bgcolor: brandBlue, background: `linear-gradient(135deg, ${brandBlue} 40%, ${brandGreenDark} 60%)`, py: 4 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'white', color: brandBlue, display: 'grid', placeItems: 'center', boxShadow: '0 10px 20px rgba(0,27,94,0.18)' }}>
                <MessageSquare size={30} />
              </Box>
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>
                For inquiry and quotation — <Link href="tel:+62778351831" color="inherit" underline="hover">+62-778-351-831</Link> / <Link href="tel:+6281267051658" color="inherit" underline="hover">+62 812-6705-1658</Link>
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1rem',
                bgcolor: brandBlue,
                background: `linear-gradient(135deg, ${brandBlue} 0%, #0c3f8f 100%)`,
                boxShadow: '0 16px 34px rgba(0,27,94,0.28)',
                '&:hover': {
                  bgcolor: '#00144a',
                  transform: 'translateY(-2px)'
                }
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
