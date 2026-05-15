import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from '@mui/material';
import PageHeader from '../components/PageHeader';
import { Mail, MapPinned, PhoneCall, Send, CheckCircle2, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <PageHeader
        title="Get in Touch"
        subtitle="For instrument calibration, onboard testing, pickup, delivery, or quotation requests, our Batam team is ready to help."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={8}>
          {/* Left Column: Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={6}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                  DIRECT CHANNELS
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1, lineHeight: 1.1 }}>
                  Contact <Box component="span" sx={{ color: 'primary.main' }}>Fareast</Box>
                </Typography>
              </Box>

              <Stack spacing={4}>
                {[
                  { icon: PhoneCall, title: 'Call Our Service Desk', text: '+62-778-351-831 / +62 812-6705-1658', sub: 'Contact person: Andi Sahabinnu' },
                  { icon: Mail, title: 'Email Technical Support', text: 'fareastcalibration@gmail.com', sub: 'Also: andi@fareastcalibration.com, mak@fareastcalibration.com' },
                  { icon: MapPinned, title: 'Visit Our Laboratory', text: 'Tiban Raya Lestari, Block C/4', sub: 'Sekupang, Batam, Indonesia' }
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={3}>
                    <Box sx={{ width: 60, height: 60, borderRadius: '20px', bgcolor: 'rgba(15,122,79,0.08)', color: 'primary.main', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <item.icon size={28} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main' }}>{item.title}</Typography>
                      <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 700 }}>{item.text}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>{item.sub}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Paper sx={{ p: 4, borderRadius: '30px', bgcolor: 'secondary.main', color: 'white' }}>
                <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center' }}>
                  <Clock size={32} color="#0f7a4f" />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Need urgent calibration?</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Express calibration and onsite service are available without additional express charges.</Typography>
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
                  borderRadius: '50px',
                  bgcolor: 'white',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main', mb: 4 }}>
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
                        sx={{ py: 2.5, borderRadius: '20px', fontWeight: 900, fontSize: '1.2rem', bgcolor: 'primary.main', boxShadow: '0 20px 40px rgba(15,122,79,0.3)', '&:hover': { transform: 'translateY(-3px)' } }}
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
                  borderRadius: '50px',
                  textAlign: 'center',
                  bgcolor: 'white',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
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
                <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main', mb: 2 }}>Enquiry Sent!</Typography>
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
      <Box sx={{ pb: { xs: 10, md: 15 } }}>
        <Container maxWidth="lg">
          <Paper 
            elevation={0}
            sx={{ 
              borderRadius: '60px', 
              overflow: 'hidden', 
              height: { xs: 400, md: 600 },
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
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
