import React from 'react';
import { Box, Container, Typography, Grid, Stack, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { serviceGroups, processSteps } from '../data/siteContent';
import { ArrowRight, BadgeCheck, Settings, ShieldCheck, Timer } from 'lucide-react';

const MotionPaper = motion(Paper);

const Services: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <PageHeader
        title="Our Technical Expertise"
        subtitle="Comprehensive calibration and validation solutions designed for high-precision industries. We bridge the gap between measurement and certainty."
      />

      {/* Services Grid Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Stack spacing={1} sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
            SERVICE DOMAINS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main' }}>
            Precision Across Every Scale
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {serviceGroups.map((service) => {
            const Icon = service.icon;
            return (
              <Grid key={service.title} id={service.anchor} size={{ xs: 12, sm: 6, md: 4 }} sx={{ scrollMarginTop: 120 }}>
                <MotionPaper
                  whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(15,122,79,0.1)' }}
                  sx={{
                    p: 5,
                    height: '100%',
                    borderRadius: '40px',
                    bgcolor: 'white',
                    border: '1px solid rgba(15,122,79,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Stack spacing={4}>
                    <Box sx={{ width: 70, height: 70, borderRadius: '24px', bgcolor: 'rgba(15,122,79,0.08)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                      <Icon size={32} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main', mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                        {service.summary}
                      </Typography>
                    </Box>
                    
                    <Stack spacing={1.5}>
                      <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1 }}>CORE CAPABILITIES</Typography>
                      {service.items.map((item) => (
                        <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                          <BadgeCheck size={18} color="#0f7a4f" />
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'secondary.main' }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                  
                  <Button 
                    variant="text" 
                    color="primary" 
                    endIcon={<ArrowRight size={18} />} 
                    sx={{ mt: 4, alignSelf: 'flex-start', fontWeight: 800, p: 0 }}
                  >
                    Request Service
                  </Button>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Workflow Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 10, md: 20 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                  OPERATIONAL EXCELLENCE
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 900 }}>How We Deliver Accuracy</Typography>
                <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Our workflow is optimized for industrial speed without compromising the rigorous standards of metrology.
                </Typography>
                <Stack spacing={3} sx={{ mt: 4 }}>
                  {[
                    { icon: ShieldCheck, title: 'Compliance Driven', text: 'ISO/IEC 17025 aligned documentation.' },
                    { icon: Timer, title: 'Rapid Turnaround', text: 'Optimized logistics for minimal downtime.' },
                    { icon: Settings, title: 'Tailored Scope', text: 'Customized to your specific tolerances.' }
                  ].map((feat, i) => (
                    <Stack key={i} direction="row" spacing={3}>
                      <Box sx={{ color: 'primary.main' }}>
                        <feat.icon size={28} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{feat.title}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>{feat.text}</Typography>
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
                        p: 5, 
                        height: '100%', 
                        bgcolor: 'rgba(255,255,255,0.05)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '30px',
                        color: 'white'
                      }}
                    >
                      <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 900, opacity: 0.1, lineHeight: 1, mb: -4 }}>
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
            borderRadius: '60px', 
            bgcolor: 'primary.main', 
            color: 'white', 
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(15,122,79,0.3)'
          }}
        >
          <Grid container spacing={6} sx={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
                Ready to Establish Your <br />Calibration Schedule?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, maxWidth: 600 }}>
                Whether you need a single instrument check or an annual service contract for an entire plant, our engineers are ready.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  endIcon={<ArrowRight size={20} />}
                  sx={{ py: 2.5, borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem' }}
                >
                  Request a Quote
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large" 
                  sx={{ py: 2.5, borderRadius: '50px', fontWeight: 800, borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  Download Scope
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
