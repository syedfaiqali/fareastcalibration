import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Link,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { LayoutGroup, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Menu, PhoneCall, X } from 'lucide-react';
import { navigation } from '../data/siteContent';
import logoKanan from '../assets/logokanan.png';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  const handleDrawerToggle = () => {
    setMobileOpen((value) => !value);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const drawer = (
    <Box sx={{ p: 2.5 }}>
      <Stack direction="row" spacing={1.5} sx={{ mb: 3, alignItems: 'center' }}>
        <Box
          sx={{
            width: 46,
            height: 46,
            borderRadius: '50%',
            bgcolor: 'rgba(15,122,79,0.08)',
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <Box component="img" src="/fareastcalibrationLogo.jpeg" alt="Fareast Calibration logo" sx={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1, color: 'primary.main' }}>
            PT. Fareast Calibration Services
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Precision that reads true
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          mb: 2.5,
          p: 1.25,
          borderRadius: 2,
          border: '1px solid rgba(0, 27, 94, 0.12)',
          bgcolor: 'rgba(15,122,79,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={logoKanan}
          alt="KAN accreditation logo"
          sx={{ width: 118, height: 'auto', display: 'block' }}
        />
      </Box>

      <List sx={{ display: 'grid', gap: 0.5 }}>
        {navigation.map((item, index) => {
          const active = item.label === 'Services'
            ? location.pathname.startsWith('/services')
            : location.pathname === item.path;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03, duration: 0.18 }}
            >
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Button
                      component={RouterLink}
                      to={item.path}
                      onClick={handleNavClick}
                      fullWidth
                      sx={{
                        color: active ? 'primary.main' : 'text.primary',
                        fontWeight: active ? 700 : 500,
                        justifyContent: 'flex-start',
                        py: 1.2,
                        px: 1.25,
                        borderRadius: 2,
                        bgcolor: active ? 'rgba(15,122,79,0.08)' : 'transparent',
                      }}
                    >
                      {item.label}
                    </Button>
                  }
                />
              </ListItem>
            </motion.div>
          );
        })}
      </List>

      <Divider sx={{ my: 1.75 }} />
    </Box>
  );

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1200 }}>
      <Box sx={{ height: 3, bgcolor: 'rgba(15,122,79,0.08)', overflow: 'hidden' }}>
        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: '0% 50%',
            height: '100%',
            background: `
            radial-gradient(circle at 78% 18%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.24) 32%, transparent 52%),
            radial-gradient(circle at 12% 85%, rgba(0,27,94,0.30) 0%, transparent 36%),
            linear-gradient(135deg, #0d3f2b 0%, #0f7a4f 68%, #001b5e 100%)
          `,
          }}
        />
      </Box>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: 0,
          borderRadius: 0,
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(18px)',
          boxShadow: 'none',
        }}
      >
        <Box sx={{ bgcolor: '#0f7a4f', color: 'white' }}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              sx={{ py: 0.9, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
            >
              <Stack direction="row" spacing={1.4} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
                  <PhoneCall size={14} />
                  <Typography variant="caption">
                    <Link href="tel:+62778351831" color="inherit" underline="hover">+62-778-351-831</Link>
                    {' / '}
                    <Link href="tel:+6281267051658" color="inherit" underline="hover">+62 812-6705-1658</Link>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
                  <Mail size={14} />
                  <Link href="mailto:fareastcalibration@gmail.com" color="inherit" underline="hover">
                    <Typography variant="caption">fareastcalibration@gmail.com</Typography>
                  </Link>
                </Stack>
                <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
                  <Mail size={14} />
                  <Link href="mailto:sales@fareastcalibration.com" color="inherit" underline="hover">
                    <Typography variant="caption">sales@fareastcalibration.com</Typography>
                  </Link>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
                <Box
                  component="img"
                  src={logoKanan}
                  alt="KAN accreditation logo"
                  sx={{
                    width: 58,
                    height: 'auto',
                    display: { xs: 'none', lg: 'block' },
                    bgcolor: 'white',
                    borderRadius: 1,
                    px: 0.5,
                    py: 0.25,
                  }}
                />
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  KAN accredited lab | ISO/IEC 17025:2017 | ISO 9001:2015
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.05, gap: 2, }}>
            <Box
              component={RouterLink}
              to="/"
              onClick={handleNavClick}
              sx={{
                flexGrow: 1,
                minWidth: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'secondary.main',
                '&:hover .logo-container': { transform: 'scale(1.08)' },
                '&:hover .brand-title': { color: 'primary.main' }
              }}
            >
              <Box
                className="logo-container"
                sx={{
                  width: 52,
                  height: 52,
                  flexShrink: 0,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  display: 'grid',
                  placeItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <Box
                  component="img"
                  src="/fareastcalibrationLogo.jpeg"
                  alt="Fareast Calibration logo"
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </Box>
              <Box sx={{ textAlign: 'left', display: { xs: 'none', sm: 'block' }, minWidth: 0 }}>
                <Typography 
                  variant="h6" 
                  className="brand-title"
                  sx={{ 
                    fontWeight: 900, 
                    lineHeight: 1.05, 
                    color: 'secondary.main',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  PT. Fareast Calibration Services
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Precision. Traceability. Confidence.
                </Typography>
              </Box>
            </Box>

            <LayoutGroup>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {navigation.map((item) => {
                  const active = item.label === 'Services'
                    ? location.pathname.startsWith('/services')
                    : location.pathname === item.path;
                  return (
                    <Box
                      key={item.label}
                      component={motion.div}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        component={RouterLink}
                        to={item.path}
                        onClick={handleNavClick}
                        sx={{
                          color: active ? 'primary.main' : 'text.primary',
                          fontWeight: active ? 700 : 500,
                          px: 2.2,
                          py: 1.2,
                          whiteSpace: 'nowrap',
                          borderRadius: 999,
                          position: 'relative',
                          overflow: 'hidden',
                          bgcolor: active ? 'rgba(15,122,79,0.08)' : 'transparent',
                          '&:hover': { bgcolor: 'rgba(15,122,79,0.06)' },
                        }}
                      >
                        {active && (
                          <Box
                            component={motion.div}
                            layoutId="nav-pill"
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              borderRadius: 999,
                              border: '1px solid rgba(15,122,79,0.14)',
                              bgcolor: 'rgba(15,122,79,0.08)',
                            }}
                          />
                        )}
                        <Box sx={{ position: 'relative', zIndex: 1 }}>{item.label}</Box>
                      </Button>
                    </Box>
                  );
                })}

                <Box component={motion.div} whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} sx={{ ml: 1.2 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    onClick={handleNavClick}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      px: 2.6,
                      py: 1.2,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 16px 30px rgba(15,122,79,0.20)',
                    }}
                  >
                    Get quote
                  </Button>
                </Box>
              </Box>
            </LayoutGroup>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                bgcolor: 'rgba(15,122,79,0.08)',
                color: 'primary.main',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
            bgcolor: '#ffffff',
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
