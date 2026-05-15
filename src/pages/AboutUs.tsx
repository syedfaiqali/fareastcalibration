import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider, Chip, Avatar, Button } from '@mui/material';
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
  MessageCircle,
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
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

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
        background: 'radial-gradient(circle, #0f7a4f 0%, transparent 70%)',
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
        background: 'radial-gradient(circle, #0d3f2b 0%, transparent 70%)',
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
    color: '#0f7a4f'
  },
  { 
    title: 'Controlled Lab Environment', 
    desc: 'Strictly monitored temperature and humidity controls for maximum measurement stability.',
    icon: ThermometerSun,
    color: '#0d3f2b'
  },
  { 
    title: 'Automated Reporting', 
    desc: 'Digitized certificate generation for faster turnaround and error-free documentation.',
    icon: Zap,
    color: '#16a34a'
  },
  { 
    title: 'Expert Consultation', 
    desc: 'Our technical team provides deep insights into measurement uncertainty and instrument optimization.',
    icon: Users,
    color: '#22c55e'
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



const AboutUs: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#fdfdfd', position: 'relative' }}>
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
                <Chip icon={<Gem size={14} />} label="ESTABLISHED 2014" sx={{ width: 'fit-content', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', fontWeight: 800, letterSpacing: 2, px: 2, py: 2.5, borderRadius: '12px', border: '1px solid rgba(15,122,79,0.2)' }} />
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                  ABOUT <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>US<Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: '8px', bgcolor: 'rgba(15,122,79,0.1)', zIndex: -1 }} /></Box>
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 400, fontSize: '1.25rem' }}>
                  PT. FAREAST CALIBRATION & TESTING SERVICES is a fast growing and integrated calibration & testing laboratory in Batam, Indonesia.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.1rem', opacity: 0.9 }}>
                  Since 2014 we are providing quality services, with low price, best lead time and according to customer target price. Accredited by KAN Indonesia (ISO/IEC 17025:2017) and certified for ISO 9001:2015.
                </Typography>
                <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
                  {[{ label: 'KAN Accredited', icon: ShieldCheck }, { label: 'ISO 9001:2015', icon: Award }].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, borderRadius: '16px', bgcolor: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <Box sx={{ color: 'primary.main', bgcolor: 'rgba(15,122,79,0.1)', p: 1, borderRadius: '10px' }}><item.icon size={24} /></Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'secondary.main' }}>{item.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </MotionBox>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" sx={{ width: '100%', height: { xs: 400, md: 600 }, objectFit: 'cover', borderRadius: '50px', boxShadow: '0 50px 100px rgba(15,122,79,0.2)' }} />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* 2. Director Message */}
      <Box sx={{ py: { xs: 12, md: 20 }, position: 'relative', overflow: 'hidden', bgcolor: 'secondary.main' }}>
        <BackgroundElements />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <Box component="img" src={directorImg} alt="Director" sx={{ width: '100%', height: { xs: 450, md: 700 }, objectFit: 'cover', borderRadius: '60px', boxShadow: '0 60px 120px rgba(0,0,0,0.4)' }} />
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp}>
                <Stack spacing={5}>
                  <Box>
                    <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 900, letterSpacing: 6 }}>DIRECTOR'S CORNER</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, color: 'white', mt: 2, lineHeight: 1.1 }}>Message from the <Box component="span" sx={{ color: 'primary.light' }}>Director</Box></Typography>
                  </Box>
                  <Box sx={{ position: 'relative' }}>
                    <Quote size={100} style={{ position: 'absolute', top: -40, left: -40, color: '#4fb37f', opacity: 0.15 }} />
                    <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'white', fontWeight: 400, lineHeight: 1.6, position: 'relative', pl: 2, borderLeft: '4px solid #4fb37f' }}>
                      "Progress for me has never been a dream. It has always been a distant reality and once one milestone is achieved, there is always another one waiting to be crossed."
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Since 2014, Fareast Calibration & Testing Services has been built on the 3P's: Precision, Perfection, and Professionalism. Our accreditation by KAN Indonesia (ISO/IEC 17025:2017) marks a significant milestone in our journey toward excellence.
                  </Typography>
                  <Stack direction="row" spacing={3} sx={{ alignItems: 'center', pt: 2 }}>
                    <Divider sx={{ width: 80, height: '4px', bgcolor: 'primary.light', borderRadius: 2 }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: 'white' }}>Muhammad Aamir</Typography>
                      <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 800, letterSpacing: 2 }}>DIRECTOR OPERATIONS</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Vision & Mission */}
      <Box sx={{ py: { xs: 12, md: 15 }, position: 'relative', overflow: 'hidden', bgcolor: '#f4fbf7' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {[{ title: 'OUR VISION', icon: Eye, text: 'To become a well-known and trusted accredited calibration laboratory, recognized as one of the best service providers in the region.' },
              { title: 'OUR MISSION', icon: Target, text: 'To deliver high-quality services by continuously improving our methods and instrumentation to complement new measurement technology.' }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <MotionPaper {...fadeInUp} transition={{ delay: i * 0.2 }} sx={{ p: 6, height: '100%', borderRadius: '40px', bgcolor: 'white', border: '1px solid rgba(15,122,79,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.03)', transition: '0.5s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 40px 80px rgba(15,122,79,0.1)' } }}>
                  <Stack spacing={4}>
                    <Box sx={{ width: 80, height: 80, borderRadius: '24px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', display: 'grid', placeItems: 'center' }}><item.icon size={44} /></Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main' }}>{item.title}</Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.7 }}>{item.text}</Typography>
                  </Stack>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Customer Message */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <MotionBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} sx={{ p: { xs: 6, md: 10 }, borderRadius: '60px', background: 'linear-gradient(135deg, #0d3f2b 0%, #0f7a4f 100%)', color: 'white', position: 'relative', boxShadow: '0 50px 100px rgba(15, 122, 79, 0.3)', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: -40, right: -40, opacity: 0.1 }}><Quote size={350} /></Box>
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'primary.light', width: 56, height: 56 }}><MessageCircle size={30} /></Avatar>
                  <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 900, color: 'primary.light' }}>CUSTOMER MESSAGE</Typography>
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>Your Trust, Our <Box component="span" sx={{ color: 'primary.light' }}>Commitment</Box></Typography>
                <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.8, fontStyle: 'italic' }}>"At PT. Fareast Calibration, we believe that precision is not just a service, but a promise."</Typography>
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Avatar src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80" sx={{ width: 72, height: 72, border: '4px solid rgba(79, 179, 127, 0.5)' }} />
                  <Box><Typography variant="h6" sx={{ fontWeight: 900 }}>Client Relations Team</Typography><Typography variant="subtitle2" sx={{ opacity: 0.7 }}>PT. Fareast Calibration & Testing Services</Typography></Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" sx={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', transform: { md: 'translateX(30px) rotate(3deg)' } }} />
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      {/* 5. UPGRADED: WHY CHOOSE US - STAGGERED PREMIUM LIST */}
      <Box sx={{ py: { xs: 12, md: 20 }, bgcolor: '#f8fafc', position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox {...fadeInUp}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 6 }}>EXCELLENCE IN CALIBRATION</Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 2, mb: 4, lineHeight: 1.1 }}>
                  The <Box component="span" sx={{ color: 'primary.main' }}>Standard</Box> of Professionalism
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8, mb: 6 }}>
                  Our commitment to precision is matched only by our dedication to client satisfaction. We provide more than just numbers; we provide assurance.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 3, p: 4, borderRadius: '30px', bgcolor: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                    <Box sx={{ p: 2, borderRadius: '20px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main' }}><BadgeCheck size={32} /></Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main' }}>100% Quality Assurance</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>No compromise on technical accuracy.</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 3, p: 4, borderRadius: '30px', bgcolor: 'secondary.main', color: 'white', boxShadow: '0 20px 40px rgba(13,63,43,0.2)' }}>
                    <Box sx={{ p: 2, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.1)', color: 'primary.light' }}><Clock size={32} /></Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 900 }}>Fast Turnaround</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Express calibration with no extra charges.</Typography>
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
                        border: '1px solid rgba(0,0,0,0.03)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.02)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': { boxShadow: '0 30px 60px rgba(15,122,79,0.1)' }
                      }}
                    >
                      <Box sx={{ width: 64, height: 64, borderRadius: '20px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', display: 'grid', placeItems: 'center', mb: 3 }}>
                        <feature.icon size={30} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', lineHeight: 1.4 }}>{feature.text}</Typography>
                    </MotionPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. NEW: TECHNICAL EXCELLENCE - HIGH IMPACT SECTION */}
      <Box sx={{ py: { xs: 15, md: 25 }, bgcolor: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.02, backgroundImage: 'radial-gradient(#0f7a4f 2px, transparent 2px)', backgroundSize: '60px 60px' }} />
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox {...fadeInUp}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 6 }}>TECHNICAL PROWESS</Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 2, mb: 4, lineHeight: 1.1 }}>
                  The Science of <Box component="span" sx={{ color: 'primary.main' }}>Precision</Box>
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.8, mb: 6 }}>
                  We don't just measure; we validate your operational integrity. Our laboratory is designed to exceed international standards in every technical dimension.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ p: 4, borderRadius: '30px', bgcolor: '#f4fbf7', border: '1px solid rgba(15,122,79,0.1)' }}>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', mb: 1 }}>99.9% Accuracy Rate</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our calibration processes are refined through continuous proficiency testing.</Typography>
                  </Box>
                  <Button variant="contained" size="large" sx={{ borderRadius: '20px', py: 2, px: 5, fontWeight: 900, boxShadow: '0 20px 40px rgba(15,122,79,0.2)' }}>
                    View Technical Scope
                  </Button>
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
                        border: '1px solid rgba(0,0,0,0.04)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
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
                        <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main', mb: 1.5 }}>{item.title}</Typography>
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
      <Box sx={{ py: { xs: 15, md: 20 }, bgcolor: 'secondary.main', position: 'relative', overflow: 'hidden' }}>
        <BackgroundElements />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 900, letterSpacing: 6 }}>OPERATIONAL FLOW</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: 'white' }}>From Enquiry to <Box component="span" sx={{ color: 'primary.light' }}>Delivery</Box></Typography>
          </Stack>

          <Box sx={{ position: 'relative' }}>
            {/* Connection Line */}
            <Box sx={{ position: 'absolute', top: 0, left: { xs: '30px', md: '50%' }, bottom: 0, width: '2px', bgcolor: 'rgba(255,255,255,0.1)', transform: { md: 'translateX(-50%)' }, zIndex: 0 }} />

            <Grid container spacing={6}>
              {jobExecutionSteps.map((step, i) => (
                <Grid key={i} size={12}>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: i % 2 === 0 ? 'flex-end' : 'flex-start' }, position: 'relative' }}>
                    <MotionBox
                      {...fadeInUp}
                      sx={{
                        width: { xs: 'calc(100% - 60px)', md: '45%' },
                        p: 5,
                        borderRadius: '40px',
                        bgcolor: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        ml: { xs: '60px', md: 0 },
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', transform: 'translateY(-5px)' }
                      }}
                    >
                      {/* Step Number Circle */}
                      <Box sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: { xs: '-75px', md: i % 2 === 0 ? 'calc(100% + 40px)' : '-100px' }, 
                        width: 60, 
                        height: 60, 
                        borderRadius: '50%', 
                        bgcolor: 'primary.main', 
                        color: 'white', 
                        display: 'grid', 
                        placeItems: 'center', 
                        fontWeight: 900, 
                        fontSize: '1.5rem',
                        boxShadow: '0 0 30px rgba(15,122,79,0.5)',
                        transform: 'translateY(-50%)',
                        zIndex: 2
                      }}>
                        {i + 1}
                      </Box>
                      
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'primary.light' }}>
                          <ClipboardCheck size={24} />
                          <Typography variant="h4" sx={{ fontWeight: 900, color: 'white' }}>{step.title}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6 }}>{step.desc}</Typography>
                      </Stack>
                    </MotionBox>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 8. Core Values */}
      <Box sx={{ py: { xs: 12, md: 15 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 5 }}>CORE ETHOS</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main' }}>Built on <Box component="span" sx={{ color: 'primary.main' }}>Integrity</Box></Typography>
          </Stack>
          <Grid container spacing={4}>
            {[{ title: 'Integrity', icon: BadgeCheck, text: 'Support for doing the right thing.' },
              { title: 'Excellence', icon: TrendingUp, text: 'Keep raising the bar.' },
              { title: 'Commitment', icon: HeartHandshake, text: 'Encourage employees to achieve their potential.' },
              { title: 'Team work', icon: Sparkles, text: 'We are one.' }
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <MotionPaper whileHover={{ y: -20, rotate: i % 2 === 0 ? 1 : -1 }} sx={{ p: 6, height: '100%', borderRadius: '50px', bgcolor: '#f8fafc', border: '1px solid rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: '0.6s', '&:hover': { bgcolor: 'white', boxShadow: '0 50px 100px rgba(15,122,79,0.1)' } }}>
                  <Box sx={{ width: 100, height: 100, borderRadius: '35px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', display: 'grid', placeItems: 'center', mb: 4 }}><item.icon size={48} /></Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: 'secondary.main' }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>{item.text}</Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;



