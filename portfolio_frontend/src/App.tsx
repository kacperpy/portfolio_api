import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { createCustomTheme } from "./utils/createCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { HomePage } from "./pages/homePage/HomePage";
import { TopBar } from "./components/topBar/TopBar";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
// import { SideBar } from "./components/sideBar/SideBar";

function App() {
  const theme = createCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        {/* <SideBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
