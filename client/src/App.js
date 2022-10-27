import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components//Header";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;