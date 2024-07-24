import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.js";
import ActualityPage from "./pages/actualityPage/actualityPage.js";
import ContactPage from "./pages/contactPage/contactPage.js";
import { Box } from "@mui/material";

function App() {
  return (
    <Box style={{ display: 'flex',justifyContent: 'center',maxWidth:'1600px'}}>
      <Router>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/actuality" exact Component={ActualityPage} />
            <Route path="/contact" exact Component={ContactPage} />
            <Route Component={Homepage} />
          </Routes>
        </Router>
    </Box>
   

  );
}

export default App;
