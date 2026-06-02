import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import image1a from '../assets/1a.jpg';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  const brandBlue = '#001b5e';
  const brandGreen = '#0f7a4f';
  const brandGreenDark = '#0d3f2b';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        background: `
            radial-gradient(circle at 76% 20%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.22) 31%, transparent 52%),
            radial-gradient(circle at 16% 82%, rgba(0,27,94,0.34) 0%, transparent 36%),
            linear-gradient(135deg, ${brandGreenDark} 0%, ${brandGreen} 62%, ${brandBlue} 100%)
          `,
        minHeight: { xs: 520, md: 590 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: { xs: 10, md: 12 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 24px), linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)',
          backgroundSize: '48px 48px',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.04) 52%, rgba(0,27,94,0.28) 100%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        sx={{
          position: 'absolute',
          right: { xs: -150, md: 86 },
          top: { xs: 72, md: 92 },
          width: { xs: 360, md: 520 },
          height: { xs: 360, md: 520 },
          borderRadius: '50%',
          border: '1px dashed rgba(255,255,255,0.24)',
          boxShadow: '0 0 0 28px rgba(0,27,94,0.10), 0 0 0 58px rgba(15,122,79,0.08)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: { xs: -95, md: 150 },
          top: { xs: 126, md: 150 },
          width: { xs: 250, md: 390 },
          height: { xs: 250, md: 390 },
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.08)',
          border: '14px solid rgba(0,27,94,0.42)',
          display: 'grid',
          placeItems: 'center',
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.08), 0 34px 90px rgba(0,27,94,0.24)',
          pointerEvents: 'none',
          opacity: { xs: 0.28, md: 0.46 },
        }}
      >
        <Box
          component="img"
          src={image1a}
          alt=""
          sx={{
            width: '74%',
            height: '74%',
            objectFit: 'cover',
            borderRadius: '50%',
            filter: 'saturate(0.95)',
            opacity: 0.9,
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 24, md: 88 },
          bottom: { xs: 20, md: 34 },
          width: { xs: 150, md: 220 },
          height: 3,
          borderRadius: 999,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(79,179,127,0.78), transparent)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Stack direction="row" spacing={1.2} sx={{ mb: 2.5, alignItems: 'center', flexWrap: 'wrap' }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '14px',
                bgcolor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.20)',
                display: 'grid',
                placeItems: 'center',
                color: 'white',
                boxShadow: '0 12px 28px rgba(0,27,94,0.20)',
              }}
            >
              <BadgeCheck size={20} />
            </Box>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.78)', fontWeight: 900, letterSpacing: 2.5 }}>
              Fareast Calibration Excellence
            </Typography>
          </Stack>
          <Breadcrumbs
            separator={<ArrowRight size={14} color="rgba(255,255,255,0.6)" />}
            sx={{ color: 'rgba(255,255,255,0.72)', mb: 3 }}
          >
            <Link component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>
              Home
            </Link>
            <Typography sx={{ color: 'white', fontWeight: 800 }}>
              {breadcrumb || title}
            </Typography>
          </Breadcrumbs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.6rem', sm: '3.2rem', md: '5rem' },
              lineHeight: 1.05,
              mb: subtitle ? 2.5 : 0,
              maxWidth: 760,
              letterSpacing: 0,
              textShadow: '0 20px 50px rgba(0,27,94,0.24)',
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {subtitle && (
          <Typography
            variant="h6"
            sx={{
              maxWidth: 760,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.88)',
              fontWeight: 400,
              fontSize: { xs: '1.05rem', md: '1.24rem' },
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem'
            }}
          >
            {subtitle.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + (i * 0.04), // Start after title animation
                  ease: "easeOut"
                }}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </Typography>
        )}
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          opacity: 0.72
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
          Scroll Down
        </Typography>
        <Box
          sx={{
            width: 2,
            height: 60,
            background: 'linear-gradient(to bottom, white, transparent)',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background: 'white',
              animation: 'scrollDown 2s infinite ease-in-out'
            }
          }}
        />
      </Box>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(333%); }
        }
      `}</style>
    </Box>
  );
};

export default PageHeader;
