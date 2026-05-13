import React from 'react';
import { Box, Container, Typography, Grid, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import CircleIcon from '@mui/icons-material/Circle';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Flow Meter Calibration',
      description: 'Our laboratory is capable of calibrating various types of flow meters and flow sensors. We utilize master flow meter tools built with advanced German technology to ensure precision and reliability in every measurement.',
      items: [
        'Manual Flow meters',
        'Ultrasonic flow meters',
        'Turbine flow meters',
        'Magnetic flow meters',
        'Industrial flow sensors'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80',
    },
    {
      title: 'Pressure Calibration',
      description: 'Fareast Calibration provides comprehensive calibration for all types of industrial pressure instruments, from standard gauges to complex dead weight testers.',
      items: [
        'Bourdon tube pressure meters',
        'Digital pressure gauges & indicators',
        'Differential pressure gauges',
        'Pressure / Vacuum / Dial gauges',
        'Dead weight testers',
        'Pressure recorders & controllers',
        'Barometric sensors & switches'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    },
    {
      title: 'Temperature Calibration',
      description: 'We offer a wide range of temperature calibration services for building services and industrial processes, ensuring accuracy in thermal monitoring and control.',
      items: [
        'Analog & Digital thermometers',
        'Digital thermal sensors',
        'Oven & Furnace mapping',
        'Thermocouples & RTD sensors',
        'Thermal hygrometers',
        'Cold room & Warehouse mapping'
      ],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80',
    },
    {
      title: 'Dimensional Calibration',
      description: 'Our dimensional calibration services cover a vast array of industrial measuring instruments, providing precision measurement for manufacturing and quality control.',
      items: [
        'Steel rulers & Digital calipers',
        'Micrometers (Inside/Outside)',
        'Linear displacement transducers',
        'Dial gauges & Indicators',
        'Height gauges & Precision blocks',
        'Thickness gauges & Veneer calipers'
      ],
      image: 'https://images.unsplash.com/photo-1530311701074-9ef4a446f62b?auto=format&fit=crop&q=80',
    },
    {
      title: 'Mass & Weight Calibration',
      description: 'We are capable of calibrating all types of weighing and balance scales, ensuring traceability to national and international standards for laboratory and industrial use.',
      items: [
        'Analytical & Laboratory balances',
        'Bench & Single cell scales',
        'Floor & Industrial platform scales',
        'Fork & Desk weighing systems',
        'Load cells & Force transducers',
        'Standard weights (Class M1, F1, E2)'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    },
    {
      title: 'Electrical Calibration',
      description: 'Fareast Calibration offers expert testing and calibration services for a wide range of industrial and laboratory electrical equipment.',
      items: [
        'Frequency meters & Counters',
        'LCR & Impedance meters',
        'Ammeters, Voltmeters & Watt meters',
        'Insulation testers & Megohmmeters',
        'Oscilloscopes & Signal generators',
        'Earth testers & Conductivity meters',
        'High Voltage test sets & Relays'
      ],
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1794ed9?auto=format&fit=crop&q=80',
    },
    {
      title: 'General & Validation Services',
      description: 'Our general calibration and validation services ensure that your facility operations comply with stringent quality control and safety standards.',
      items: [
        'HVAC & Cleanroom validation',
        'Steam sterilizer & Autoclave mapping',
        'Fire alarm system testing',
        'Hand-held industrial tools',
        'Quality control system calibration',
        'Custom validation protocols'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', pb: 15 }}>
      <PageHeader 
        title="Engineering Services" 
        subtitle="Uncompromising precision and regulatory excellence for industrial leaders." 
      />

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Grid 
              container 
              spacing={{ xs: 4, md: 10 }} 
              alignItems="center" 
              sx={{ 
                mb: { xs: 10, md: 20 }, 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' 
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box 
                  sx={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                    aspectRatio: '4/3',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ px: { md: 2 } }}>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: 'primary.main', 
                      fontWeight: 800, 
                      letterSpacing: 3,
                      display: 'block',
                      mb: 2
                    }}
                  >
                    EXCELLENCE IN METROLOGY
                  </Typography>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 900, 
                      fontSize: { xs: '2.2rem', md: '3.2rem' },
                      lineHeight: 1.1,
                      mb: 3,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      fontSize: '1.15rem', 
                      lineHeight: 1.7,
                      fontWeight: 400,
                      mb: 4
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Grid container spacing={1}>
                    {service.items.map((item, i) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                          <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        ))}

        {/* Professional Trust Footer */}
        <Box 
          sx={{ 
            mt: 10, 
            p: { xs: 4, md: 10 }, 
            borderRadius: '60px', 
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', 
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '-50%', 
              left: '-20%', 
              width: '60%', 
              height: '200%', 
              bgcolor: 'primary.main', 
              opacity: 0.05, 
              filter: 'blur(100px)',
              borderRadius: '50%',
              zIndex: 0
            }} 
          />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 3 }}>
              Global Standard Calibration
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.5)', mb: 6, maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              Our facility is certified with ISO 9001:2015 & ISO/IEC 17025:2017 standards, providing you with the highest level of accuracy and compliance.
            </Typography>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                border: 'none',
                padding: '22px 50px',
                borderRadius: '20px',
                fontSize: '1.2rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Get a Free Quote Today
            </motion.button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
