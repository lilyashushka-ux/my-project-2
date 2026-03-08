import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return(
        <>
    <Router>
    <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
        </Router>

        </>
    )
}

export default App;