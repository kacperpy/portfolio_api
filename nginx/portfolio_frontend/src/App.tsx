import React from "react";
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
import { PortraitPage } from "./pages/portraitPage/PortraitPage";
import { TopBarV2 } from "./components/topBar/TopBarV2";
import { CommercialPage } from "./pages/commercialPage/CommercialPage";
import { Breadcrumb } from "./components/breadcrumb/Breadcrumb";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
import { BusinessPortraitPage } from "./pages/businessPortraitsPage/BusinessPortraitsPage";
import { FoodPage } from "./pages/foodPage/FoodPage";
import { SurfingPage } from "./pages/surfingPage/SurfingPage";
import { ReportagePage } from "./pages/reportagePage/ReportagePage";

function App() {
  const theme = createCustomTheme();
  const { isMobileDevice } = useIsMobileDevice();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isMobileDevice ? <TopBarMobile /> : <TopBarV2 />}
        <Breadcrumb />
        {/* <QuickScrollUp /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/commercial" element={<CommercialPage />}></Route>
          <Route path="/portrait" element={<PortraitPage />}></Route>
          <Route
            path="/business-portraits"
            element={<BusinessPortraitPage />}
          ></Route>
          <Route path="/food" element={<FoodPage />}></Route>
          <Route path="/surfing" element={<SurfingPage />}></Route>
          <Route path="/reportage" element={<ReportagePage />}></Route>
          <Route
            path="/video"
            element={isMobileDevice ? <VideoPageMobile /> : <VideoPage />}
          ></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/client" element={<ClientPage />}></Route>
          <Route
            path="/datenschutzerklarung"
            element={<DatenschutzerPage />}
          ></Route>
          <Route path="/impressum" element={<ImpressumPage />}></Route>
        </Routes>
      </div>
      {isMobileDevice ? <FooterMobile /> : <Footer />}
    </ThemeProvider>
  );
}

export default App;
