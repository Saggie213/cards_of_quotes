import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote/:id" element={<QuoteDetail />} />
    </Routes>
  </Router>
);

export default App;
