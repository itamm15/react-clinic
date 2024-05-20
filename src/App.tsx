import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { SpecialistsPage } from "./components/SpecialistsPage";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { Calendar } from "./components/Calendar";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/doctors", element: <SpecialistsPage /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
