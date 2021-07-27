import React from "react";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
