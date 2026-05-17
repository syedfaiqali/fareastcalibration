import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider, Chip, Button, Dialog, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import directorImg from '../assets/director.png';
import {
  BadgeCheck,
  ClipboardCheck,
  Eye,
  HeartHandshake,
  Sparkles,
  Target,
  Users,
  Quote,
  TrendingUp,
  ShieldCheck,
  Award,
  ThermometerSun,
  Zap,
  Shield,
  Clock,
  CircleDollarSign,
  Truck,
  GraduationCap,
  Gem,
  Download,
  X,
  ArrowDown,
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';
const brandGreenDark = '#0d3f2b';
const softBlue = '#edf5ff';
const softGreen = '#f4fbf7';

const fadeInUp: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }
};

const BackgroundElements = () => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <MotionBox
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.05, 0.08, 0.05]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      sx={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '40vw',
        height: '40vw',
        background: `radial-gradient(circle, ${brandGreen} 0%, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    />
    <MotionBox
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, -45, 0],
        opacity: [0.03, 0.06, 0.03]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      sx={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: `radial-gradient(circle, ${brandBlue} 0%, transparent 70%)`,
        filter: 'blur(100px)',
      }}
    />
  </Box>
);

const keyFeatures = [
  { text: 'Accredited Calibration Laboratory by KAN (ISO/IEC 17025:2017)', icon: Shield },
  { text: 'Certified for ISO 9001:2015 management system', icon: Award },
  { text: 'Committed to delivery within lead time', icon: Clock },
  { text: 'Competitive price with no hidden charges', icon: CircleDollarSign },
  { text: 'Free pickup and delivery within Batam', icon: Truck },
  { text: 'Trained and competent laboratory technicians', icon: GraduationCap },
];

const strategicAdvantages = [
  {
    title: 'NIST & KAN Traceability',
    desc: 'Our measurements are directly traceable to national and international standards, ensuring global acceptance.',
    icon: ShieldCheck,
    color: brandGreen
  },
  {
    title: 'Controlled Lab Environment',
    desc: 'Strictly monitored temperature and humidity controls for maximum measurement stability.',
    icon: ThermometerSun,
    color: brandBlue
  },
  {
    title: 'Automated Reporting',
    desc: 'Digitized certificate generation for faster turnaround and error-free documentation.',
    icon: Zap,
    color: '#0c3f8f'
  },
  {
    title: 'Expert Consultation',
    desc: 'Our technical team provides deep insights into measurement uncertainty and instrument optimization.',
    icon: Users,
    color: brandGreen
  },
];

const jobExecutionSteps = [
  { title: 'Customer Inquiry', desc: 'Initial contact through email or phone call.' },
  { title: 'Quotation Submission', desc: 'Fareast Calibration provides detailed pricing.' },
  { title: 'Approval & PO', desc: 'Customer approves and raises Purchase Order.' },
  { title: 'Instrument Collection', desc: 'Equipment is picked up or delivered to lab.' },
  { title: 'UUT Inspection', desc: 'Technical inspection and record entry.' },
  { title: 'Calibration & Test', desc: 'Rigorous testing against standards.' },
  { title: 'Certificate Issued', desc: 'Issuance of official calibration documents.' },
  { title: 'Final Delivery', desc: 'Equipment returned safely to customer.' },
];

const certificates = [
  {
    label: 'KAN Accredited',
    title: 'KAN Accreditation Certificate',
    file: '/certificates/fec-scan-profile.pdf',
    icon: ShieldCheck,
  },
  {
    label: 'ISO 9001:2015',
    title: 'ISO 9001:2015 Certificate',
    file: '/certificates/fec-scan-profile.pdf',
    icon: Award,
  },
];


const AboutUs: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);

  return (
    <Box sx={{ bgcolor: '#ffffff', position: 'relative' }}>
      <PageHeader
        title="About Us"
        subtitle="PT. Fareast Calibration & Testing Services is a fast growing calibration and testing laboratory in Batam, Indonesia."
      />

      {/* 1. Intro Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <Stack spacing={4}>
                <Chip icon={<Gem size={14} />} label="ESTABLISHED 2014" sx={{ width: 'fit-content', bgcolor: 'rgba(0,27,94,0.08)', color: brandBlue, fontWeight: 800, letterSpacing: 2, px: 2, py: 2.5, borderRadius: '12px', border: '1px solid rgba(0,27,94,0.14)' }} />
                <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                  ABOUT <Box component="span" sx={{ color: brandGreen, position: 'relative' }}>US<Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: '8px', bgcolor: 'rgba(15,122,79,0.14)', zIndex: -1 }} /></Box>
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 400, fontSize: '1.25rem' }}>
                  PT. FAREAST CALIBRATION & TESTING SERVICES is a fast growing and integrated calibration & testing laboratory in Batam, Indonesia.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.1rem', opacity: 0.9 }}>
                  Since 2014 we are providing quality services, with low price, best lead time and according to customer target price. Accredited by KAN Indonesia (ISO/IEC 17025:2017) and certified for ISO 9001:2015.
                </Typography>
                <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
                  {certificates.map((item, idx) => (
                    <Box
                      key={idx}
                      component="button"
                      type="button"
                      onClick={() => setSelectedCertificate(item)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 2,
                        borderRadius: '16px',
                        bgcolor: 'white',
                        boxShadow: '0 14px 34px rgba(0,27,94,0.07)',
                        border: '1px solid rgba(0,27,94,0.08)',
                        cursor: 'pointer',
                        font: 'inherit',
                        textAlign: 'left',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          borderColor: idx % 2 ? 'rgba(0,27,94,0.20)' : 'rgba(15,122,79,0.24)',
                          boxShadow: '0 20px 42px rgba(0,27,94,0.12)',
                        },
                      }}
                    >
                      <Box sx={{ color: idx % 2 ? brandBlue : brandGreen, bgcolor: idx % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.1)', p: 1, borderRadius: '10px' }}><item.icon size={24} /></Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandBlue }}>{item.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </MotionBox>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" sx={{ width: '100%', height: { xs: 400, md: 600 }, objectFit: 'cover', borderRadius: '42px', border: '1px solid rgba(0,27,94,0.12)', boxShadow: '0 50px 100px rgba(0,27,94,0.16)' }} />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* 2. Director Message */}
      <Box sx={{
        py: { xs: 12, md: 20 }, position: 'relative', overflow: 'hidden', bgcolor: brandBlue, background: `
            radial-gradient(circle at 78% 18%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.24) 32%, transparent 52%),
            radial-gradient(circle at 12% 85%, rgba(0,27,94,0.30) 0%, transparent 36%),
            linear-gradient(135deg, #0d3f2b 0%, #0f7a4f 68%, #001b5e 100%)
          `,
      }}>
        <BackgroundElements />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <Box component="img" src={directorImg} alt="Director" sx={{ width: '100%', height: { xs: 450, md: 700 }, objectFit: 'cover', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 60px 120px rgba(0,27,94,0.45)' }} />
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp}>
                <Stack spacing={5}>
                  <Box>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.70)', fontWeight: 900, letterSpacing: 6 }}>DIRECTOR'S CORNER</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, color: 'white', mt: 2, lineHeight: 1.1 }}>Message from the <Box component="span" sx={{ color: '#7edaa9' }}>Director</Box></Typography>
                  </Box>
                  <Box sx={{ position: 'relative' }}>
                    <Quote size={100} style={{ position: 'absolute', top: -40, left: -40, color: '#7edaa9', opacity: 0.15 }} />
                    <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'white', fontWeight: 400, lineHeight: 1.6, position: 'relative', pl: 2, borderLeft: '4px solid #7edaa9' }}>
                      "Progress for me has never been a dream. It has always been a distant reality and once one milestone is achieved, there is always another one waiting to be crossed."
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Since 2014, Fareast Calibration & Testing Services has been built on the 3P's: Precision, Perfection, and Professionalism. Our accreditation by KAN Indonesia (ISO/IEC 17025:2017 & ISO:9001-2015) marks a significant milestone in our journey toward excellence.
                  </Typography>
                  <Stack direction="row" spacing={3} sx={{ alignItems: 'center', pt: 2 }}>
                    <Divider sx={{ width: 80, height: '4px', bgcolor: '#7edaa9', borderRadius: 2 }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: 'white' }}>Muhammad Aamir</Typography>
                      <Typography variant="subtitle1" sx={{ color: '#7edaa9', fontWeight: 800, letterSpacing: 2 }}>DIRECTOR OPERATIONS</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Vision & Mission */}
      <Box sx={{ py: { xs: 12, md: 15 }, position: 'relative', overflow: 'hidden', bgcolor: softBlue }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {[{ title: 'OUR VISION', icon: Eye, text: 'To become a well-known and trusted accredited calibration laboratory, recognized as one of the best service providers in the region.' },
            { title: 'OUR MISSION', icon: Target, text: 'To deliver high-quality services by continuously improving our methods and instrumentation to complement new measurement technology.' }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <MotionPaper
                  {...fadeInUp}
                  transition={{ delay: i * 0.2 }}
                  sx={{
                    p: { xs: 4, md: 5.5 },
                    height: '100%',
                    minHeight: 390,
                    borderRadius: '34px',
                    bgcolor: 'rgba(255,255,255,0.94)',
                    border: '1px solid rgba(0,27,94,0.10)',
                    boxShadow: '0 30px 70px rgba(0,27,94,0.10)',
                    transition: '0.5s',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderTop: `6px solid ${i % 2 ? brandBlue : brandGreen}`,
                      borderRadius: 'inherit',
                      pointerEvents: 'none',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      right: -70,
                      top: -70,
                      width: 190,
                      height: 190,
                      borderRadius: '50%',
                      background: i % 2
                        ? 'radial-gradient(circle, rgba(0,27,94,0.16), transparent 64%)'
                        : 'radial-gradient(circle, rgba(15,122,79,0.18), transparent 64%)',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 46px 90px rgba(0,27,94,0.16)',
                      borderColor: i % 2 ? 'rgba(15,122,79,0.24)' : 'rgba(0,27,94,0.22)',
                    },
                    '&:hover::before': {
                      borderTopColor: i % 2 ? brandGreen : brandBlue,
                    },
                    '&:hover::after': {
                      background: i % 2
                        ? 'radial-gradient(circle, rgba(15,122,79,0.18), transparent 64%)'
                        : 'radial-gradient(circle, rgba(0,27,94,0.16), transparent 64%)',
                    },
                    '&:hover .vision-icon': {
                      bgcolor: i % 2 ? 'rgba(15,122,79,0.10)' : 'rgba(0,27,94,0.08)',
                      color: i % 2 ? brandGreen : brandBlue,
                      borderColor: i % 2 ? 'rgba(15,122,79,0.16)' : 'rgba(0,27,94,0.12)',
                      boxShadow: i % 2 ? '0 16px 34px rgba(15,122,79,0.10)' : '0 16px 34px rgba(0,27,94,0.10)',
                    },
                    '&:hover .vision-index': {
                      color: i % 2 ? brandGreen : brandBlue,
                    },
                    '&:hover .vision-rule': {
                      background: `linear-gradient(90deg, ${i % 2 ? brandGreen : brandBlue}, transparent)`,
                    },
                    '&:hover .vision-title': {
                      color: i % 2 ? brandGreen : brandBlue,
                    },
                    '&:hover .vision-text': {
                      color: i % 2 ? 'rgba(15,122,79,0.82)' : 'rgba(0,27,94,0.78)',
                    }
                  }}
                >
                  <Stack spacing={3.5} sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                      <Box
                        className="vision-icon"
                        sx={{
                          width: 86,
                          height: 86,
                          borderRadius: '26px',
                          bgcolor: i % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.10)',
                          color: i % 2 ? brandBlue : brandGreen,
                          border: i % 2 ? '1px solid rgba(0,27,94,0.12)' : '1px solid rgba(15,122,79,0.16)',
                          display: 'grid',
                          placeItems: 'center',
                          boxShadow: i % 2 ? '0 16px 34px rgba(0,27,94,0.10)' : '0 16px 34px rgba(15,122,79,0.10)',
                        }}
                      >
                        <item.icon size={42} strokeWidth={2.2} />
                      </Box>
                      <Typography className="vision-index" variant="overline" sx={{ color: i % 2 ? brandBlue : brandGreen, fontWeight: 900, letterSpacing: 2, transition: 'color 0.35s ease' }}>
                        0{i + 1}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="vision-title" variant="h3" sx={{ fontWeight: 900, color: i % 2 ? brandBlue : brandGreen, mb: 2, letterSpacing: 0, transition: 'color 0.35s ease' }}>{item.title}</Typography>
                      <Box className="vision-rule" sx={{ width: 72, height: 4, borderRadius: 999, background: `linear-gradient(90deg, ${i % 2 ? brandBlue : brandGreen}, transparent)`, mb: 3, transition: 'background 0.35s ease' }} />
                      <Typography className="vision-text" variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.75, transition: 'color 0.35s ease' }}>{item.text}</Typography>
                    </Box>
                  </Stack>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Customer Message */}
      {/* <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <MotionBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} sx={{ p: { xs: 6, md: 10 }, borderRadius: '44px', background: `radial-gradient(circle at 80% 20%, rgba(79,179,127,0.28), transparent 34%), linear-gradient(135deg, ${brandBlue} 0%, ${brandGreenDark} 44%, ${brandGreen} 100%)`, color: 'white', position: 'relative', boxShadow: '0 50px 100px rgba(0,27,94,0.22)', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: -40, right: -40, opacity: 0.1 }}><Quote size={350} /></Box>
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#7edaa9', width: 56, height: 56 }}><MessageCircle size={30} /></Avatar>
                  <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 900, color: '#7edaa9' }}>CUSTOMER MESSAGE</Typography>
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>Your Trust, Our <Box component="span" sx={{ color: '#7edaa9' }}>Commitment</Box></Typography>
                <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.8, fontStyle: 'italic' }}>"At PT. Fareast Calibration, we believe that precision is not just a service, but a promise."</Typography>
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Avatar src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80" sx={{ width: 72, height: 72, border: '4px solid rgba(79, 179, 127, 0.5)' }} />
                  <Box><Typography variant="h6" sx={{ fontWeight: 900 }}>Client Relations Team</Typography><Typography variant="subtitle2" sx={{ opacity: 0.7 }}>PT. Fareast Calibration & Testing Services</Typography></Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" sx={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: '34px', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 30px 60px rgba(0,27,94,0.30)', transform: { md: 'translateX(30px) rotate(3deg)' } }} />
            </Grid>
          </Grid>
        </MotionBox>
      </Container> */}

      {/* 5. UPGRADED: WHY CHOOSE US - STAGGERED PREMIUM LIST */}
      <Box sx={{ py: { xs: 12, md: 20 }, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(circle at 0% 18%, rgba(237,245,255,0.60), transparent 26%), radial-gradient(circle at 88% 20%, rgba(15,122,79,0.08), transparent 28%)` }} />
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox
                {...fadeInUp}
                sx={{
                  position: 'relative',
                  pl: { xs: 0, md: 3 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    bottom: 6,
                    width: { xs: 0, md: 5 },
                    borderRadius: 999,
                    background: `linear-gradient(180deg, ${brandGreen}, ${brandBlue})`,
                  },
                }}
              >
                <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 900, letterSpacing: 6 }}>EXCELLENCE IN CALIBRATION</Typography>
                <Typography variant="h2" sx={{ fontWeight: 950, color: brandBlue, mt: 2, mb: 4, lineHeight: 1.05, textShadow: '0 1px 0 #ffffff, 0 18px 42px rgba(0,27,94,0.10)' }}>
                  The <Box component="span" sx={{ color: brandGreen }}>Standard</Box> of Professionalism
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8, mb: 6 }}>
                  Our commitment to precision is matched only by our dedication to client satisfaction. We provide more than just numbers; we provide assurance.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 3, p: 4, borderRadius: '30px', bgcolor: 'white', border: '1px solid rgba(0,27,94,0.08)', boxShadow: '0 20px 40px rgba(0,27,94,0.06)' }}>
                    <Box sx={{ p: 2, borderRadius: '20px', bgcolor: 'rgba(15,122,79,0.1)', color: brandGreen }}><BadgeCheck size={32} /></Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: brandBlue }}>100% Quality Assurance</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>No compromise on technical accuracy.</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 3, p: 4, borderRadius: '30px', bgcolor: brandBlue, background: `linear-gradient(135deg, ${brandBlue} 0%, ${brandGreenDark} 100%)`, color: 'white', boxShadow: '0 20px 40px rgba(0,27,94,0.18)' }}>
                    <Box sx={{ p: 2, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.1)', color: '#7edaa9' }}><Clock size={32} /></Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 900 }}>Fast Turnaround</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Express calibration with extra charges.</Typography>
                    </Box>
                  </Box>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {keyFeatures.map((feature, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <MotionPaper
                      whileHover={{ scale: 1.05, y: -10 }}
                      sx={{
                        p: 4,
                        height: '100%',
                        borderRadius: '35px',
                        bgcolor: 'white',
                        border: '1px solid rgba(0,27,94,0.08)',
                        boxShadow: '0 15px 35px rgba(0,27,94,0.04)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': { boxShadow: '0 30px 60px rgba(0,27,94,0.12)' }
                      }}
                    >
                      <Box sx={{ width: 64, height: 64, borderRadius: '20px', bgcolor: i % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.10)', color: i % 2 ? brandBlue : brandGreen, display: 'grid', placeItems: 'center', mb: 3 }}>
                        <feature.icon size={30} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: brandBlue, lineHeight: 1.4 }}>{feature.text}</Typography>
                    </MotionPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. NEW: TECHNICAL EXCELLENCE - HIGH IMPACT SECTION */}
      <Box sx={{ py: { xs: 15, md: 25 }, bgcolor: softBlue, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, backgroundImage: `radial-gradient(${brandBlue} 2px, transparent 2px)`, backgroundSize: '60px 60px' }} />
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox {...fadeInUp}>
                <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 900, letterSpacing: 6 }}>TECHNICAL PROWESS</Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, mt: 2, mb: 4, lineHeight: 1.1 }}>
                  The Science of <Box component="span" sx={{ color: brandGreen }}>Precision</Box>
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.8, mb: 6 }}>
                  We don't just measure; we validate your operational integrity. Our laboratory is designed to exceed international standards in every technical dimension.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ p: 4, borderRadius: '30px', bgcolor: 'rgba(255,255,255,0.76)', border: '1px solid rgba(0,27,94,0.10)', boxShadow: '0 18px 44px rgba(0,27,94,0.06)' }}>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: brandBlue, mb: 1 }}>99.9% Accuracy Rate</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our calibration processes are refined through continuous proficiency testing.</Typography>
                  </Box>
                </Stack>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {strategicAdvantages.map((item, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <MotionPaper
                      whileHover={{ y: -15, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      sx={{
                        p: 5,
                        height: '100%',
                        borderRadius: '40px',
                        bgcolor: 'white',
                        border: '1px solid rgba(0,27,94,0.08)',
                        boxShadow: '0 20px 50px rgba(0,27,94,0.06)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: `radial-gradient(circle at top right, ${item.color}15, transparent 70%)`,
                          borderRadius: '0 0 0 100%'
                        }
                      }}
                    >
                      <Box sx={{ width: 64, height: 64, borderRadius: '18px', bgcolor: `${item.color}15`, color: item.color, display: 'grid', placeItems: 'center' }}>
                        <item.icon size={32} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 900, color: brandBlue, mb: 1.5 }}>{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.desc}</Typography>
                      </Box>
                    </MotionPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 7. UPGRADED: OPERATIONAL FLOW - CONNECTED TIMELINE */}
      <Box sx={{ py: { xs: 15, md: 20 }, bgcolor: brandBlue, background: `
            radial-gradient(circle at 78% 18%, rgba(79,179,127,0.42) 0%, rgba(15,122,79,0.24) 32%, transparent 52%),
            radial-gradient(circle at 12% 85%, rgba(0,27,94,0.30) 0%, transparent 36%),
            linear-gradient(135deg, #0d3f2b 0%, #0f7a4f 60%, #001b5e 100%)
          `, position: 'relative', overflow: 'hidden' }}>
        <BackgroundElements />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" sx={{ color: '#7edaa9', fontWeight: 900, letterSpacing: 6 }}>OPERATIONAL FLOW</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: 'white' }}>From Enquiry to <Box component="span" sx={{ color: '#7edaa9' }}>Delivery</Box></Typography>
          </Stack>

          <Box sx={{ position: 'relative', maxWidth: 1140, mx: 'auto' }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: 32, md: '50%' },
                width: 2,
                bgcolor: 'rgba(255,255,255,0.12)',
                transform: { md: 'translateX(-50%)' },
                zIndex: 0,
              }}
            />

            <Grid container rowSpacing={{ xs: 5, md: 7 }}>
              {jobExecutionSteps.map((step, i) => (
                <Grid key={i} size={12}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '64px 1fr', md: '1fr 96px 1fr' },
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        gridColumn: { xs: '1', md: '2' },
                        gridRow: 1,
                        width: { xs: 54, md: 64 },
                        height: { xs: 54, md: 64 },
                        borderRadius: '50%',
                        bgcolor: brandGreen,
                        color: 'white',
                        display: 'grid',
                        placeItems: 'center',
                        fontWeight: 900,
                        fontSize: { xs: '1.2rem', md: '1.45rem' },
                        boxShadow: '0 0 0 10px rgba(15,122,79,0.10), 0 18px 42px rgba(15,122,79,0.32)',
                        justifySelf: { xs: 'center', md: 'center' },
                        zIndex: 2,
                      }}
                    >
                      {i + 1}
                    </Box>
                    <MotionBox
                      {...fadeInUp}
                      sx={{
                        gridColumn: { xs: '2', md: i % 2 === 0 ? '3' : '1' },
                        gridRow: 1,
                        width: '100%',
                        p: { xs: 3, md: 4 },
                        borderRadius: { xs: '26px', md: '36px' },
                        bgcolor: 'rgba(255,255,255,0.045)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        position: 'relative',
                        boxShadow: '0 24px 70px rgba(0,27,94,0.18)',
                        justifySelf: { md: i % 2 === 0 ? 'start' : 'end' },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          width: { xs: 24, md: 56 },
                          height: 3,
                          bgcolor: '#7edaa9',
                          borderRadius: 999,
                          transform: 'translateY(-50%)',
                          left: { xs: -24, md: i % 2 === 0 ? -56 : 'auto' },
                          right: { xs: 'auto', md: i % 2 === 0 ? 'auto' : -56 },
                          boxShadow: '0 0 18px rgba(126,218,169,0.32)',
                        },
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.08)',
                          transform: 'translateY(-6px)',
                          borderColor: 'rgba(126,218,169,0.28)',
                        }
                      }}
                    >
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#7edaa9' }}>
                          <ClipboardCheck size={24} />
                          <Typography variant="h4" sx={{ fontWeight: 900, color: 'white' }}>{step.title}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6 }}>{step.desc}</Typography>
                      </Stack>
                    </MotionBox>
                    {i < jobExecutionSteps.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          left: { xs: 32, md: '50%' },
                          bottom: { xs: -42, md: -48 },
                          transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                          width: 38,
                          height: 38,
                          borderRadius: '50%',
                          bgcolor: 'rgba(15,122,79,0.95)',
                          color: 'white',
                          display: 'grid',
                          placeItems: 'center',
                          border: '1px solid rgba(255,255,255,0.18)',
                          boxShadow: '0 16px 34px rgba(15,122,79,0.28)',
                          zIndex: 3,
                        }}
                      >
                        <ArrowDown size={20} strokeWidth={3} />
                      </Box>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 8. Core Values */}
      <Box sx={{ py: { xs: 12, md: 15 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: brandGreen, fontWeight: 900, letterSpacing: 5 }}>CORE ETHOS</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue }}>Built on <Box component="span" sx={{ color: brandGreen }}>Integrity</Box></Typography>
          </Stack>
          <Grid container spacing={4}>
            {[{ title: 'Integrity', icon: BadgeCheck, text: 'Support for doing the right thing.' },
            { title: 'Excellence', icon: TrendingUp, text: 'Keep raising the bar.' },
            { title: 'Commitment', icon: HeartHandshake, text: 'Encourage employees to achieve their potential.' },
            { title: 'Team work', icon: Sparkles, text: 'We are one.' }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <MotionPaper whileHover={{ y: -20, rotate: i % 2 === 0 ? 1 : -1 }} sx={{ p: 6, height: '100%', borderRadius: '42px', bgcolor: i % 2 ? softBlue : softGreen, border: '1px solid rgba(0,27,94,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: '0.6s', '&:hover': { bgcolor: 'white', boxShadow: '0 50px 100px rgba(0,27,94,0.12)' } }}>
                  <Box sx={{ width: 100, height: 100, borderRadius: '35px', bgcolor: i % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.10)', color: i % 2 ? brandBlue : brandGreen, display: 'grid', placeItems: 'center', mb: 4 }}><item.icon size={48} /></Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: brandBlue }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>{item.text}</Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Dialog
        open={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        fullWidth
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              height: { xs: '88vh', md: '90vh' },
              borderRadius: { xs: 3, md: 4 },
              overflow: 'hidden',
              border: '1px solid rgba(0,27,94,0.12)',
            },
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, md: 3 },
            py: 1.5,
            bgcolor: brandBlue,
            color: 'white',
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.2 }}>
              {selectedCertificate?.title}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.72)' }}>
              PT. Fareast Calibration & Testing Services
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button
              component="a"
              href={selectedCertificate?.file || '#'}
              download
              target="_blank"
              rel="noreferrer"
              startIcon={<Download size={18} />}
              sx={{
                color: 'white',
                border: '1px solid rgba(255,255,255,0.22)',
                bgcolor: 'rgba(255,255,255,0.08)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.16)' },
              }}
            >
              Download
            </Button>
            <IconButton
              aria-label="Close certificate viewer"
              onClick={() => setSelectedCertificate(null)}
              sx={{
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.08)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.16)' },
              }}
            >
              <X size={22} />
            </IconButton>
          </Stack>
        </Stack>
        <Box
          component="iframe"
          src={selectedCertificate?.file}
          title={selectedCertificate?.title || 'Certificate PDF'}
          sx={{
            width: '100%',
            height: '100%',
            border: 0,
            bgcolor: '#f8fafc',
          }}
        />
      </Dialog>
    </Box>
  );
};

export default AboutUs;



