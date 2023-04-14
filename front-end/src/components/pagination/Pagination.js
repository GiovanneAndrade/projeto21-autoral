import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BorderAllRounded } from '@mui/icons-material';

export default function CustomIcons() {

  return (
    <Stack spacing={2}>
      <Pagination
      
        count={10}
        renderItem={(item) => (
          <PaginationItem
          sx={{
            color:'#fff',
            backgroundColor:'#000',
            
          }}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}