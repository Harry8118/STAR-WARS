import React from "react";
import { Routes, Route } from "react-router-dom";

import Moviepage from "./pages/Moviepage";
import Starshippage from "./pages/Starshippage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Moviepage />} />
        <Route path="/starship/" element={<Starshippage />} />
      </Routes>
    </>
  );
}

export default App;
