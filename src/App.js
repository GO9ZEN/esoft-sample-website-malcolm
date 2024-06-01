import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/home";
import Malcolm from "./Pages/Malcolm/malcolm";
import Contact from "./Pages/Contact/contact";
import Gallery from "./Pages/Gallery/gallery";
import Services from "./Pages/Services/services";

function App() {
  return (
    <div className="app">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/malcolm-lismore" element={<Malcolm />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
