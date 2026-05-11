import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import PageHeader from '../components/PageHeader';

const Career: React.FC = () => {
  const jobs = [
    { title: 'Calibration Engineer', type: 'Full Time', location: 'New Delhi', experience: '2-4 Years' },
    { title: 'Quality Assurance Manager', type: 'Full Time', location: 'New Delhi', experience: '5+ Years' },
    { title: 'Validation Specialist', type: 'Full Time', location: 'On-site', experience: '1-3 Years' },
    { title: 'Sales Executive', type: 'Full Time', location: 'Remote/Hybrid', experience: '0-2 Years' },
  ];

  return (
    <Box>
      <PageHeader 
        title="Careers" 
        subtitle="Join our team of experts and build a future in precision engineering." 
      />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Why Work With Us?</Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              At Fareast Calibration, we believe our people are our greatest asset. We offer a dynamic work environment that encourages innovation, learning, and growth.
            </Typography>
            <Stack spacing={2} sx={{ mt: 3 }}>
              {['Competitive Salary & Benefits', 'Continuous Learning & Development', 'Work-Life Balance', 'Impactful Projects'].map((benefit, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{benefit}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" sx={{ width: '100%', borderRadius: 4 }} />
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}>Open Positions</Typography>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card variant="outlined">
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{job.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{job.location}</Typography>
                    </Box>
                    <Chip label={job.type} color="primary" size="small" variant="outlined" />
                  </Stack>
                  <Typography variant="body2" sx={{ mb: 3 }}>Experience Required: {job.experience}</Typography>
                  <Button variant="outlined" color="primary">Apply Now</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Career;
