import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, TextField, Avatar, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import {
  PhoneCall,
  Send,
  Star,
  Users,
  Trophy,
  Rocket,
  CheckCircle2,
  MapPinned,
  Mail,
  Globe2,
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';
const brandGreenDark = '#0d3f2b';
const softBlue = '#edf5ff';
const softGreen = '#f4fbf7';
const recruitmentEmail = 'fareastcalibration@gmail.com';
const officeMapUrl = 'https://www.google.com/maps/search/?api=1&query=PT.%20Fareast%20Calibration%20%26%20Testing%20Services%2C%20Tiban%20Raya%20Lestari%2C%20Block%20C%2F4%2C%20Sekupang%2C%20Batam%2C%20Indonesia';

const metrologyExpertise = [
  'Calibration Technician',
  'Technical Supervisor',
  'Instrumentation Engineer',
  'Technical Manager',
  'Validation Specialist',
  'Quality Executive',
];

const fadeInUp: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }
};

const Career: React.FC = () => {
  const [application, setApplication] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const fieldSx = {
    '& .MuiFilledInput-root': {
      borderRadius: '20px',
      bgcolor: '#f8fafc',
      border: '1px solid rgba(0,27,94,0.10)',
      transition: 'all 0.3s ease',
      '&:hover': { bgcolor: 'white', borderColor: 'primary.light' },
      '&.Mui-focused': { bgcolor: 'white', borderColor: 'primary.main', boxShadow: '0 10px 20px rgba(15,122,79,0.05)' },
      '&:before, &:after': { display: 'none' }
    },
    '& .MuiInputLabel-root': { fontWeight: 600, '&.Mui-focused': { color: 'primary.main' } }
  };

  const handleFieldChange =
    (field: keyof typeof application) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setApplication((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Career Application - ${application.fullName || 'Fareast Candidate'}`;
    const body = [
      'Hello Fareast Recruitment Team,',
      '',
      'I would like to apply or ask about career opportunities at PT. Fareast Calibration.',
      '',
      `Full Name: ${application.fullName}`,
      `Email: ${application.email}`,
      `Phone: ${application.phone}`,
      `Position / Area of Interest: ${application.interest || 'Open to suitable opportunities'}`,
      '',
      'Message:',
      application.message || 'Please find my CV attached for your review.',
      '',
      'I will attach my CV/resume to this email.',
      '',
      'Thank you.',
    ].join('\n');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recruitmentEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        bgcolor: softBlue,
        overflow: 'hidden',
        background:
          'linear-gradient(180deg, #edf5ff 0%, #ffffff 24%, #f4fbf7 58%, #ffffff 100%)',
      }}
    >
      <PageHeader
        title="Build Your Future in Metrology"
        subtitle="Join a trained and competent laboratory team serving calibration and testing customers across Batam and the surrounding region."
      />

      {/* 1. Why Join Section - STUNNING UI */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 }, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,27,94,0.12), transparent 68%)',
            pointerEvents: 'none',
          }}
        />
        <Grid container spacing={10} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox {...fadeInUp}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 5 }}>
                    OUR CULTURE
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, mt: 2, lineHeight: 1.1, fontSize: { xs: '2.8rem', md: '3.8rem' } }}>
                    Our Employees are Our <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>
                      Biggest Assets
                      <Box sx={{ position: 'absolute', bottom: 8, left: 0, width: '100%', height: '8px', bgcolor: 'rgba(15,122,79,0.1)', zIndex: -1 }} />
                    </Box>
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8, fontSize: '1.25rem' }}>
                  PT. FAREAST CALIBRATION & TESTING SERVICES values our employees as our biggest assets and our advocates in reflecting our culture. We offer attractive career opportunities for passionate and competent professionals.
                </Typography>

                <Grid container spacing={4}>
                  {[
                    { icon: Trophy, title: 'Expert Mentorship', text: 'Learn from industry veterans in metrology.', color: brandGreen },
                    { icon: Rocket, title: 'Modern Tools', text: 'Access to the latest calibration technology.', color: brandBlue },
                    { icon: Users, title: 'Collaborative Environment', text: 'We believe in growing together as a team.', color: brandBlue },
                    { icon: Star, title: 'Excellence Focused', text: 'Quality is our top priority in every task.', color: brandGreen }
                  ].map((item, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6 }}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          bgcolor: 'white',
                          border: '1px solid rgba(0,27,94,0.08)',
                          boxShadow: '0 18px 45px rgba(0,27,94,0.08)',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 24px 56px rgba(0,27,94,0.14)',
                            borderColor: 'rgba(15,122,79,0.24)',
                          },
                        }}
                      >
                        <Stack spacing={2}>
                          <Box sx={{ color: item.color, bgcolor: i % 2 ? 'rgba(0,27,94,0.08)' : 'rgba(15,122,79,0.1)', p: 1.5, borderRadius: '14px', width: 'fit-content' }}>
                            <item.icon size={28} />
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900, color: brandBlue }}>{item.title}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.6 }}>{item.text}</Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.21, 1.02, 0.47, 0.98] as any }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: -25,
                  background: `linear-gradient(135deg, rgba(15,122,79,0.16) 0%, rgba(0,27,94,0.08) 100%)`,
                  borderRadius: '60px',
                  transform: 'rotate(3deg)',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                sx={{
                  width: '100%',
                  height: { xs: 450, md: 650 },
                  objectFit: 'cover',
                  borderRadius: 6,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 40px 90px rgba(0,27,94,0.18)',
                  border: '8px solid white',
                }}
              />
              <MotionPaper
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: [0.21, 1.02, 0.47, 0.98] as any }}
                sx={{
                  position: 'absolute',
                  bottom: 40,
                  left: -30,
                  p: 4,
                  borderRadius: 5,
                  bgcolor: 'white',
                  boxShadow: '0 30px 60px rgba(0,27,94,0.18)',
                  zIndex: 2,
                  display: { xs: 'none', md: 'block' }
                }}
              >
                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: brandGreen, width: 64, height: 64 }}><Trophy size={32} /></Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: brandBlue }}>11+ Years</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>INDUSTRY LEADERSHIP</Typography>
                  </Box>
                </Stack>
              </MotionPaper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* 2. Career Invitation Section - CINEMATIC & ATTRACTIVE */}
      <Box
        sx={{
          py: { xs: 15, md: 25 },
          background: `linear-gradient(135deg, ${brandBlue} 0%, #07375f 46%, ${brandGreenDark} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <Box sx={{ position: 'absolute', top: '-10%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(117,221,169,0.18) 0%, transparent 70%)', filter: 'blur(120px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox {...fadeInUp}>
                <Stack spacing={4}>
                  <Box>
                      <Typography variant="overline" sx={{ color: '#8ce0b6', fontWeight: 900, letterSpacing: 6 }}>JOIN THE TEAM</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 3, lineHeight: 1.1, fontSize: { xs: '2.8rem', md: '4rem' } }}>
                      Our Employees are Our <Box component="span" sx={{ color: '#8ce0b6' }}>Biggest Assets</Box>
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, lineHeight: 1.8, fontSize: '1.25rem' }}>
                      At PT. Fareast Calibration & Testing Services, we value our people as advocates of our culture. We offer attractive career opportunities for passionate professionals ready to lead in metrology.
                    </Typography>
                  </Box>

                  <Paper sx={{ p: 4, borderRadius: '30px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <Stack spacing={3}>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#8ce0b6' }}>Who We Are Looking For</Typography>
                      <Grid container spacing={2}>
                        {metrologyExpertise.map((item, i) => (
                          <Grid key={i} size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <CheckCircle2 size={18} color="#4fb37f" />
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>{item}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Stack>
                  </Paper>
                </Stack>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <MotionPaper
                {...fadeInUp}
                sx={{
                  p: { xs: 5, md: 8 },
                  borderRadius: 6,
                  bgcolor: 'white',
                  color: 'secondary.main',
                  boxShadow: '0 50px 100px rgba(0,27,94,0.35)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'linear-gradient(135deg, rgba(0,27,94,0.10), rgba(15,122,79,0.08))', borderRadius: '0 0 0 100%' }} />
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: brandBlue }}>Ready for a Challenge?</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      If you are keen on a rewarding career in metrology, we invite you to explore exciting opportunities at PT. Fareast Calibration.
                    </Typography>
                  </Box>

                  <Divider />

                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ p: 2, borderRadius: '15px', bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main' }}>
                        <Send size={24} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6, letterSpacing: 1 }}>EMAIL YOUR APPLICATION</Typography>
                        <Link href={`mailto:${recruitmentEmail}`} color="inherit" underline="hover">
                          <Typography variant="h6" sx={{ fontWeight: 800 }}>{recruitmentEmail}</Typography>
                        </Link>
                        <Link href="mailto:info@fareastcalibration.com" color="inherit" underline="hover">
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>info@fareastcalibration.com</Typography>
                        </Link>
                      </Box>
                    </Box>

                    <Typography variant="caption" sx={{ fontStyle: 'italic', color: 'text.secondary', mt: 1 }}>
                      * The information you provide will be kept strictly confidential.
                    </Typography>
                  </Stack>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    href={`mailto:${recruitmentEmail}`}
                    sx={{
                      py: 2,
                      borderRadius: '20px',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      boxShadow: '0 15px 30px rgba(15,122,79,0.2)'
                    }}
                  >
                    Contact Recruitment
                  </Button>
                </Stack>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Application Form Section - SOPHISTICATED DESIGN */}
      <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }}>
        <Grid container spacing={10} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox {...fadeInUp}>
              <Stack spacing={5}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 4 }}>JOIN US</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: brandBlue, mt: 2 }}>Start Your <Box component="span" sx={{ color: brandGreen }}>Application</Box></Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8 }}>
                  Tell us who you are, what kind of role you are looking for, and open Gmail with a prepared message. Attach your CV there before sending.
                </Typography>

                <Stack spacing={3}>
                  {[
                    'Highly competitive salary packages',
                    'Comprehensive training & development',
                    'Health & wellness benefits',
                    'Dynamic and innovative work culture'
                  ].map((benefit, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle2 size={24} color="#0f7a4f" />
                      <Typography variant="body1" sx={{ fontWeight: 700, color: brandBlue }}>{benefit}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: 72, height: 72, borderRadius: 4, bgcolor: 'rgba(0,27,94,0.08)', color: brandBlue, display: 'grid', placeItems: 'center' }}>
                    <PhoneCall size={32} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 1 }}>RECRUITMENT HELPLINE</Typography>
                    <Link href="tel:+62778351831" color="inherit" underline="hover">
                      <Typography variant="h4" sx={{ fontWeight: 900, color: brandBlue }}>+62 778 351 831</Typography>
                    </Link>
                  </Box>
                </Stack>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <MotionPaper
              {...fadeInUp}
              sx={{
                p: { xs: 4, md: 7 },
                borderRadius: 6,
                bgcolor: 'white',
                boxShadow: '0 40px 100px rgba(0,27,94,0.10)',
                border: '1px solid rgba(0,27,94,0.08)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: `linear-gradient(90deg, ${brandGreen}, ${brandBlue})`,
                },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: brandBlue, mb: 1 }}>
                      Write Your Application
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      We will open Gmail with your details ready. Attach your CV or resume there before sending.
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        required
                        variant="filled"
                        value={application.fullName}
                        onChange={handleFieldChange('fullName')}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        required
                        variant="filled"
                        value={application.email}
                        onChange={handleFieldChange('email')}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        required
                        variant="filled"
                        value={application.phone}
                        onChange={handleFieldChange('phone')}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Position or Area of Interest"
                        variant="filled"
                        placeholder="Calibration, instrumentation, QA, admin..."
                        value={application.interest}
                        onChange={handleFieldChange('interest')}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box
                        sx={{
                          p: { xs: 3, md: 4 },
                          borderRadius: 5,
                          bgcolor: 'rgba(15,122,79,0.05)',
                          border: '1px solid rgba(15,122,79,0.16)',
                          display: 'flex',
                          gap: 2.5,
                          alignItems: { xs: 'flex-start', sm: 'center' },
                          flexDirection: { xs: 'column', sm: 'row' },
                        }}
                      >
                        <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: 'white', color: brandGreen, display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: '0 14px 28px rgba(15,122,79,0.10)' }}>
                          <Mail size={28} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 900, color: brandBlue }}>
                            Attach your CV in Gmail
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                            After clicking the button, Gmail opens with your message prepared. Use Gmail's attach button to add your CV before sending.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        label="Your message or questions"
                        required
                        variant="filled"
                        placeholder="Tell us about your experience, skills, availability, or ask about open opportunities..."
                        value={application.message}
                        onChange={handleFieldChange('message')}
                        sx={{
                          ...fieldSx,
                          '& .MuiFilledInput-root': {
                            ...fieldSx['& .MuiFilledInput-root'],
                            borderRadius: '25px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<Send size={20} />}
                        sx={{
                          py: 2.5,
                          borderRadius: '20px',
                          fontWeight: 900,
                          fontSize: { xs: '1rem', sm: '1.15rem' },
                          bgcolor: brandGreen,
                          boxShadow: '0 20px 40px rgba(15,122,79,0.3)',
                          '&:hover': { transform: 'translateY(-3px)', bgcolor: brandBlue },
                        }}
                      >
                        Open Gmail to Apply
                      </Button>
                    </Grid>
                  </Grid>
                </Stack>
              </form>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
      {/* 4. Contact Details Footer Section */}
      <Box sx={{ bgcolor: softGreen, py: 10, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(${brandBlue} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              background: `linear-gradient(135deg, ${brandBlue} 0%, #07375f 52%, ${brandGreenDark} 100%)`,
              color: 'white',
              boxShadow: '0 28px 74px rgba(0,27,94,0.20)',
              border: '1px solid rgba(255,255,255,0.14)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ mb: 5 }}>
              <Typography variant="overline" sx={{ color: '#8ce0b6', fontWeight: 900, letterSpacing: 4 }}>LET'S CONNECT</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>Start Your Career Conversation</Typography>
            </Box>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2} sx={{ height: '100%', p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Box sx={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: 3, bgcolor: 'rgba(140,224,182,0.14)', color: '#8ce0b6' }}><MapPinned size={24} /></Box>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>Office Address</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                    Tiban Raya Lestari, Block C/4, Sekupang<br />Batam, Indonesia
                  </Typography>
                  <Link href={officeMapUrl} target="_blank" rel="noopener noreferrer" sx={{ color: '#8ce0b6', fontWeight: 900, width: 'fit-content' }}>
                    Open in Google Maps
                  </Link>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2} sx={{ height: '100%', p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Box sx={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: 3, bgcolor: 'rgba(140,224,182,0.14)', color: '#8ce0b6' }}><Mail size={24} /></Box>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>Recruitment Contact</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.9 }}>
                    Call: <Link href="tel:+62778351831" color="inherit" underline="hover">+62 778 351 831</Link><br />
                    Email: <Link href="mailto:sales@fareastcalibration.com" color="inherit" underline="hover">sales@fareastcalibration.com</Link>
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2} sx={{ height: '100%', p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Box sx={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: 3, bgcolor: 'rgba(140,224,182,0.14)', color: '#8ce0b6' }}><Globe2 size={24} /></Box>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>Connect With Us</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.9 }}>
                    Facebook: <Link href="https://www.facebook.com/fareastcalibration/" target="_blank" color="inherit" underline="hover">facebook.com/fareastcalibr</Link><br />
                    Website: <Link href="https://www.fareastcalibration.com" target="_blank" color="inherit" underline="hover">www.fareastcalibration.com</Link>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.68)', fontWeight: 800 }}>
                PT. FAREAST CALIBRATION & TESTING SERVICES
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Career;
