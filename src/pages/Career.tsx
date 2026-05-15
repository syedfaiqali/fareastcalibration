import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, TextField, MenuItem, Avatar, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import {
  PhoneCall,
  Send,
  Upload,
  Star,
  Users,
  Trophy,
  Rocket,
  CheckCircle2
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }
};

const metrologyExpertise = [
  'Calibration Technician',
  'Technical Supervisor',
  'Instrumentation Engineer',
  'Technical Manager',
  'Validation Specialist',
  'Quality Executive'
];

const Career: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: '#fdfdfd', overflow: 'hidden' }}>
      <PageHeader
        title="Build Your Future in Metrology"
        subtitle="Join a trained and competent laboratory team serving calibration and testing customers across Batam and the surrounding region."
      />

      {/* 1. Why Join Section - STUNNING UI */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
        <Grid container spacing={10} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox {...fadeInUp}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 5 }}>
                    OUR CULTURE
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 2, lineHeight: 1.1, fontSize: { xs: '2.8rem', md: '3.8rem' } }}>
                    Our Employees are Our <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>
                      Biggest Assets
                      <Box sx={{ position: 'absolute', bottom: 8, left: 0, width: '100%', height: '8px', bgcolor: 'rgba(15,122,79,0.1)', zIndex: -1 }} />
                    </Box>
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8, fontSize: '1.25rem' }}>
                  PT. FAREAST CALIBRATION & TESTING SERVICES values our employees as our biggest assets and our advocates in reflecting our culture. We offer attractive career opportunities for passionate and competent professionals.
                </Typography>

                <Grid container spacing={4}>
                  {[
                    { icon: Trophy, title: 'Expert Mentorship', text: 'Learn from industry veterans in metrology.' },
                    { icon: Rocket, title: 'Modern Tools', text: 'Access to the latest calibration technology.' },
                    { icon: Users, title: 'Collaborative Environment', text: 'We believe in growing together as a team.' },
                    { icon: Star, title: 'Excellence Focused', text: 'Quality is our top priority in every task.' }
                  ].map((item, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6 }}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: '24px',
                          bgcolor: 'white',
                          border: '1px solid rgba(0,0,0,0.04)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                          height: '100%'
                        }}
                      >
                        <Stack spacing={2}>
                          <Box sx={{ color: 'primary.main', bgcolor: 'rgba(15,122,79,0.1)', p: 1.5, borderRadius: '14px', width: 'fit-content' }}>
                            <item.icon size={28} />
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900, color: 'secondary.main' }}>{item.title}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.6 }}>{item.text}</Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.21, 1.02, 0.47, 0.98] as any }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: -25,
                  background: 'linear-gradient(135deg, rgba(15,122,79,0.1) 0%, transparent 100%)',
                  borderRadius: '60px',
                  transform: 'rotate(3deg)',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                sx={{
                  width: '100%',
                  height: { xs: 450, md: 650 },
                  objectFit: 'cover',
                  borderRadius: '50px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 40px 80px rgba(15,122,79,0.2)'
                }}
              />
              <MotionPaper
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: [0.21, 1.02, 0.47, 0.98] as any }}
                sx={{
                  position: 'absolute',
                  bottom: 40,
                  left: -30,
                  p: 4,
                  borderRadius: '30px',
                  bgcolor: 'white',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                  zIndex: 2,
                  display: { xs: 'none', md: 'block' }
                }}
              >
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64 }}><Trophy size={32} /></Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main' }}>11+ Years</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>INDUSTRY LEADERSHIP</Typography>
                  </Box>
                </Stack>
              </MotionPaper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* 2. Career Invitation Section - CINEMATIC & ATTRACTIVE */}
      <Box sx={{ py: { xs: 15, md: 25 }, bgcolor: 'secondary.main', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <Box sx={{ position: 'absolute', top: '-10%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(15,122,79,0.15) 0%, transparent 70%)', filter: 'blur(120px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 900, letterSpacing: 6 }}>JOIN THE TEAM</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 3, lineHeight: 1.1, fontSize: { xs: '2.8rem', md: '4rem' } }}>
                      Our Employees are Our <Box component="span" sx={{ color: 'primary.light' }}>Biggest Assets</Box>
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, lineHeight: 1.8, fontSize: '1.25rem' }}>
                      At PT. Fareast Calibration & Testing Services, we value our people as advocates of our culture. We offer attractive career opportunities for passionate professionals ready to lead in metrology.
                    </Typography>
                  </Box>

                  <Paper sx={{ p: 4, borderRadius: '30px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <Stack spacing={3}>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.light' }}>Who We Are Looking For</Typography>
                      <Grid container spacing={2}>
                        {metrologyExpertise.map((item, i) => (
                          <Grid key={i} size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <CheckCircle2 size={18} color="#4fb37f" />
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>{item}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Stack>
                  </Paper>
                </Stack>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <MotionPaper
                {...fadeInUp}
                sx={{
                  p: { xs: 5, md: 8 },
                  borderRadius: '60px',
                  bgcolor: 'white',
                  color: 'secondary.main',
                  boxShadow: '0 50px 100px rgba(0,0,0,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'linear-gradient(135deg, rgba(15,122,79,0.1) 0%, transparent 100%)', borderRadius: '0 0 0 100%' }} />
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>Ready for a Challenge?</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      If you are keen on a rewarding career in metrology, we invite you to explore exciting opportunities at PT. Fareast Calibration.
                    </Typography>
                  </Box>

                  <Divider />

                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ p: 2, borderRadius: '15px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main' }}>
                        <Send size={24} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6, letterSpacing: 1 }}>EMAIL YOUR CV</Typography>
                        <Link href="mailto:fareastcalibration@gmail.com" color="inherit" underline="hover">
                          <Typography variant="h6" sx={{ fontWeight: 800 }}>fareastcalibration@gmail.com</Typography>
                        </Link>
                        <Link href="mailto:info@fareastcalibration.com" color="inherit" underline="hover">
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>info@fareastcalibration.com</Typography>
                        </Link>
                      </Box>
                    </Box>

                    <Typography variant="caption" sx={{ fontStyle: 'italic', color: 'text.secondary', mt: 1 }}>
                      * The information you provide will be kept strictly confidential.
                    </Typography>
                  </Stack>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    href="mailto:fareastcalibration@gmail.com"
                    sx={{
                      py: 2,
                      borderRadius: '20px',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      boxShadow: '0 15px 30px rgba(15,122,79,0.2)'
                    }}
                  >
                    Contact Recruitment
                  </Button>
                </Stack>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Application Form Section - SOPHISTICATED DESIGN */}
      <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }}>
        <Grid container spacing={10} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox {...fadeInUp}>
              <Stack spacing={5}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 4 }}>JOIN US</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 2 }}>Submit Your <Box component="span" sx={{ color: 'primary.main' }}>CV</Box></Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8 }}>
                  Ready to take the next step in your career? Fill out the form below, upload your CV, and our recruitment team will get in touch with you.
                </Typography>

                <Stack spacing={3}>
                  {[
                    'Highly competitive salary packages',
                    'Comprehensive training & development',
                    'Health & wellness benefits',
                    'Dynamic and innovative work culture'
                  ].map((benefit, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle2 size={24} color="#0f7a4f" />
                      <Typography variant="body1" sx={{ fontWeight: 700, color: 'secondary.main' }}>{benefit}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: 72, height: 72, borderRadius: '24px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                    <PhoneCall size={32} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 1 }}>RECRUITMENT HELPLINE</Typography>
                    <Link href="tel:+62778351831" color="inherit" underline="hover">
                      <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main' }}>+62-778351831</Typography>
                    </Link>
                  </Box>
                </Stack>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            {!submitted ? (
              <MotionPaper
                {...fadeInUp}
                sx={{
                  p: { xs: 5, md: 8 },
                  borderRadius: '60px',
                  bgcolor: 'white',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  position: 'relative'
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        fullWidth 
                        label="Full Name" 
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
                        label="Email Address" 
                        type="email" 
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
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        select 
                        fullWidth 
                        label="Designation" 
                        defaultValue="Calibration Engineer" 
                        variant="filled" 
                        slotProps={{
                          select: {
                            MenuProps: {
                              slotProps: {
                                paper: {
                                  sx: {
                                    borderRadius: '20px',
                                    mt: 1,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    '& .MuiMenuItem-root': {
                                      py: 1.5,
                                      px: 3,
                                      fontWeight: 600,
                                      '&:hover': { bgcolor: 'rgba(15,122,79,0.05)', color: 'primary.main' },
                                      '&.Mui-selected': { bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }}
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
                      >
                        {metrologyExpertise?.map((role) => (
                          <MenuItem key={role} value={role}>{role}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box
                        sx={{
                          p: 6,
                          border: '2px dashed rgba(15,122,79,0.3)',
                          borderRadius: '30px',
                          textAlign: 'center',
                          bgcolor: 'rgba(15,122,79,0.02)',
                          transition: '0.3s',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: 'rgba(15,122,79,0.05)', borderColor: 'primary.main' }
                        }}
                      >
                        <Upload size={48} color="#0f7a4f" style={{ marginBottom: '16px' }} />
                        <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main', mb: 1 }}>Upload Your CV / Resume</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Drag and drop your file here, or browse (Max 5MB)</Typography>
                        <input type="file" style={{ display: 'none' }} id="cv-upload-new" />
                        <label htmlFor="cv-upload-new">
                          <Button component="span" variant="contained" sx={{ mt: 3, borderRadius: '12px', fontWeight: 800, px: 4 }}>Choose File</Button>
                        </label>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        fullWidth 
                        multiline 
                        rows={4} 
                        label="Tell us about yourself" 
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
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<Send size={20} />}
                        sx={{ py: 2.5, borderRadius: '20px', fontWeight: 900, fontSize: '1.2rem', bgcolor: 'primary.main', boxShadow: '0 20px 40px rgba(15,122,79,0.3)', '&:hover': { transform: 'translateY(-3px)' } }}
                      >
                        Submit Application
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </MotionPaper>
            ) : (
              <MotionPaper
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                sx={{
                  p: 10,
                  borderRadius: '60px',
                  textAlign: 'center',
                  bgcolor: 'white',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.08)',
                  minHeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ width: 120, height: 120, bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', borderRadius: '50%', display: 'grid', placeItems: 'center', mb: 6 }}>
                  <CheckCircle2 size={80} />
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, color: 'secondary.main' }}>Application Sent!</Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, fontWeight: 400, maxWidth: 500 }}>
                  Thank you for your interest. Our HR team will review your application and get back to you shortly via email or phone.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => setSubmitted(false)}
                  sx={{ borderRadius: '15px', px: 6, py: 1.5, fontWeight: 900, border: '2px solid' }}
                >
                  Submit Another Application
                </Button>
              </MotionPaper>
            )}
          </Grid>
        </Grid>
      </Container>
      {/* 4. Contact Details Footer Section - BRAND THEME */}
      <Box sx={{ bgcolor: '#f4fbf7', py: 10 }}>
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: { xs: 5, md: 8 },
              borderRadius: '50px',
              bgcolor: 'white',
              boxShadow: '0 20px 50px rgba(15,122,79,0.05)',
              border: '1px solid rgba(15,122,79,0.05)'
            }}
          >
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main' }}>Office Address</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Tiban Raya Lestari, C/4 Sekupang<br />
                    Batam, Indonesia
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main' }}>Contact Info</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Call us: <Link href="tel:+62778351831" color="inherit" underline="hover">+62-778351831</Link><br />
                    Email: <Link href="mailto:sales@fareastcalibration.com" color="inherit" underline="hover">sales@fareastcalibration.com</Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main' }}>Connect With Us</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Facebook: <Link href="https://www.facebook.com/fareastcalibration/" target="_blank" color="inherit" underline="hover">facebook.com/fareastcalibr</Link><br />
                    Website: <Link href="https://www.fareastcalibration.com" target="_blank" color="inherit" underline="hover">www.fareastcalibration.com</Link>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Box sx={{ mt: 6, pt: 6, borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 800 }}>
                PT. FAREAST CALIBRATION & TESTING SERVICES
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Career;
