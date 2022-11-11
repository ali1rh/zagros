import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Ali from "./Ali";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Slider } from "@mui/material";
import Card from "./Card";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://bidar.app/">
        bidar.app
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h2" component="h2" gutterBottom >
          خدمات فنی زاگرس
        </Typography>
        <Link
            href="tel:+989180579478"
            sx={{fontSize: '1.2rem'}}
          >
            با ما تماس بگیرید 09180579478
          </Link>
        {/* <ProTip /> */}
        {/* <Ali /> */}
        {/* <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab> */}
        <Card />
        <Slider
          defaultValue={30}
          sx={{
            mt: 85,
            textAlign: "center",
            width: 300,
            "& .MuiSlider-thumb": {
              borderRadius: "2px",
            },
          }}
        />
        <Copyright />
      </Box>
    </Container>
  );
}
