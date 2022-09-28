import * as React from 'react';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from './modules/components/Typography';

const Survey_Making = () => {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
           {"Demo Page of Survey Making Page"}
        </Typography>
      </Button>
    </Container>
  );
}

export default Survey_Making;