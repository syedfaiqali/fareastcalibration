import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        background: `
            radial-gradient(circle at 78% 18%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.24) 32%, transparent 52%),
            radial-gradient(circle at 12% 85%, rgba(0,27,94,0.30) 0%, transparent 36%),
            linear-gradient(135deg, #0d3f2b 0%, #0f7a4f 68%, #001b5e 100%)
          `,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: { xs: 8, md: 0 },
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
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          </Stack>
          <Breadcrumbs
            separator={<ArrowRight size={14} color="rgba(255,255,255,0.6)" />}
            sx={{ color: 'rgba(255,255,255,0.72)', mb: 3 }}
          >
            <Link component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
            <Typography sx={{ color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>
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
              fontSize: { xs: '2.1rem', sm: '2.8rem', md: '4.2rem' },
              lineHeight: 1.05,
              mb: subtitle ? 2 : 0,
              maxWidth: 900,
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
              lineHeight: 1.7,
              opacity: 0.88,
              fontWeight: 400,
              fontSize: { xs: '1.02rem', md: '1.18rem' },
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          opacity: 0.6
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
