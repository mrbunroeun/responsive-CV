// src/App.js
import "./App.css";
import MainPage from "./cvPagePlusResponsive/MainPage";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/articles" element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
