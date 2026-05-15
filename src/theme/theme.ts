import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f7a4f', // Main Green
      light: '#4fb37f',
      dark: '#0a5a39',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d3f2b', // Dark Forest Green (instead of Navy)
      light: '#1a523c',
      dark: '#051f14',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          boxShadow: 'none',
          borderRadius: 999,
          transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(15, 122, 79, 0.18)',
            transform: 'translateY(-1px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #0f7a4f 0%, #4fb37f 55%, #5cc18c 100%)',
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 18px 40px rgba(21, 56, 39, 0.08)',
          borderRadius: 18,
          border: '1px solid rgba(15, 122, 79, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
