import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
