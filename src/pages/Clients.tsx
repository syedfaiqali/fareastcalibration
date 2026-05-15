import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

import { 
  Building2, 
  CheckCircle2, 
  FlaskConical, 
  Handshake, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { clients, clientSectors } from '../data/siteContent';

const MotionBox = motion(Box);

const Clients: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <PageHeader
        title="Trusted by Industry Leaders"
        subtitle="Fareast Calibration partners with organizations that demand absolute precision. Our clients range from multinational pharmaceutical giants to critical infrastructure providers."
        breadcrumb="Clients"
      />

      {/* Trust Stats Section - Clean & Minimal */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 3 }}>
        <Box
          sx={{
            bgcolor: 'white',
            p: 5,
            borderRadius: '30px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            border: '1px solid rgba(15,122,79,0.05)'
          }}
        >
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {[
              { label: 'Industries Served', value: '15+' },
              { label: 'Satisfied Clients', value: '500+' },
              { label: 'Project Completed', value: '10,000+' },
              { label: 'Compliance Rate', value: '100%' },
            ].map((stat, i) => (
              <Grid key={i} item xs={6} md={3}>
                <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>



      {/* Logo Grid Section - BRAND THEME PREMIUM */}
      <Box 
        sx={{ 
          py: { xs: 12, md: 18 }, 
          position: 'relative', 
          overflow: 'hidden',
          bgcolor: 'background.default', // Use theme background
        }}
      >
        {/* Subtle Brand Textures */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: '100%', 
            opacity: 0.03, 
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(#0f7a4f 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 10 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 900, 
                  letterSpacing: 4,
                  textTransform: 'uppercase'
                }}
              >
                Industrial Partnership
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 900, 
                  color: 'secondary.main', 
                  mt: 1,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Our Trusted <Box component="span" sx={{ color: 'primary.main' }}>Clients</Box>
              </Typography>
              <Box 
                sx={{ 
                  width: 60, 
                  height: 4, 
                  bgcolor: 'primary.main', 
                  mx: 'auto', 
                  mt: 3, 
                  borderRadius: 2 
                }} 
              />
            </MotionBox>
          </Stack>

          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {clients.map((client, i) => (
              <Grid key={i} item xs={6} sm={4} md={3}>
                <Box
                  sx={{
                    p: 3,
                    height: { xs: 100, md: 140 },
                    bgcolor: 'white',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(15,122,79,0.08)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(15,122,79,0.1)',
                      '& img': {
                        filter: 'grayscale(0%)',
                        opacity: 1,
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box 
                    component="img" 
                    src={client.logo} 
                    alt={client.name}
                    sx={{ 
                      maxWidth: '85%', 
                      maxHeight: '85%', 
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.6,
                      transition: 'all 0.3s ease',
                    }} 
                  />
                </Box>
              </Grid>
            ))}
          </Grid>



        </Container>
      </Box>




      {/* Sectors Section */}
      <Box sx={{ py: 12, bgcolor: '#f4fbf7' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}>
                SECTOR COVERAGE
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1, mb: 3 }}>
                Precision Across Every Vertical
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                Our expertise is not limited to a single field. We have developed specialized 
                calibration protocols for various critical sectors, ensuring each industry's 
                unique compliance requirements are met with 100% accuracy.
              </Typography>
              
              <Grid container spacing={2}>
                {clientSectors.map((sector, i) => (
                  <Grid key={i} item xs={12} sm={6}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Box sx={{ color: 'primary.main' }}>
                        <CheckCircle2 size={20} />
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{sector}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  position: 'relative',
                  height: 400,
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                }}
              >
                <Box 
                  component="img" 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(15,122,79,0.6), transparent)' 
                  }} 
                />
                <Stack 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 30, 
                    left: 30, 
                    color: 'white' 
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>Quality Assured</Typography>
                  <Typography variant="body2">Certified calibration for global standards</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Card 
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'white', 
              p: { xs: 6, md: 10 }, 
              borderRadius: 8,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute', 
                top: -50, 
                right: -50, 
                width: 200, 
                height: 200, 
                bgcolor: 'rgba(255,255,255,0.05)', 
                borderRadius: '50%' 
              }} 
            />
            <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ mx: 'auto', bgcolor: 'secondary.main', p: 2, borderRadius: '50%' }}>
                <Handshake size={40} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 900 }}>
                Become Our Partner
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Experience the difference that technical precision and reliable support can make 
                for your organization. Join our growing list of prestigious clients.
              </Typography>
              <Box sx={{ pt: 2 }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: '#fec001',
                    color: '#001b5e',
                    border: 'none',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  Get a Proposal
                </motion.button>
              </Box>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Clients;
