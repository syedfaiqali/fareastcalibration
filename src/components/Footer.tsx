import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ArrowRight, PhoneCall, Mail, MapPinned } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { navigation, serviceGroups, contactBlocks } from '../data/siteContent';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#0d3f2b', color: 'white', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: 'center' }}>
              <Box component="img" src="/fareastcalibrationLogo.jpeg" alt="Fareast Calibration logo" sx={{ width: 48, height: 48, borderRadius: '50%' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                  Fareast Calibration
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Precision. Traceability. Confidence.
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" sx={{ opacity: 0.82, mb: 3, maxWidth: 360, lineHeight: 1.8 }}>
              Calibration and validation support built for teams that need clean reports, dependable turnaround, and real technical attention.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[FacebookIcon, LinkedInIcon, InstagramIcon, YouTubeIcon].map((Icon, index) => (
                <IconButton key={index} color="inherit" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.08)' }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navigation.slice(0, 5).map((item) => (
                <Link key={item.path} component={RouterLink} to={item.path} color="inherit" underline="hover">
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Core Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {serviceGroups.slice(0, 4).map((item) => (
                <Typography key={item.title} variant="body2" sx={{ opacity: 0.82 }}>
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <PhoneCall size={16} />
                <Typography variant="body2" sx={{ opacity: 0.82 }}>
                  +91 98109 77012
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Mail size={16} />
                <Typography variant="body2" sx={{ opacity: 0.82 }}>
                  newdelhicalibrationlaboratory@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                <MapPinned size={16} style={{ marginTop: 2 }} />
                <Typography variant="body2" sx={{ opacity: 0.82 }}>
                  WZ-97 (NG-26), 206, 216 & 217, Paschim Vihar, New Delhi - 110063
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.12)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Copyright {new Date().getFullYear()} Fareast Calibration Private Limited. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            {contactBlocks.map((item) => (
              <Link
                key={item.title}
                component={RouterLink}
                to="/contact"
                underline="hover"
                color="inherit"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, opacity: 0.8 }}
              >
                {item.title} <ArrowRight size={14} />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
