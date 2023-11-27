import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { createCustomTheme } from "./utils/createCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { HomePage } from "./pages/homePage/HomePage";
import { TopBar } from "./components/topBar/TopBar";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { ClientPage } from "./pages/clientPage/ClientPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { TopBarMobile } from "./components/topBar/TopBarMobile";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { PortfolioPageMobile } from "./pages/portfolioPage/PortfolioPageMobile";
// import { SideBar } from "./components/sideBar/SideBar";

function App() {
  const theme = createCustomTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will run once on mount

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isMobile ? <TopBarMobile /> : <TopBar />}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/portfolio"
            element={isMobile ? <PortfolioPageMobile /> : <PortfolioPage />}
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/client" element={<ClientPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 4,
        }}
      >
        <Typography>Valeriano Di Domenico©</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
