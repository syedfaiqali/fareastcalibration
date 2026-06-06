import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material';
import { CheckCircle2, Send } from 'lucide-react';
import { sendEnquiryEmail, type EnquiryPayload } from '../services/emailjs';

const brandBlue = '#001b5e';
const brandGreen = '#0f7a4f';

const initialForm: EnquiryPayload = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  pageSource: '',
};

const fieldSx = {
  '& .MuiFilledInput-root': {
    borderRadius: '20px',
    bgcolor: '#f8fafc',
    border: '1px solid rgba(0,27,94,0.10)',
    transition: 'all 0.25s ease',
    '&:hover': { bgcolor: 'white', borderColor: 'rgba(15,122,79,0.45)' },
    '&.Mui-focused': {
      bgcolor: 'white',
      borderColor: brandGreen,
      boxShadow: '0 12px 24px rgba(15,122,79,0.08)',
    },
    '&:before, &:after': { display: 'none' },
  },
  '& .MuiInputLabel-root': {
    fontWeight: 700,
    color: 'rgba(0,27,94,0.62)',
    '&.Mui-focused': { color: brandGreen },
  },
};

type EnquiryFormProps = {
  pageSource: string;
  title?: string;
  subtitle?: string;
  compactHeader?: boolean;
};

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  pageSource,
  title = 'Send Us a Message',
  subtitle = 'Please provide your details and requirements below.',
  compactHeader = false,
}) => {
  const [form, setForm] = useState<EnquiryPayload>({ ...initialForm, pageSource });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const updateField =
    (field: keyof EnquiryPayload) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await sendEnquiryEmail({ ...form, pageSource });
      setStatus('success');
      setForm({ ...initialForm, pageSource });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong while sending your message.');
    }
  };

  if (status === 'success') {
    return (
      <Stack
        spacing={3}
        sx={{
          minHeight: compactHeader ? 420 : 560,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 108,
            height: 108,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            color: brandGreen,
            bgcolor: 'rgba(15,122,79,0.10)',
            boxShadow: '0 18px 42px rgba(15,122,79,0.14)',
          }}
        >
          <CheckCircle2 size={62} />
        </Box>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 900, color: brandBlue, mb: 1 }}>
            Enquiry Sent
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 460 }}>
            Thank you. A Fareast technical specialist will review your message and contact you shortly.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => setStatus('idle')}
          sx={{ borderRadius: '999px', px: 5, py: 1.4, fontWeight: 800 }}
        >
          Send Another Message
        </Button>
      </Stack>
    );
  }

  return (
    <Stack component="form" spacing={4} onSubmit={handleSubmit}>
      <Box>
        <Typography
          variant={compactHeader ? 'h4' : 'h4'}
          sx={{ fontWeight: 900, color: brandBlue, mb: compactHeader ? 1 : 1.5 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          {subtitle}
        </Typography>
      </Box>

      {status === 'error' && (
        <Alert severity="error" sx={{ borderRadius: 3 }}>
          {errorMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Your Name" required variant="filled" value={form.name} onChange={updateField('name')} sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Company Name" variant="filled" value={form.company} onChange={updateField('company')} sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Email Address" required type="email" variant="filled" value={form.email} onChange={updateField('email')} sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Phone Number" required variant="filled" value={form.phone} onChange={updateField('phone')} sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label="Subject" required variant="filled" value={form.subject} onChange={updateField('subject')} sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Tell us about your requirements..."
            required
            variant="filled"
            value={form.message}
            onChange={updateField('message')}
            sx={{
              ...fieldSx,
              '& .MuiFilledInput-root': {
                ...fieldSx['& .MuiFilledInput-root'],
                borderRadius: '25px',
              },
            }}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={status === 'sending'}
        endIcon={status === 'sending' ? <CircularProgress color="inherit" size={20} /> : <Send size={20} />}
        sx={{
          py: 2.3,
          borderRadius: '20px',
          fontWeight: 900,
          fontSize: { xs: '1rem', sm: '1.12rem' },
          bgcolor: brandGreen,
          boxShadow: '0 20px 40px rgba(15,122,79,0.28)',
          '&:hover': { transform: 'translateY(-3px)', bgcolor: brandBlue },
          '&.Mui-disabled': {
            color: 'rgba(255,255,255,0.78)',
            bgcolor: '#4f8d73',
          },
        }}
      >
        {status === 'sending' ? 'Sending Message' : 'Send Message'}
      </Button>
    </Stack>
  );
};

export default EnquiryForm;
