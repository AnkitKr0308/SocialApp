import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="github" element={<Github />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
