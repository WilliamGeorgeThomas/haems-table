import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import PageNotFound from "./pages/PageNotFound";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//sections

//home
//about
//faq
//contact
//newsletter
