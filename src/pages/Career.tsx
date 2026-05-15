import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, TextField, MenuItem, Avatar, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { 
  PhoneCall, 
  Send, 
  Upload, 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star,
  Users,
  Trophy,
  Rocket,
  CheckCircle2
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }
};

const jobRoles = [
  { 
    title: 'Senior Calibration Engineer', 
    type: 'Full-time', 
    location: 'Batam Lab / Onsite', 
    experience: '5+ Years',
    desc: 'Expertise in thermal and electrical calibration preferred.'
  },
  { 
    title: 'Technical Assistant', 
    type: 'Full-time', 
    location: 'Batam Lab', 
    experience: '1-2 Years',
    desc: 'Support senior engineers in daily laboratory operations.'
  },
  { 
    title: 'Sales & Marketing Executive', 
    type: 'Full-time', 
    location: 'Batam Office', 
    experience: '2-3 Years',
    desc: 'Drive business growth and maintain client relations.'
  }
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
                    Precision is in Our <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>
                      DNA
                      <Box sx={{ position: 'absolute', bottom: 8, left: 0, width: '100%', height: '8px', bgcolor: 'rgba(15,122,79,0.1)', zIndex: -1 }} />
                    </Box>
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8, fontSize: '1.25rem' }}>
                  Working at PT. Fareast Calibration means handling real-world technical challenges. You'll work with high-end instruments and a team that values accuracy above all else.
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
              transition={{ duration: 1 }}
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
                transition={{ delay: 0.5 }}
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
                <Stack direction="row" spacing={3} alignItems="center">
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

      {/* 2. Job Openings Section - PREMIUM CARDS */}
      <Box sx={{ py: { xs: 12, md: 20 }, bgcolor: 'secondary.main', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(15,122,79,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 900, letterSpacing: 6 }}>OPPORTUNITIES</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900 }}>Current <Box component="span" sx={{ color: 'primary.light' }}>Openings</Box></Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: 600, mx: 'auto' }}>
              We are always looking for talented individuals to join our growing team. Explore our current vacancies below.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {jobRoles.map((job, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <MotionPaper
                  whileHover={{ y: -15, scale: 1.02 }}
                  sx={{
                    p: 5,
                    height: '100%',
                    borderRadius: '40px',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease'
                  }}
                >
                  <Stack spacing={3} flexGrow={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ p: 2, borderRadius: '20px', bgcolor: 'rgba(79, 179, 127, 0.1)', color: 'primary.light' }}>
                        <Briefcase size={32} />
                      </Box>
                      <Chip label={job.type} sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 900, px: 1 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>{job.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{job.desc}</Typography>
                    </Box>
                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'rgba(255,255,255,0.8)' }}>
                        <MapPin size={18} />
                        <Typography variant="body2">{job.location}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'rgba(255,255,255,0.8)' }}>
                        <Clock size={18} />
                        <Typography variant="body2">{job.experience}</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    sx={{ 
                      mt: 4, 
                      borderRadius: '15px', 
                      borderColor: 'primary.light', 
                      color: 'primary.light',
                      py: 1.5,
                      fontWeight: 900,
                      '&:hover': { bgcolor: 'primary.main', borderColor: 'primary.main', color: 'white' }
                    }}
                    endIcon={<ChevronRight size={20} />}
                  >
                    Apply Now
                  </Button>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Application Form Section - SOPHISTICATED DESIGN */}
      <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }}>
        <Grid container spacing={10} alignItems="center">
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

                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ width: 72, height: 72, borderRadius: '24px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                    <PhoneCall size={32} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 1 }}>RECRUITMENT HELPLINE</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main' }}>+62 812-6705-1658</Typography>
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
                      <TextField fullWidth label="Full Name" required variant="filled" sx={{ '& .MuiFilledInput-root': { borderRadius: '15px', bgcolor: '#f8fafc' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" type="email" required variant="filled" sx={{ '& .MuiFilledInput-root': { borderRadius: '15px', bgcolor: '#f8fafc' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone Number" required variant="filled" sx={{ '& .MuiFilledInput-root': { borderRadius: '15px', bgcolor: '#f8fafc' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField select fullWidth label="Designation" defaultValue="Calibration Engineer" variant="filled" sx={{ '& .MuiFilledInput-root': { borderRadius: '15px', bgcolor: '#f8fafc' } }}>
                        {['Calibration Engineer', 'Validation Specialist', 'Technical Manager', 'Sales Executive'].map((role) => (
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
                      <TextField fullWidth multiline rows={4} label="Tell us about yourself" variant="filled" sx={{ '& .MuiFilledInput-root': { borderRadius: '20px', bgcolor: '#f8fafc' } }} />
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
    </Box>
  );
};

export default Career;
