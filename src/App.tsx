import { NavLink, Outlet } from "react-router";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { linkClass } from "./utils/links";

const links = [
  { 'to': '/', 'label': 'Home' },
  { 'to': '/contacts', 'label': 'Contact' }]

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen py-2">
      <Header
        section={
          links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))
        }
      />
      <Main>
        <Outlet />
      </Main>
      <Footer year="2026" company="Github" />
    </div>
  )
}
