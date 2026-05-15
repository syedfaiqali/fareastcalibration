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
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  List,
  ListItem,
  ListItemText,
  Stack,
  Link,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { LayoutGroup, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Mail, Menu, PhoneCall, ShieldCheck, X } from 'lucide-react';
import { navigation, serviceMenuLinks } from '../data/siteContent';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceMenuAnchor, setServiceMenuAnchor] = useState<HTMLElement | null>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const serviceMenuOpen = Boolean(serviceMenuAnchor);

  const handleDrawerToggle = () => {
    setMobileOpen((value) => !value);
  };

  const handleServiceMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServiceMenuAnchor(event.currentTarget);
  };

  const handleServiceMenuClose = () => {
    setServiceMenuAnchor(null);
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
          }}
        >
          <Box component="img" src="/fareastcalibrationLogo.jpeg" alt="Fareast Calibration logo" sx={{ width: 36, height: 36, borderRadius: '50%', position: 'relative', zIndex: 1 }} />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1, color: 'primary.main' }}>
            Fareast Calibration
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Precision that reads true
          </Typography>
        </Box>
      </Stack>

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
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        <Box component="span">{item.label}</Box>
                        {item.label === 'Services' && <ChevronDown size={14} />}
                      </Stack>
                    </Button>
                  }
                />
              </ListItem>
            </motion.div>
          );
        })}
      </List>

      <Divider sx={{ my: 1.75 }} />

      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1 }}>
        Service links
      </Typography>
      <Stack spacing={0.5} sx={{ mt: 1 }}>
        {serviceMenuLinks.map((item) => (
          <Button
            key={item.label}
            component={RouterLink}
            to={item.path}
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color: 'text.primary',
              fontWeight: 500,
              py: 1.05,
              px: 1.2,
              borderRadius: 2,
              '&:hover': { bgcolor: 'rgba(15,122,79,0.06)' },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
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
            background: 'linear-gradient(90deg, #0f7a4f 0%, #4fb37f 100%)',
          }}
        />
      </Box>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(15, 122, 79, 0.08)',
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 14px 40px rgba(15, 122, 79, 0.05)',
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
              </Stack>
              <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
                <ShieldCheck size={14} />
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  KAN accredited lab | ISO/IEC 17025:2017 | ISO 9001:2015
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.05, gap: 2 }}>
            <Button
              component={RouterLink}
              to="/"
              disableRipple
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-start',
                px: 0,
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': { bgcolor: 'transparent' },
              }}
            >
              <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    bgcolor: 'rgba(15,122,79,0.08)',
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2.8 }}
                    sx={{
                      position: 'absolute',
                      inset: 6,
                      borderRadius: '50%',
                      border: '1px solid rgba(0,27,94,0.18)',
                    }}
                  />
                  <Box component="img" src="/fareastcalibrationLogo.jpeg" alt="Fareast Calibration logo" sx={{ width: 38, height: 38, borderRadius: '50%', position: 'relative', zIndex: 1 }} />
                </Box>
                <Box sx={{ textAlign: 'left', display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.05 }}>
                    Fareast Calibration
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Precision. Traceability. Confidence.
                  </Typography>
                </Box>
              </Stack>
            </Button>

            <LayoutGroup>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {navigation.map((item) => {
                  const active = item.label === 'Services'
                    ? location.pathname.startsWith('/services')
                    : location.pathname === item.path;
                  if (item.label === 'Services') {
                    return (
                      <Box
                        key={item.label}
                        component={motion.div}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={handleServiceMenuOpen}
                          sx={{
                            color: active ? 'primary.main' : 'text.primary',
                            fontWeight: active ? 700 : 500,
                            px: 2.2,
                            py: 1.2,
                            borderRadius: 999,
                            bgcolor: active ? 'rgba(15,122,79,0.08)' : 'transparent',
                            '&:hover': { bgcolor: 'rgba(15,122,79,0.06)' },
                          }}
                        >
                          <Stack direction="row" spacing={0.6} sx={{ alignItems: 'center' }}>
                            <Box component="span">{item.label}</Box>
                            <ChevronDown size={14} />
                          </Stack>
                        </Button>
                      </Box>
                    );
                  }

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
                        sx={{
                          color: active ? 'primary.main' : 'text.primary',
                          fontWeight: active ? 700 : 500,
                          px: 2.2,
                          py: 1.2,
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
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      px: 2.6,
                      py: 1.2,
                      boxShadow: '0 16px 30px rgba(15,122,79,0.20)',
                    }}
                  >
                    Get quote
                  </Button>
                </Box>
              </Box>
            </LayoutGroup>

            <MuiMenu
              anchorEl={serviceMenuAnchor}
              open={serviceMenuOpen}
              onClose={handleServiceMenuClose}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.25,
                    borderRadius: 3,
                    border: '1px solid rgba(15,122,79,0.10)',
                    boxShadow: '0 18px 40px rgba(15,40,28,0.12)',
                    minWidth: 280,
                    overflow: 'hidden',
                  },
                },
              }}
            >
              {serviceMenuLinks.map((item) => (
                <MuiMenuItem
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleServiceMenuClose}
                  sx={{ py: 1.2, fontSize: 14, fontWeight: 500 }}
                >
                  {item.label}
                </MuiMenuItem>
              ))}
            </MuiMenu>

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
