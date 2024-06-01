import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { SpecialistsPage } from "./components/SpecialistsPage";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { Calendar } from "./components/Calendar";
import { UserAccount } from "./components/UserAccount";
import { ContactPage } from "./components/ContactPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { ServicePage } from "./components/ServicePage";
import { AccountEdit } from "./components/UserAccount/AccountEdit";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/doctors", element: <SpecialistsPage /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/account", element: <UserAccount /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <AboutUsPage /> },
  { path: "/services", element: <ServicePage /> },
  { path: "/accountEdit", element: <AccountEdit /> },
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
