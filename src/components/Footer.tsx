import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { PhoneCall, Mail, MapPinned } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { navigation } from '../data/siteContent';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0d3f2b',
        color: 'white',
        pt: 10,
        pb: 5,
        mt: 'auto',
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
              <Box component="img" src="/fareastcalibrationLogo.jpeg" alt="Fareast Calibration logo" sx={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.1, letterSpacing: -1 }}>
                  PT. Fareast Calibration Services
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.6, fontWeight: 700, color: 'primary.light' }}>
                  PRECISION • TRACEABILITY • CONFIDENCE
                </Typography>
              </Box>
            </Stack>
            <Typography variant="h6" sx={{ opacity: 0.7, mb: 4, maxWidth: 450, lineHeight: 1.6, fontWeight: 400 }}>
              One stop solution for calibration and testing services in Batam, Indonesia. KAN accredited, ISO/IEC 17025:2017 aligned, and ISO 9001:2015 certified.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {[
                { icon: FacebookIcon, url: 'https://www.facebook.com/fareastcalibration/' },
                { icon: LinkedInIcon, url: '#' },
                { icon: InstagramIcon, url: '#' },
                { icon: YouTubeIcon, url: '#' }
              ].map((social, index) => (
                <IconButton 
                  key={index} 
                  color="inherit" 
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transition: 'all 0.3s',
                    '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-5px)' }
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 3, display: 'block', color: 'primary.light', letterSpacing: 3 }}>
              QUICK ACCESS
            </Typography>
            <Stack spacing={2}>
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  underline="none"
                  sx={{
                    fontSize: '1.1rem',
                    opacity: 0.7,
                    transition: 'all 0.2s',
                    '&:hover': { opacity: 1, color: 'primary.light', pl: 1 }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 3, display: 'block', color: 'primary.light', letterSpacing: 3 }}>
              GET IN TOUCH
            </Typography>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.05)' }}>
                  <PhoneCall size={20} color="#4fb37f" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.5, display: 'block' }}>Call Our Lab</Typography>
                  <Link href="tel:+62778351831" color="inherit" underline="hover">
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>+62 778 351 831</Typography>
                  </Link>
                  <Link href="tel:+6281267051658" color="inherit" underline="hover">
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>+62 812 6705 1658</Typography>
                  </Link>
                  <Link href="tel:+6282286881953" color="inherit" underline="hover">
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>+62 822 8688 1953</Typography>
                  </Link>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.05)' }}>
                  <Mail size={20} color="#4fb37f" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.5, display: 'block' }}>Email Us</Typography>
                  <Link href="mailto:sales@fareastcalibration.com" color="inherit" underline="hover">
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>sales@fareastcalibration.com</Typography>
                  </Link>
                  <Link href="mailto:fareastcalibration@gmail.com" color="inherit" underline="hover">
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>fareastcalibration@gmail.com</Typography>
                  </Link>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.05)' }}>
                  <MapPinned size={20} color="#4fb37f" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.5, display: 'block' }}>Head Office</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 300, fontWeight: 700 }}>
                    Tiban Raya Lestari, Block C/4, Sekupang, Batam, Indonesia
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, bgcolor: 'rgba(255,255,255,0.05)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ opacity: 0.4 }}>
            © {new Date().getFullYear()} PT Fareast Calibration and Testing Services. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            <Link href="#" color="inherit" sx={{ fontSize: '0.8rem', opacity: 0.5, underline: 'none', '&:hover': { opacity: 1 } }}>Privacy Policy</Link>
            <Link href="#" color="inherit" sx={{ fontSize: '0.8rem', opacity: 0.5, underline: 'none', '&:hover': { opacity: 1 } }}>Terms of Service</Link>
          </Stack>
        </Stack>

      </Container>
    </Box>
  );
};

export default Footer;
