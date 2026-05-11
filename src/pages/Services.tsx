import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import PageHeader from '../components/PageHeader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Calibration Services',
      items: [
        'Thermal (Ovens, Incubators, Deep Freezers)',
        'Mechanical (Pressure Gauges, Vacuum, Weights)',
        'Dimensional (Vernier, Micrometer, Gauges)',
        'Electrical (Multimeters, Clamp Meters, Timers)',
        'Mass & Volume (Balances, Pipettes, Glassware)'
      ]
    },
    {
      title: 'Validation & Mapping',
      items: [
        'HVAC Validation (Air Velocity, HEPA Integrity)',
        'Cleanroom Validation',
        'Thermal Mapping (Warehouses, Cold Rooms)',
        'Equipment Qualification (IQ/OQ/PQ)'
      ]
    },
    {
      title: 'Specialized Services',
      items: [
        'Annual Calibration Contracts (AMC)',
        'On-site Calibration',
        'Consultancy for NABL Accreditation',
        'Corporate Training on Metrology'
      ]
    }
  ];

  return (
    <Box>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive calibration and validation solutions tailored to your industry." 
      />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {serviceCategories.map((cat, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>{cat.title}</Typography>
                  <Divider sx={{ mb: 2 }} />
                  <List>
                    {cat.items.map((item, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="secondary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, bgcolor: 'primary.dark', color: 'white', p: 6, borderRadius: 4, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Need a custom solution?</Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 4, fontWeight: 400 }}>
            We provide customized calibration programs designed to meet your specific quality standards and regulatory requirements.
          </Typography>
          <Button variant="contained" color="secondary" size="large">Request a Quote</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
