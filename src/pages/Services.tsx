import React from 'react';
import { Box, Chip, Container, Typography, Grid, Stack, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { serviceGroups, processSteps } from '../data/siteContent';
import { ArrowRight, BadgeCheck, Settings, ShieldCheck, Timer } from 'lucide-react';

const MotionPaper = motion(Paper);
const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';
const brandGreenDark = '#0d3f2b';
const softBlue = '#edf5ff';

const Services: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: softBlue,
        background:
          'linear-gradient(180deg, #edf5ff 0%, #f7fbff 34%, #f4fbf7 70%, #ffffff 100%)',
      }}
    >
      <PageHeader
        title="Calibration Services Built for Confidence"
        subtitle="Accredited calibration and testing support for teams that need dependable measurements, clear certificates, and responsive service without slowing down operations."
        breadcrumb="Services"
      />

      {/* Services Grid Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: { xs: '48px -18px auto -18px', md: '62px -52px auto -52px' },
            height: { xs: 240, md: 320 },
            opacity: 0.06,
            pointerEvents: 'none',
            backgroundImage: `radial-gradient(${brandBlue} 1px, transparent 1px)`,
            backgroundSize: '34px 34px',
          }}
        />
        <Stack spacing={1} sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 900, letterSpacing: 3 }}>
            SERVICE DOMAINS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue }}>
            One Stop <Box component="span" sx={{ color: brandGreen }}>Calibration</Box> & Testing Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto', lineHeight: 1.85, mt: 1 }}>
            Choose a service area below and send us your instrument details. We will help you confirm scope, lead time, documentation, and the right calibration route.
          </Typography>
        </Stack>

        <Grid container spacing={3.5} sx={{ position: 'relative', zIndex: 1, alignItems: 'stretch' }}>
          {serviceGroups.map((service, index) => {
            const Icon = service.icon;
            return (
              <Grid key={service.title} id={service.anchor} size={{ xs: 12, sm: 6, md: 4 }} sx={{ scrollMarginTop: 120 }}>
                <MotionPaper
                  whileHover={{ y: -10, boxShadow: '0 34px 80px rgba(0,27,94,0.18)' }}
                  sx={{
                    height: '100%',
                    minHeight: 520,
                    borderRadius: 2,
                    bgcolor: '#ffffff',
                    border: '1px solid rgba(0,27,94,0.12)',
                    boxShadow: '0 20px 54px rgba(0,27,94,0.10)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      background:
                        'linear-gradient(135deg, rgba(15,122,79,0.10) 0%, transparent 28%), linear-gradient(180deg, transparent 0%, rgba(237,245,255,0.72) 100%)',
                      opacity: 0.72,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: 168,
                      p: 3,
                      color: 'white',
                      overflow: 'hidden',
                      background:
                        index % 2 === 0
                          ? `linear-gradient(135deg, ${brandBlue} 0%, #08376f 48%, ${brandGreenDark} 100%)`
                          : `linear-gradient(135deg, ${brandGreenDark} 0%, ${brandGreen} 52%, ${brandBlue} 100%)`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.18,
                        background:
                          'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                      },
                    }}
                  >
                    <Icon
                      size={150}
                      strokeWidth={1.3}
                      style={{
                        position: 'absolute',
                        right: -28,
                        bottom: -34,
                        opacity: 0.13,
                      }}
                    />
                    <Stack spacing={2.5} sx={{ position: 'relative', zIndex: 1 }}>
                      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.72)', fontWeight: 900, letterSpacing: 2 }}>
                          SERVICE {String(index + 1).padStart(2, '0')}
                        </Typography>
                        <Box
                          sx={{
                            width: 54,
                            height: 54,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.12)',
                            border: '1px solid rgba(255,255,255,0.22)',
                            display: 'grid',
                            placeItems: 'center',
                            boxShadow: '0 18px 36px rgba(0,0,0,0.18)',
                          }}
                        >
                          <Icon size={28} />
                        </Box>
                      </Stack>
                      <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1.15, maxWidth: 250 }}>
                        {service.title}
                      </Typography>
                    </Stack>
                  </Box>

                  <Stack spacing={3} sx={{ p: { xs: 3, md: 3.5 }, position: 'relative', zIndex: 1, flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                      {service.summary}
                    </Typography>

                    <Stack spacing={1.5}>
                      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                        <Typography variant="caption" sx={{ fontWeight: 900, color: brandGreen, letterSpacing: 1.3 }}>
                          CORE CAPABILITIES
                        </Typography>
                        <Box sx={{ height: 1, flex: 1, bgcolor: 'rgba(0,27,94,0.10)' }} />
                      </Stack>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.items.map((item) => (
                          <Chip
                            key={item}
                            icon={<BadgeCheck size={15} />}
                            label={item}
                            size="small"
                            sx={{
                              maxWidth: '100%',
                              height: 'auto',
                              minHeight: 32,
                              borderRadius: 1.5,
                              bgcolor: 'rgba(15,122,79,0.08)',
                              border: '1px solid rgba(15,122,79,0.14)',
                              color: '#17352b',
                              fontWeight: 700,
                              '& .MuiChip-label': {
                                display: 'block',
                                whiteSpace: 'normal',
                                py: 0.6,
                                lineHeight: 1.35,
                              },
                              '& .MuiChip-icon': {
                                color: brandGreen,
                                ml: 1,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      pt: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Button
                      component="a"
                      href="mailto:fareastcalibration@gmail.com"
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowRight size={18} />}
                      sx={{
                        justifyContent: 'space-between',
                        py: 1.45,
                        px: 2.25,
                        borderRadius: 1.5,
                        fontWeight: 900,
                        bgcolor: brandBlue,
                        background: `linear-gradient(135deg, ${brandBlue} 0%, ${brandGreenDark} 100%)`,
                        boxShadow: '0 16px 34px rgba(0,27,94,0.18)',
                        '&:hover': {
                          bgcolor: brandGreenDark,
                          boxShadow: '0 20px 44px rgba(0,27,94,0.24)',
                        },
                      }}
                    >
                      Request this service
                    </Button>
                  </Box>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Workflow Section */}
      <Box
        sx={{
          color: 'white',
          py: { xs: 10, md: 18 },
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(circle at 12% 18%, rgba(79,179,127,0.24), transparent 30%),
            radial-gradient(circle at 86% 82%, rgba(0,27,94,0.34), transparent 32%),
            linear-gradient(135deg, ${brandBlue} 0%, #08376f 44%, ${brandGreenDark} 100%)
          `,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            background:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ color: '#8ce0b6', fontWeight: 900, letterSpacing: 3 }}>
                  OPERATIONAL EXCELLENCE
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 900 }}>How We Deliver Accuracy</Typography>
                <Typography variant="body1" sx={{ opacity: 0.82, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We make calibration easier to manage with clear enquiry handling, careful instrument inspection, quotation approval, controlled calibration, certificate issue, and delivery back to your team.
                </Typography>
                <Stack spacing={3} sx={{ mt: 4 }}>
                  {[
                    { icon: ShieldCheck, title: 'KAN Accredited', text: 'ISO/IEC 17025:2017 calibration services.' },
                    { icon: Timer, title: 'Lead Time Focused', text: 'Committed delivery within agreed lead time.' },
                    { icon: Settings, title: 'Lab and Onsite', text: 'In-lab and onsite calibration facilities available.' }
                  ].map((feat, i) => (
                    <Stack key={i} direction="row" spacing={3}>
                      <Box sx={{ color: '#8ce0b6' }}>
                        <feat.icon size={28} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{feat.title}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.72 }}>{feat.text}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {processSteps.map((step, index) => (
                  <Grid key={step.step} size={{ xs: 12, sm: 6 }}>
                    <MotionPaper
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      sx={{ 
                        p: { xs: 3.5, md: 4.5 },
                        height: '100%', 
                        bgcolor: 'rgba(255,255,255,0.07)', 
                        border: '1px solid rgba(255,255,255,0.14)', 
                        borderRadius: 4,
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 900, opacity: 0.14, lineHeight: 1, mb: -4 }}>
                        {step.step}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, position: 'relative' }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                        {step.text}
                      </Typography>
                    </MotionPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Paper 
          sx={{ 
            p: { xs: 5, md: 10 }, 
            borderRadius: { xs: 4, md: 6 },
            color: 'white', 
            position: 'relative', 
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${brandGreenDark} 0%, ${brandGreen} 48%, ${brandBlue} 100%)`,
            boxShadow: '0 34px 80px rgba(0,27,94,0.20)',
            border: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <Grid container spacing={6} sx={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
                Ready to Schedule Your <br />Calibration?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, maxWidth: 600 }}>
                Whether you need one instrument checked, onboard testing, or a full calibration schedule, our team is ready to help you move faster with confidence.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <Button 
                  component="a"
                  href="mailto:fareastcalibration@gmail.com"
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    py: 2.5,
                    borderRadius: '50px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    bgcolor: brandBlue,
                    background: `linear-gradient(135deg, ${brandBlue} 0%, #0c3f8f 100%)`,
                  }}
                >
                  Request a Quote
                </Button>
                <Button 
                  component="a"
                  href="tel:+62778351831"
                  variant="outlined" 
                  color="inherit" 
                  size="large" 
                  sx={{ py: 2.5, borderRadius: '50px', fontWeight: 800, borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  Call Service Desk
                </Button>
              </Stack>
            </Grid>
          </Grid>
          {/* Decorative Circle */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '-50%', 
              right: '-20%', 
              width: 600, 
              height: 600, 
              borderRadius: '50%', 
              bgcolor: 'rgba(255,255,255,0.05)' 
            }} 
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default Services;
