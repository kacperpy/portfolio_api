import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { createCustomTheme } from "./utils/createCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { HomePage } from "./pages/homePage/HomePage";
import { TopBar } from "./components/topBar/TopBar";
import { VideoPage } from "./pages/videoPage/VideoPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { ClientPage } from "./pages/clientPage/ClientPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { TopBarMobile } from "./components/topBar/TopBarMobile";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { VideoPageMobile } from "./pages/videoPage/VideoPageMobile";
import { useIsMobileDevice } from "./utils/useIsMobileDevice";
import { ContactPage } from "./pages/contactPage/ContactPage";
// import { SideBar } from "./components/sideBar/SideBar";

function App() {
  const theme = createCustomTheme();
  const { isMobileDevice } = useIsMobileDevice();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBarMobile />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/video"
            element={isMobileDevice ? <VideoPageMobile /> : <VideoPage />}
          ></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
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
