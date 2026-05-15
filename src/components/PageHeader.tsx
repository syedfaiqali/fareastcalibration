import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link, Stack, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ShieldCheck } from 'lucide-react';

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
        background: 'linear-gradient(135deg, #0f7a4f 0%, #0a5a39 55%, #0d3f2b 100%)',
        pt: { xs: 10, md: 12 },
        pb: { xs: 9, md: 11 },
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
            <Chip icon={<BadgeCheck size={14} />} label="Traceable workflows" sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: 'white' }} />
            <Chip icon={<ShieldCheck size={14} />} label="Audit-ready reports" sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: 'white' }} />
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
              fontSize: { xs: '2.6rem', md: '4.2rem' },
              lineHeight: 1.02,
              mb: subtitle ? 2 : 0,
              maxWidth: 900,
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: 760,
                lineHeight: 1.7,
                opacity: 0.88,
                fontWeight: 400,
                fontSize: { xs: '1.02rem', md: '1.18rem' },
              }}
            >
              {subtitle}
            </Typography>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default PageHeader;
