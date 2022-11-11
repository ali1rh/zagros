import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';





export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(2);


  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="یخچال" icon={<RestoreIcon />} />
          <BottomNavigationAction label="کولرگازی" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="لباسشویی" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="پکیج" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="برد" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
