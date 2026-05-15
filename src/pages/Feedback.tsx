import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, TextField, Button, Rating, MenuItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { MessageSquare, Send, ThumbsUp, Star, Sparkles, CheckCircle2 } from 'lucide-react';

const MotionPaper = motion(Paper);

const Feedback: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState<number | null>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      <PageHeader
        title="Share Your Experience"
        subtitle="Your technical feedback drives our precision. Help us refine our calibration excellence to serve you better."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={8}>
          {/* Left Side: Context & Trust */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3 }}>
                  VALUED PARTNERSHIP
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1, lineHeight: 1.1 }}>
                  Every Detail <Box component="span" sx={{ color: 'primary.main' }}>Counts</Box>
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8 }}>
                At Fareast Calibration, we believe precision is a continuous journey. Your insights into our service quality, technical expertise, and turnaround times are invaluable.
              </Typography>

              <Stack spacing={3} sx={{ pt: 2 }}>
                {[
                  { icon: ThumbsUp, title: 'Service Quality', text: 'Tell us how our technicians performed on-site or in the lab.' },
                  { icon: MessageSquare, title: 'Communication', text: 'Was our technical reporting clear and delivered on time?' },
                  { icon: Sparkles, title: 'Innovation', text: 'Suggest new calibration domains or digital features you need.' }
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2.5}>
                    <Box sx={{ p: 1.5, bgcolor: 'rgba(15,122,79,0.08)', borderRadius: '16px', color: 'primary.main', height: 'fit-content' }}>
                      <item.icon size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main' }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.text}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Side: The Feedback Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <MotionPaper
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: '40px',
                    bgcolor: '#ffffff',
                    boxShadow: '0 50px 100px rgba(15,122,79,0.12)',
                    border: '1px solid rgba(15,122,79,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                      <Box>
                        <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main', mb: 1 }}>
                          Send Feedback
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Takes less than 2 minutes to complete.
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'secondary.main' }}>
                          Overall Experience
                        </Typography>
                        <Rating 
                          value={rating} 
                          onChange={(_, val) => setRating(val)} 
                          size="large"
                          icon={<Star size={32} fill="currentColor" />}
                          emptyIcon={<Star size={32} />}
                          sx={{ color: '#fec001' }}
                        />
                      </Box>

                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            required
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Company Name"
                            variant="outlined"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            select
                            fullWidth
                            label="Service Category"
                            defaultValue="Temperature"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
                          >
                            {['Temperature & Humidity', 'Pressure & Vacuum', 'Dimensional', 'Electrical', 'Mass & Balance', 'Validation'].map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Your Detailed Feedback"
                            placeholder="Tell us what you liked or what we can improve..."
                            required
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
                          />
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send size={20} />}
                        sx={{
                          py: 2,
                          borderRadius: '15px',
                          fontWeight: 800,
                          fontSize: '1.1rem',
                          bgcolor: 'primary.main',
                          boxShadow: '0 10px 30px rgba(15,122,79,0.3)',
                          '&:hover': { bgcolor: 'primary.dark' }
                        }}
                      >
                        Submit Feedback
                      </Button>
                    </Stack>
                  </form>
                </MotionPaper>
              ) : (
                <MotionPaper
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  sx={{
                    p: 8,
                    borderRadius: '40px',
                    textAlign: 'center',
                    bgcolor: 'white',
                    boxShadow: '0 50px 100px rgba(15,122,79,0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 500
                  }}
                >
                  <Box sx={{ width: 100, height: 100, bgcolor: 'rgba(15,122,79,0.1)', color: 'primary.main', borderRadius: '50%', display: 'grid', placeItems: 'center', mb: 4 }}>
                    <CheckCircle2 size={60} />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'secondary.main', mb: 2 }}>
                    Thank You!
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 400, mb: 4 }}>
                    Your feedback has been successfully shared with our technical leadership team.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    onClick={() => setSubmitted(false)}
                    sx={{ borderRadius: '50px', px: 4 }}
                  >
                    Send Another Feedback
                  </Button>
                </MotionPaper>
              )}
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative background element */}
      <Box 
        sx={{ 
          position: 'fixed', 
          bottom: -150, 
          left: -150, 
          width: 500, 
          height: 500, 
          borderRadius: '50%', 
          bgcolor: 'rgba(15,122,79,0.03)', 
          zIndex: -1 
        }} 
      />
    </Box>
  );
};

export default Feedback;
