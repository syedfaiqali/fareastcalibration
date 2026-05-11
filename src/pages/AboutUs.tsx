import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import PageHeader from '../components/PageHeader';

const AboutUs: React.FC = () => {
  return (
    <Box>
      <PageHeader 
        title="About Us" 
        subtitle="Leading the way in calibration excellence since 2010." 
      />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Our Legacy of Precision</Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              Fareast Calibration Private Limited is a leading name in the field of calibration and validation services. With a legacy spanning over a decade, we have established ourselves as a trusted partner for industries ranging from pharmaceuticals to aerospace.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              Our state-of-the-art laboratory is equipped with high-precision master instruments traceable to national and international standards. We take pride in our team of highly skilled engineers who are dedicated to providing accurate and reliable results.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80" sx={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 8 }}>
          {[
            { title: 'Our Vision', desc: 'To be the global leader in calibration services, set apart by our commitment to precision, innovation, and customer satisfaction.' },
            { title: 'Our Mission', desc: 'To provide superior calibration and validation solutions that empower our clients to maintain the highest quality standards.' },
            { title: 'Our Values', desc: 'Integrity, Accuracy, Reliability, and continuous improvement are the cornerstones of everything we do.' },
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', bgcolor: 'rgba(0,51,102,0.02)', border: 'none' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>{item.title}</Typography>
                  <Typography variant="body1" color="text.secondary">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
