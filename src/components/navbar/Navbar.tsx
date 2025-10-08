import React from "react";
import { Link } from "react-router";
import "./Navbar.css";

/**
 * Global navigation bar providing primary links to key routes.
 *
 * @component
 * @returns {JSX.Element} A semantic navigation element with app links.
 * @accessibility
 * Uses semantic <nav> and <a> (via Link) for keyboard and screen reader navigation.
 */
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-center gap-8 py-4 z-50 shadow-md">
      <Link to="/">Inicio</Link>
      <Link to="/peliculas">Peliculas</Link>
      <Link to="/sobre-nosotros">Sobre nosotros</Link>
    </nav>
  );
};

export default Navbar;
