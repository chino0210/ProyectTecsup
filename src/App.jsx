// elementos de la pagina
import Home from "./views/Home";
import CardAll from "./views/CardAll";
import CardDetail from "./views/CardDetail";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Sign_Up from "./views/Sign_Up";
import Log_In from "./views/Log_In";
import Account from "./views/Account";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";

// funciones
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

// Route example : <Route path="" element={< />}/>

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<CardAll />} />
            <Route path="/detail/:id" element={<CardDetail />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/login" element={<Log_In />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContextProvider>

    </>
  );
}
