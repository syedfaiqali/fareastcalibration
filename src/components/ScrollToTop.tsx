import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const anchor = (
      (event.target as HTMLButtonElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="large"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 99,
          bgcolor: 'primary.main',
          color: 'white',
          boxShadow: '0 10px 30px rgba(15,122,79,0.3)',
          '&:hover': {
            bgcolor: 'secondary.main',
            transform: 'translateY(-5px)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <ChevronUp size={28} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
