import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components//Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);

  const handleFlag = (state)=>{
    setFlag(state);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home flag={flag} />} />
        <Route exact path="/services" element={<Services setFlag={handleFlag} />} />
        <Route exact path="/contact" element={<Contact setFlag={handleFlag} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;