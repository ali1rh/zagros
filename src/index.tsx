import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import App from "./App";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// declare module "@mui/material/styles" {
//     interface ThemeOptions {

//   }
// }

function MyApp() {
  const theme = useTheme();
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
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const ToggleColorMode = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  
  const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

root.render(<ToggleColorMode />);
