import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function MediaCard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "top",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" width="100" image="refri.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "right" }}>
              یخچال
            </Typography>
            <Typography variant="body2" color="text.secondary">
              شارژ گاز یخچال هیمالیا R134 نشت‌یابی تعویض لوله کشی صفحه تریزیون
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small">اشتراک</Button>
          <Button size="small">بیشتر بخوانید</Button>
        </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" width="100" image="blover.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "right" }}>
              تعویض بلور یخچال ویترینی
            </Typography>
            <Typography variant="body2" color="text.secondary">
              تعویض بلور یخچال ویترینی
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small">اشتراک</Button>
          <Button size="small">بیشتر بخوانید</Button>
        </CardActions> */}
      </Card>
    </Box>
  );
}
