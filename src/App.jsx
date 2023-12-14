import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
const theme = createTheme({
  palette: {
    primary: {
      main:"#1D1D1D"
    },
    secondary:{
      main:"#E3B748"
    },
    black:{
      main:"#111111"
    },
    white:{
      main:"#FFFFFF",
    }
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
