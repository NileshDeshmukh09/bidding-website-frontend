// AppRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import FrontendHome from "./pages/FrontendHome";
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontendHome />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
