import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, Stack } from '@mui/material';
import PageHeader from '../components/PageHeader';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
  return (
    <Box>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our experts for all your calibration needs." 
      />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Reach Out to Us</Typography>
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOnIcon color="secondary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Our Office</Typography>
                  <Typography variant="body1" color="text.secondary">
                    A-123, Industrial Area Phase II,<br />
                    New Delhi - 1100XX, India
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <PhoneIcon color="secondary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Phone Numbers</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Office: +91 11 2345 6789<br />
                    Mobile: +91 98765 43210
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <EmailIcon color="secondary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Email Address</Typography>
                  <Typography variant="body1" color="text.secondary">
                    info@fareastcalibration.com<br />
                    support@fareastcalibration.com
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Send us a Message</Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Your Name" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Email Address" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth multiline rows={4} label="Message" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button variant="contained" color="primary" size="large" fullWidth>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Map Placeholder */}
        <Box sx={{ mt: 10, height: 400, bgcolor: '#f0f0f0', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body1" color="text.secondary">Google Maps Integration Placeholder</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
