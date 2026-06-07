import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const BrandLoader: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        bgcolor: '#f4fbf7',
        color: 'primary.main',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(15,122,79,0.12), transparent 30%), radial-gradient(circle at 80% 30%, rgba(15,122,79,0.08), transparent 28%), radial-gradient(circle at 50% 80%, rgba(15,122,79,0.09), transparent 30%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(15,122,79,0.03) 1px, transparent 1px), linear-gradient(rgba(15,122,79,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.55,
        }}
      />

      <Stack spacing={3} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <Box sx={{ position: 'relative', width: 170, height: 170, display: 'grid', placeItems: 'center' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 4.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(15,122,79,0.12)',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 6.5 }}
            style={{
              position: 'absolute',
              inset: 14,
              borderRadius: '50%',
              border: '1px solid rgba(15,122,79,0.24)',
              borderTopColor: '#0f7a4f',
              borderRightColor: 'rgba(15,122,79,0.08)',
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ repeat: Infinity, duration: 1.7 }}
            style={{
              position: 'absolute',
              inset: 34,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0f7a4f 0%, #0a5a39 100%)',
              boxShadow: '0 22px 50px rgba(15,122,79,0.24)',
            }}
          />
          <Box
            component="img"
            src="/fareast-logo.webp"
            alt="Fareast Calibration logo"
            sx={{ width: 62, height: 62, borderRadius: '50%', position: 'relative', zIndex: 1, bgcolor: 'white', p: 0.75, objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5, color: 'primary.main', letterSpacing: 1 }}>
            PT. Fareast Calibration Services
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
            Precision Metrology Services
          </Typography>
        </Box>

        <Box sx={{ width: 240, height: 3, borderRadius: 999, bgcolor: 'rgba(15,122,79,0.10)', overflow: 'hidden', mt: 2 }}>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, #0f7a4f, transparent)',
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default BrandLoader;
