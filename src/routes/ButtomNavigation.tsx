import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  console.log("url: ", url);

  return url.pathname;
}

export default function FixedBottomNavigation() {
  const url = useLoaderData();
  console.log(url);

  const [value, setValue] = React.useState(url);
  console.log(value);

  return (
    <Box>
      <CssBaseline />
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="یخچال" value="/refrigerator" component={Link} to={"refrigerator"} icon={<RestoreIcon />} />
          <BottomNavigationAction label="کولرگازی" value="/air-conditioner" component={Link} to={"air-conditioner"} icon={<FavoriteIcon />} />
          <BottomNavigationAction label="لباسشویی" value="/washing" component={Link} to={"washing"} icon={<ArchiveIcon />} />
          <BottomNavigationAction label="پکیج" value="/package" component={Link} to={"package"} icon={<FavoriteIcon />} />
          <BottomNavigationAction label="برد" value="/electronic-board" component={Link} to={"electronic-board"} icon={<RestoreIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
