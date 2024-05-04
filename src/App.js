import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { HomePage } from "./components/HomePage";
import { SpecialistsPage } from "./components/SpecialistsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route index element={<HomePage />} />
          <Route path="/doctors" element={<SpecialistsPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
