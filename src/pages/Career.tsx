import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, TextField, MenuItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { PhoneCall, Send, Upload, ShieldCheck, Zap, Heart } from 'lucide-react';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const Career: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <PageHeader
        title="Build Your Future in Metrology"
        subtitle="Join a team of expert engineers dedicated to technical precision. At Fareast Calibration, we don't just measure; we empower industries with confidence."
      />

      {/* Why Join Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                    OUR CULTURE
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1, lineHeight: 1.1 }}>
                    Precision is in Our <Box component="span" sx={{ color: 'primary.main' }}>DNA</Box>
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8 }}>
                  Working at Fareast Calibration means handling real-world technical challenges. You'll work with high-end instruments, sophisticated processes, and a team that values accuracy above all else.
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { icon: ShieldCheck, title: 'Expert Mentorship', text: 'Learn from industry veterans in metrology.' },
                    { icon: Zap, title: 'Modern Tools', text: 'Access to the latest calibration technology.' },
                    { icon: Heart, title: 'Work-Life Balance', text: 'We respect your time and operational focus.' }
                  ].map((item, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6 }}>
                      <Stack direction="row" spacing={2}>
                        <Box sx={{ color: 'primary.main' }}>
                          <item.icon size={28} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'secondary.main' }}>{item.title}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>{item.text}</Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </MotionBox>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{ position: 'relative', height: { xs: 300, md: 500 }, borderRadius: '40px', overflow: 'hidden' }}
            >
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,63,43,0.4), transparent)' }} />
              <Paper 
                sx={{ 
                  position: 'absolute', 
                  bottom: 30, 
                  left: 30, 
                  p: 3, 
                  borderRadius: '24px', 
                  bgcolor: 'white',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main' }}>11+ Years</Typography>
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>Of Engineering Excellence</Typography>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>



      {/* Application Form Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 20 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main' }}>Apply Now</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Ready to take the next step in your career? Fill out the form below, upload your CV, and our recruitment team will get in touch.
              </Typography>
              <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'grid', placeItems: 'center' }}>
                  <PhoneCall size={28} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>Recruitment Helpline</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main' }}>+91 98109 77012</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            {!submitted ? (
              <Paper
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: '40px',
                  bgcolor: 'white',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Full Name" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" type="email" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone Number" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField select fullWidth label="Designation" defaultValue="Calibration Engineer" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}>
                        {['Calibration Engineer', 'Validation Specialist', 'Technical Manager', 'Sales Executive'].map((role) => (
                          <MenuItem key={role} value={role}>{role}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box 
                        sx={{ 
                          p: 4, 
                          border: '2px dashed rgba(15,122,79,0.2)', 
                          borderRadius: '20px', 
                          textAlign: 'center',
                          bgcolor: '#f8fafc',
                          transition: 'all 0.3s',
                          '&:hover': { bgcolor: 'rgba(15,122,79,0.05)', borderColor: 'primary.main' }
                        }}
                      >
                        <Upload size={32} color="#0f7a4f" style={{ marginBottom: '12px' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Upload Your CV / Resume</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>PDF or Word files only (Max 5MB)</Typography>
                        <input type="file" style={{ display: 'none' }} id="cv-upload" />
                        <label htmlFor="cv-upload">
                          <Button component="span" sx={{ mt: 2, textTransform: 'none', fontWeight: 800 }}>Choose File</Button>
                        </label>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth multiline rows={4} label="Cover Letter / Message" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        type="submit" 
                        fullWidth 
                        variant="contained" 
                        size="large" 
                        endIcon={<Send size={20} />}
                        sx={{ py: 2, borderRadius: '15px', fontWeight: 800, fontSize: '1.1rem', bgcolor: 'primary.main' }}
                      >
                        Submit Application
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            ) : (
              <Paper
                sx={{
                  p: 8,
                  borderRadius: '40px',
                  textAlign: 'center',
                  bgcolor: 'white',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  minHeight: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ width: 100, height: 100, bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', borderRadius: '50%', display: 'grid', placeItems: 'center', mb: 4 }}>
                  <ShieldCheck size={60} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>Application Received</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>Thank you for your interest. Our HR team will review your application and get back to you shortly.</Typography>
                <Button variant="outlined" onClick={() => setSubmitted(false)}>Submit Another Application</Button>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
};

export default Career;
