import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Button,
} from '@mui/material';
import PageHeader from '../components/PageHeader';
import {
  CheckCircle2,
  Handshake,
} from 'lucide-react';
import { clients, clientSectors } from '../data/siteContent';
import image1g from '../assets/1g.jpg';

const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';
const brandGreenDark = '#0d3f2b';
const softBlue = '#edf5ff';
const softGreen = '#f4fbf7';

const Clients: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: softBlue,
        background:
          'linear-gradient(180deg, #edf5ff 0%, #f7fbff 34%, #f4fbf7 68%, #ffffff 100%)',
      }}
    >
      <PageHeader
        title="Trusted by Industry Leaders"
        subtitle="PT Fareast Calibration and Testing Services supports manufacturers, laboratories, marine teams, utilities, and inspection groups that need dependable calibration."
        breadcrumb="Clients"
      />

      {/* Trust Stats Section - Clean & Minimal */}
      <Container maxWidth="lg" sx={{ mt: { xs: -5, md: -8 }, position: 'relative', zIndex: 3 }}>
        <Box
          sx={{
            p: { xs: 1.5, sm: 3, md: 5 },
            borderRadius: { xs: 4, md: 6 },
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            background:
              `linear-gradient(135deg, ${brandBlue} 0%, #08376f 44%, ${brandGreenDark} 100%)`,
            boxShadow: '0 28px 70px rgba(0,27,94,0.22)',
            border: '1px solid rgba(255,255,255,0.16)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.16), transparent 26%), radial-gradient(circle at 85% 70%, rgba(15,122,79,0.28), transparent 30%)',
            },
          }}
        >
          <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {[
              { label: 'Satisfied Customers', value: '500+' },
              { label: 'Instruments Calibrated', value: '20000+' },
              { label: 'Established', value: '2014' },
              { label: 'Standards', value: 'KAN' },
            ].map((stat, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <Box
                  sx={{
                    px: { xs: 0.75, sm: 2, md: 3 },
                    py: { xs: 1.5, sm: 2, md: 3 },
                    borderRadius: { xs: 2.5, md: 4 },
                    border: '1px solid rgba(255,255,255,0.13)',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: i % 2 ? '#8ce0b6' : 'white',
                      mb: 0.5,
                      fontSize: { xs: '1.45rem', sm: '2rem', md: '3rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255,255,255,0.72)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: { xs: 0.35, sm: 1 },
                      fontSize: { xs: '0.57rem', sm: '0.72rem' },
                      lineHeight: 1.35,
                      display: 'block',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>



      {/* Logo Grid Section - BRAND THEME PREMIUM */}
      <Box
        sx={{
          py: { xs: 8, sm: 10, md: 18 },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'transparent',
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
            opacity: 0.05,
            pointerEvents: 'none',
            backgroundImage: `radial-gradient(${brandBlue} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 900,
                  letterSpacing: { xs: 2.5, sm: 4 },
                  fontSize: { xs: '0.67rem', sm: '0.75rem' },
                  textTransform: 'uppercase'
                }}
              >
                Industrial Partnership
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: brandBlue,
                  mt: 1,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.12,
                }}
              >
                Our Trusted <Box component="span" sx={{ color: brandGreen }}>Clients</Box>
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  bgcolor: brandGreen,
                  mx: 'auto',
                  mt: 3,
                  borderRadius: 2
                }}
              />
            </Box>
          </Stack>


          <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }} sx={{ justifyContent: 'center' }}>
            {clients.map((client, i) => {
              const fit = client.logoFit ?? {};
              const scale = fit.scale ?? 1;

              return (
                <Grid
                  key={i}
                  size={{ xs: 6, sm: 4, md: 3 }}
                  sx={{
                    '@media (max-width: 380px)': {
                      flexBasis: '100%',
                      maxWidth: '100%',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 1, sm: 1.5, md: 2 },
                      height: { xs: 112, sm: 124, md: 144 },
                      bgcolor: 'white',
                      borderRadius: { xs: 3, md: 4 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(0,27,94,0.08)',
                      boxShadow: '0 18px 45px rgba(0,27,94,0.08)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${brandGreen}, ${brandBlue})`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        borderColor: 'rgba(15,122,79,0.35)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 24px 56px rgba(0,27,94,0.16)',
                        '&::before': { opacity: 1 },
                        '& img': {
                          transform: `scale(${scale * 1.04})`,
                        },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={client.logo}
                      alt={client.name}
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        maxWidth: fit.maxWidth ?? { xs: '86%', sm: '84%', md: '82%' },
                        maxHeight: fit.maxHeight ?? { xs: '78%', md: '76%' },
                        objectFit: 'contain',
                        opacity: 1,
                        transform: `scale(${scale})`,
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>



        </Container>
      </Box>




      {/* Sectors Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: softGreen, position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(15,122,79,0.08), transparent 45%), radial-gradient(circle at 90% 15%, rgba(0,27,94,0.10), transparent 28%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}>
                SECTOR COVERAGE
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 900, color: brandBlue, mt: 1, mb: 2.5, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
              >
                Precision Across Every Vertical
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                Our expertise is not limited to a single field. We have developed specialized
                calibration procedures for critical sectors, helping each customer's quality,
                safety, and compliance requirements stay under control.
              </Typography>

              <Grid container spacing={2}>
                {clientSectors.map((sector, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
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
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 260, sm: 340, md: 400 },
                  borderRadius: { xs: 4, md: 6 },
                  overflow: 'hidden',
                  boxShadow: '0 30px 70px rgba(0,27,94,0.18)',
                  border: { xs: '5px solid white', md: '8px solid white' },
                }}
              >
                <Box
                  component="img"
                  src={image1g}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,27,94,0.74), rgba(15,122,79,0.18), transparent)'
                  }}
                />
                <Stack
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 20, md: 30 },
                    left: { xs: 20, md: 30 },
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
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card
            sx={{
              background: `linear-gradient(135deg, ${brandGreenDark} 0%, ${brandGreen} 48%, ${brandBlue} 100%)`,
              color: 'white',
              p: { xs: 3, sm: 6, md: 10 },
              borderRadius: { xs: 4, md: 6 },
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
              <Box sx={{ mx: 'auto', bgcolor: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.22)', p: 2, borderRadius: '50%' }}>
                <Handshake size={40} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                Become Our Partner
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Experience the difference that technical precision and reliable support can make
                for your organization. Join our growing list of prestigious clients.
              </Typography>
              <Box sx={{ pt: { xs: 1, sm: 3 } }}>
                <Button
                  component="a"
                  href="mailto:fareastcalibration@gmail.com"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#fec001',
                    color: 'secondary.main',
                    width: { xs: '100%', sm: 'auto' },
                    px: { xs: 2, sm: 6 },
                    py: { xs: 1.6, sm: 2 },
                    borderRadius: '50px',
                    fontSize: { xs: '0.92rem', sm: '1.1rem' },
                    fontWeight: 800,
                    textTransform: 'none',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                    '&:hover': {
                      bgcolor: 'white',
                      color: 'primary.main',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  Email us for further conversation
                </Button>
              </Box>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Clients;
