import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack, Link } from '@mui/material';
import PageHeader from '../components/PageHeader';
import { Mail, MapPinned, PhoneCall, Send, CheckCircle2, Clock } from 'lucide-react';

const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';
const brandGreenDark = '#0d3f2b';
const softBlue = '#edf5ff';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { 
      icon: PhoneCall, 
      title: 'Call Our Service Desk', 
      text: (
        <>
          <Link href="tel:+62778351831" color="inherit" underline="hover">+62 778 351 831</Link>
          {' / '}
          <Link href="tel:+6281267051658" color="inherit" underline="hover">+62 812 6705 1658</Link>
          {' / '}
          <Link href="tel:+6282286881953" color="inherit" underline="hover">+62 822 8688 1953</Link>
        </>
      ), 
      sub: '' 
    },
    { 
      icon: Mail, 
      title: 'Email Technical Support', 
      text: (
        <Link href="mailto:fareastcalibration@gmail.com" color="inherit" underline="hover">fareastcalibration@gmail.com</Link>
      ), 
      sub: (
        <>
          Also: {' '}
          <Link href="mailto:andi@fareastcalibration.com" color="inherit" underline="hover">andi@fareastcalibration.com</Link>
          , {' '}
          <Link href="mailto:mak@fareastcalibration.com" color="inherit" underline="hover">mak@fareastcalibration.com</Link>
        </>
      )
    },
    { 
      icon: MapPinned, 
      title: 'Visit Our Laboratory', 
      text: 'Tiban Raya Lestari, Block C/4', 
      sub: 'Sekupang, Batam, Indonesia' 
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: softBlue,
        background:
          'linear-gradient(180deg, #edf5ff 0%, #ffffff 34%, #f4fbf7 72%, #ffffff 100%)',
      }}
    >
      <PageHeader
        title="Get in Touch"
        subtitle="For instrument calibration, onboard testing, pickup, delivery, or quotation requests, our Batam team is ready to help."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 60,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(15,122,79,0.12), transparent 68%)',
            pointerEvents: 'none',
          }}
        />
        <Grid container spacing={8}>
          {/* Left Column: Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={6}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                  DIRECT CHANNELS
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, mt: 1, lineHeight: 1.1 }}>
                  Contact <Box component="span" sx={{ color: brandGreen }}>Fareast</Box>
                </Typography>
              </Box>

              <Stack spacing={4}>
                {contactItems.map((item, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={3}
                    sx={{
                      p: 2.5,
                      borderRadius: 4,
                      bgcolor: 'rgba(255,255,255,0.78)',
                      border: '1px solid rgba(0,27,94,0.08)',
                      boxShadow: '0 18px 45px rgba(0,27,94,0.06)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(6px)',
                        boxShadow: '0 24px 56px rgba(0,27,94,0.12)',
                        borderColor: 'rgba(15,122,79,0.24)',
                      },
                    }}
                  >
                    <Box sx={{ width: 60, height: 60, borderRadius: 3, bgcolor: i % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.1)', color: i % 2 ? brandBlue : brandGreen, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <item.icon size={28} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: brandBlue }}>{item.title}</Typography>
                      <Typography variant="body1" sx={{ color: brandGreen, fontWeight: 700 }}>{item.text}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>{item.sub}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Paper
                sx={{
                  p: 4,
                  borderRadius: 5,
                  color: 'white',
                  background: `linear-gradient(135deg, ${brandBlue} 0%, ${brandGreenDark} 100%)`,
                  boxShadow: '0 24px 56px rgba(0,27,94,0.18)',
                }}
              >
                <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center' }}>
                  <Clock size={32} color="#8ce0b6" />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Need urgent calibration?</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Express calibration and onsite service are available with additional express charges.</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            {!submitted ? (
              <Paper
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 6,
                  bgcolor: 'white',
                  boxShadow: '0 40px 100px rgba(0,27,94,0.10)',
                  border: '1px solid rgba(0,27,94,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: `linear-gradient(90deg, ${brandGreen}, ${brandBlue})`,
                  },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 900, color: brandBlue, mb: 4 }}>
                  Send an Enquiry
                </Typography>
                <form onSubmit={handleSubmit}>
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
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large" 
                        fullWidth 
                        endIcon={<Send size={20} />}
                        sx={{ py: 2.5, borderRadius: '20px', fontWeight: 900, fontSize: '1.2rem', bgcolor: brandGreen, boxShadow: '0 20px 40px rgba(15,122,79,0.3)', '&:hover': { transform: 'translateY(-3px)', bgcolor: brandBlue } }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            ) : (
              <Paper
                sx={{
                  p: 8,
                  borderRadius: 6,
                  textAlign: 'center',
                  bgcolor: 'white',
                  boxShadow: '0 40px 100px rgba(0,27,94,0.10)',
                  minHeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ width: 120, height: 120, bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', borderRadius: '50%', display: 'grid', placeItems: 'center', mb: 4 }}>
                  <CheckCircle2 size={70} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 900, color: brandBlue, mb: 2 }}>Enquiry Sent!</Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 450, mb: 4 }}>
                  We've received your message. A technical specialist will review your request and get back to you shortly.
                </Typography>
                <Button variant="outlined" onClick={() => setSubmitted(false)} sx={{ borderRadius: '50px', px: 6 }}>
                  Send Another Message
                </Button>
              </Paper>
            )}
          </Grid>

        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ pb: { xs: 10, md: 15 }, bgcolor: 'transparent' }}>
        <Container maxWidth="lg">
          <Paper 
            elevation={0}
            sx={{ 
              borderRadius: 6, 
              overflow: 'hidden', 
              height: { xs: 400, md: 600 },
              border: '8px solid white',
              boxShadow: '0 40px 90px rgba(0,27,94,0.14)',
              position: 'relative'
            }}
          >
            <iframe
              title="PT. Fareast Calibration & Testing Services Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=PT.%20Fareast%20Calibration%20%26%20Testing%20Services%20Batam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
            />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
