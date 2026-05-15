import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { ShieldCheck, FileCheck, Award, Download, ArrowRight, CheckCircle2, FlaskConical, Scale, ThermometerSun, Zap } from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Accreditation: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <PageHeader
        title="Accreditation & Standards"
        subtitle="KAN accredited calibration services in accordance with ISO/IEC 17025:2017, supported by ISO 9001:2015 certified management practices."
      />

      {/* Hero / Overview Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={4}>
                <Chip 
                  label="ISO/IEC 17025:2017 COMPLIANT" 
                  sx={{ width: 'fit-content', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', fontWeight: 800, letterSpacing: 1 }} 
                />
                <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1, color: 'secondary.main' }}>
                  A Commitment to <Box component="span" sx={{ color: 'primary.main' }}>Unrivaled Quality</Box>
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 400 }}>
                  PT Fareast Calibration and Testing Services is accredited by KAN (Komite Akreditasi Nasional) in accordance with ISO/IEC 17025:2017 for calibration services.
                </Typography>
                
                <Stack spacing={2.5}>
                  {[
                    "Demonstrated technical competence for specific tests & calibrations",
                    "Rigorous internal quality management systems",
                    "Continuous participation in Proficiency Testing (PT)",
                    "ISO 9001:2015 certified management system"
                  ].map((text) => (
                    <Stack key={text} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <CheckCircle2 size={24} color="#0f7a4f" />
                      <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>{text}</Typography>
                    </Stack>
                  ))}
                </Stack>
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
              <Paper
                sx={{
                  p: 4,
                  borderRadius: '40px',
                  bgcolor: '#f4fbf7',
                  border: '1px solid rgba(15,122,79,0.1)',
                  boxShadow: '0 40px 80px rgba(15,122,79,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center', py: 4 }}>
                  <Box sx={{ width: 100, height: 100, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'grid', placeItems: 'center', mb: 2 }}>
                    <ShieldCheck size={50} />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main' }}>ISO/IEC 17025</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>LABORATORY ACCREDITATION</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 300 }}>
                    Our laboratory operations follow recognized international standards to deliver repeatable, accurate, and defensible calibration results.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<Download size={18} />}
                    sx={{ borderRadius: '50px', px: 4, py: 1.5, fontWeight: 700 }}
                  >
                    Download Certificate
                  </Button>
                </Stack>
                {/* Decorative Pattern */}
                <Box sx={{ position: 'absolute', bottom: -50, right: -50, opacity: 0.05, transform: 'rotate(-15deg)' }}>
                  <Award size={250} />
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Purpose & Standards Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 10, md: 15 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                  THE PURPOSE
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900 }}>Why Accreditation Matters to You</Typography>
                <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                  Working with an accredited laboratory isn't just about compliance; it's about mitigating risk. Accurate measurements are critical to safety, quality, and your bottom line.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {[
                  { title: 'Technical Quality', text: 'Ensures the laboratory meets specific technical and quality standards for the accuracy of measurement processes.' },
                  { title: 'Traceable Results', text: 'Confirms that the equipment and procedures used can provide traceable and reliable results globally.' },
                  { title: 'Audit Confidence', text: 'Gives clients absolute confidence that measurements are consistent and adhere to national/international standards.' }
                ].map((item) => (
                  <Grid key={item.title} size={{ xs: 12 }}>
                    <MotionBox
                      whileHover={{ x: 10 }}
                      sx={{ p: 4, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                        <Box sx={{ p: 1.5, bgcolor: 'rgba(15,122,79,0.2)', borderRadius: '12px', color: 'primary.main' }}>
                          <FileCheck size={24} />
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                          <Typography variant="body2" sx={{ opacity: 0.6, lineHeight: 1.8 }}>{item.text}</Typography>
                        </Box>
                      </Stack>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Accreditation Scope Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 20 } }}>
        <Stack spacing={1} sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
            SCOPE OF ACCREDITATION
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main' }}>
            Our Technical Competence
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {[
            { title: 'Mechanical', icon: Scale, text: 'Precision mass, balance, and volume calibration.' },
            { title: 'Thermal', icon: ThermometerSun, text: 'Advanced temperature and humidity mapping.' },
            { title: 'Electrical', icon: Zap, text: 'Electro-technical source and measure verification.' },
            { title: 'Analytical', icon: FlaskConical, text: 'Analytical and general instrument calibration.' }
          ].map((scope) => (
            <Grid key={scope.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionPaper
                whileHover={{ y: -15, boxShadow: '0 30px 60px rgba(15,122,79,0.1)' }}
                sx={{
                  p: 5,
                  height: '100%',
                  borderRadius: '30px',
                  bgcolor: 'white',
                  border: '1px solid rgba(15,122,79,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ width: 80, height: 80, borderRadius: '24px', bgcolor: 'rgba(15,122,79,0.08)', color: 'primary.main', display: 'grid', placeItems: 'center', mb: 3 }}>
                  <scope.icon size={36} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: 'secondary.main' }}>{scope.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                  {scope.text}
                </Typography>
                <Button endIcon={<ArrowRight size={16} />} sx={{ fontWeight: 700, color: 'primary.main' }}>
                  View Scope
                </Button>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certification Download Section */}
      <Box sx={{ bgcolor: '#f4fbf7', py: { xs: 10, md: 15 } }}>
        <Container maxWidth="md">
          <Paper 
            sx={{ 
              p: { xs: 5, md: 10 }, 
              borderRadius: '50px', 
              textAlign: 'center', 
              bgcolor: 'white',
              boxShadow: '0 40px 80px rgba(15,122,79,0.08)',
              border: '1px solid rgba(15,122,79,0.05)'
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main', mb: 3 }}>
              Download Our Credentials
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, lineHeight: 1.8 }}>
              Need our accreditation certificates for your internal audit or vendor qualification? Access the latest versions of our certificates and scope documents here.
            </Typography>
            
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<Download size={20} />}
                  sx={{ py: 2, borderRadius: '15px', fontWeight: 800, fontSize: '1rem', bgcolor: 'primary.main' }}
                >
                  KAN Accreditation
                </Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<Download size={20} />}
                  sx={{ py: 2, borderRadius: '15px', fontWeight: 800, fontSize: '1rem', bgcolor: 'secondary.main' }}
                >
                  ISO 9001 Certificate
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Accreditation;
