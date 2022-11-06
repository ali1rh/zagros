import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Ali from "./Ali";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        bidar.app
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          خدمات فنی زاگرس
        </Typography>
        {/* <ProTip /> */}
        <Copyright />
        {/* <Ali /> */}
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Container>
  );
}
