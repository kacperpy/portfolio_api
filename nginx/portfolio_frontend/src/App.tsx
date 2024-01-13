import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { createCustomTheme } from "./utils/createCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { HomePage } from "./pages/homePage/HomePage";
import { VideoPage } from "./pages/videoPage/VideoPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { ClientPage } from "./pages/clientPage/ClientPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { TopBarMobile } from "./components/topBar/TopBarMobile";
import { VideoPageMobile } from "./pages/videoPage/VideoPageMobile";
import { useIsMobileDevice } from "./utils/useIsMobileDevice";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { Footer } from "./components/footer/Footer";
import { DatenschutzerPage } from "./pages/datenschutzer/DatenschutzerPage";
import { ImpressumPage } from "./pages/impressum/ImpressumPage";
import { FooterMobile } from "./components/footer/FooterMobile";
import { QuickScrollUp } from "./components/quickScrollUp/QuickScrollUp";
import { PortraitPage } from "./pages/portraitPage/PortraitPage";
import { TopBarV2 } from "./components/topBar/TopBarV2";

function App() {
  const theme = createCustomTheme();
  const { isMobileDevice } = useIsMobileDevice();
  const [isScrollArrowVisible, setSsScrollArrowVisible] = useState(false);

  useEffect(() => {
    setSsScrollArrowVisible(false);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.7) {
      // alert("ocwfwefew");
      if (!isScrollArrowVisible) {
        setSsScrollArrowVisible(true);
      }
    } else {
      if (isScrollArrowVisible) {
        setSsScrollArrowVisible(false);
      }
    }
  };
  window.addEventListener("scroll", handleScroll, true);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isMobileDevice ? <TopBarMobile /> : <TopBarV2 />}
        {isScrollArrowVisible && <QuickScrollUp />}
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
          <Route
            path="/datenschutzerklarung"
            element={<DatenschutzerPage />}
          ></Route>
          <Route path="/impressum" element={<ImpressumPage />}></Route>
          <Route path="/portrait" element={<PortraitPage />}></Route>
        </Routes>
      </div>
      {isMobileDevice ? <FooterMobile /> : <Footer />}
    </ThemeProvider>
  );
}

export default App;
