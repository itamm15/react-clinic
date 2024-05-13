import { Outlet } from "react-router-dom";
import { Menu } from "../Menu";

export function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
