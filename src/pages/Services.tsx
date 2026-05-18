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

const serviceVisuals = [
  'https://images.unsplash.com/photo-1565043589221-1bb8b8f2e3d1?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
];

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

        <Stack spacing={{ xs: 5, md: 7 }} sx={{ position: 'relative', zIndex: 1 }}>
          {serviceGroups.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <MotionPaper
                key={service.title}
                id={service.anchor}
                initial={{ opacity: 0, y: 42, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                sx={{
                  scrollMarginTop: 120,
                  borderRadius: { xs: 3, md: 5 },
                  overflow: 'hidden',
                  bgcolor: '#ffffff',
                  border: '1px solid rgba(0,27,94,0.12)',
                  boxShadow: '0 28px 80px rgba(0,27,94,0.14)',
                  position: 'relative',
                  '&:hover .service-image': {
                    transform: 'scale(1.08)',
                  },
                  '&:hover .service-orbit': {
                    transform: 'rotate(20deg) scale(1.04)',
                  },
                }}
              >
                <Grid container sx={{ minHeight: { xs: 'auto', md: 520 } }}>
                  <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
                    <Box
                      sx={{
                        minHeight: { xs: 300, md: 520 },
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: brandBlue,
                      }}
                    >
                      <Box
                        className="service-image"
                        component="img"
                        src={serviceVisuals[index % serviceVisuals.length]}
                        alt={service.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          minHeight: { xs: 300, md: 520 },
                          objectFit: 'cover',
                          transition: 'transform 900ms ease',
                          filter: 'saturate(0.94) contrast(1.04)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(135deg, rgba(0,27,94,0.78), rgba(15,122,79,0.30) 52%, rgba(13,63,43,0.82))',
                        }}
                      />
                      <Box
                        className="service-orbit"
                        sx={{
                          position: 'absolute',
                          right: reverse ? 'auto' : -70,
                          left: reverse ? -70 : 'auto',
                          bottom: -70,
                          width: 260,
                          height: 260,
                          borderRadius: '50%',
                          border: '1px dashed rgba(255,255,255,0.34)',
                          boxShadow: '0 0 0 28px rgba(255,255,255,0.06), 0 0 0 56px rgba(140,224,182,0.06)',
                          transition: 'transform 900ms ease',
                        }}
                      />
                      <Icon
                        size={210}
                        strokeWidth={1}
                        style={{
                          position: 'absolute',
                          right: reverse ? 'auto' : 22,
                          left: reverse ? 22 : 'auto',
                          bottom: 18,
                          opacity: 0.2,
                          color: 'white',
                        }}
                      />
                      <Stack
                        spacing={1}
                        sx={{
                          position: 'absolute',
                          left: 28,
                          right: 28,
                          top: 28,
                          color: 'white',
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 900, letterSpacing: 2.4, color: '#8ce0b6' }}>
                          SERVICE {String(index + 1).padStart(2, '0')}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.05, maxWidth: 330 }}>
                          {service.title}
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
                    <Stack
                      spacing={3}
                      sx={{
                        height: '100%',
                        justifyContent: 'center',
                        p: { xs: 3.5, md: 5.5 },
                        background:
                          reverse
                            ? 'linear-gradient(135deg, #ffffff 0%, #f4fbf7 52%, #edf5ff 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #edf5ff 52%, #f4fbf7 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          right: -70,
                          top: -70,
                          width: 220,
                          height: 220,
                          borderRadius: '50%',
                          bgcolor: 'rgba(15,122,79,0.07)',
                        }}
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 92 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.18 }}
                        style={{
                          height: 5,
                          borderRadius: 999,
                          background: `linear-gradient(90deg, ${brandGreen}, ${brandBlue})`,
                        }}
                      />
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 900, letterSpacing: 2.4 }}>
                          Premium Calibration Support
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{
                            mt: 1,
                            color: brandBlue,
                            fontWeight: 900,
                            lineHeight: 1.08,
                            maxWidth: 720,
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 760, position: 'relative', zIndex: 1 }}>
                        {service.summary}
                      </Typography>

                      <Stack spacing={1.5} sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 900, color: brandGreen, letterSpacing: 1.3 }}>
                            CAPABILITIES
                          </Typography>
                          <Box sx={{ height: 1, flex: 1, bgcolor: 'rgba(0,27,94,0.12)' }} />
                        </Stack>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {service.items.map((item, itemIndex) => (
                            <Box
                              key={item}
                              component={motion.div}
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: Math.min(itemIndex * 0.025, 0.18) }}
                            >
                              <Chip
                                icon={<BadgeCheck size={15} />}
                                label={item}
                                size="small"
                                sx={{
                                  maxWidth: '100%',
                                  height: 'auto',
                                  minHeight: 34,
                                  borderRadius: 1.5,
                                  bgcolor: 'rgba(15,122,79,0.08)',
                                  border: '1px solid rgba(15,122,79,0.14)',
                                  color: '#17352b',
                                  fontWeight: 800,
                                  '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                    py: 0.65,
                                    lineHeight: 1.35,
                                  },
                                  '& .MuiChip-icon': {
                                    color: brandGreen,
                                    ml: 1,
                                  },
                                }}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Stack>

                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1, position: 'relative', zIndex: 1 }}>
                        <Button
                          component="a"
                          href="mailto:fareastcalibration@gmail.com"
                          variant="contained"
                          endIcon={<ArrowRight size={18} />}
                          sx={{
                            py: 1.55,
                            px: 3,
                            borderRadius: 1.5,
                            fontWeight: 900,
                            bgcolor: brandBlue,
                            background: `linear-gradient(135deg, ${brandBlue} 0%, ${brandGreenDark} 100%)`,
                            boxShadow: '0 16px 34px rgba(0,27,94,0.18)',
                          }}
                        >
                          Request this service
                        </Button>
                        <Button
                          component="a"
                          href="tel:+62778351831"
                          variant="outlined"
                          sx={{
                            py: 1.55,
                            px: 3,
                            borderRadius: 1.5,
                            fontWeight: 900,
                            color: brandBlue,
                            borderColor: 'rgba(0,27,94,0.20)',
                            '&:hover': {
                              borderColor: brandGreen,
                              bgcolor: 'rgba(15,122,79,0.06)',
                            },
                          }}
                        >
                          Talk to specialist
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </MotionPaper>
            );
          })}
        </Stack>
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
