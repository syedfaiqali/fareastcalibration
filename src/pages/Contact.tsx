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
                      <TextField fullWidth label="Your Name" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Company Name" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" required type="email" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone Number" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Subject" required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth multiline rows={5} label="Tell us about your requirements..." required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '25px' } }} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large" 
                        fullWidth 
                        endIcon={<Send size={20} />}
                        sx={{ py: 2.5, borderRadius: '15px', fontWeight: 800, fontSize: '1.1rem', bgcolor: 'primary.main' }}
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
    </Box>
  );
};

export default Contact;
