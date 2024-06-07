import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Ba from "./pages/ba/ba";
import Dev from "./pages/dev/dev";
import { Box } from "@mui/material";
import { useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
function App() {
  useEffect(() => {
    document.title = "Tran Viet Anh";
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box width={"90%"}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/business-analysis" element={<Ba />} />
              <Route path="/frontend-development" element={<Dev />} />
            </Routes>
          </Router>
        </Box>
      </Box>
    </>
  );
}

export default App;
