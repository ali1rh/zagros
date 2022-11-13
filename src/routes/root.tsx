import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, useTheme, responsiveFontSizes } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import App from "./App";
import Appbar from "./Appbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import "@fontsource/vazirmatn";
import "@fontsource/roboto";
import FixedBottomNavigation from "./ButtomNavigation";
import { Outlet } from "react-router-dom";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// declare module "@mui/material/styles" {
//     interface ThemeOptions {

//   }
// }

function DarkButton() {
  const theme = useTheme();
  console.log(theme);
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        direction: "rtl",
        p: 0,
      }}
    >
      <IconButton sx={{ ml: 1, p: 0 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7Icon sx={{p:0}} /> : <Brightness4Icon sx={{p:0}} />}
      </IconButton>
      حالت {theme.palette.mode === "dark" ? "شب" : "روز"}
    </Box>
  );
}

const Root = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#ea4335",
          },
          secondary: {
            main: "#bcc216",
          },
          mode,
        },
        typography: {
          fontFamily: ["vazirmatn", "roboto"].join(","),
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode]
  );
  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Appbar />
        <CssBaseline />
        {/* <App /> */}
        <h1>سلام دنیا</h1>
        <Outlet />
        {/* <DarkButton /> */}
        <FixedBottomNavigation />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Root;
