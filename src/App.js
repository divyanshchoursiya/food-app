import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExampleCarouselImage from "./components/Layouts/ExampleCarouselImage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
                        path="/ourmenu"
                        element={<ExampleCarouselImage />}
                    />
      </Routes>
    </Router>
  );
}

export default App;
