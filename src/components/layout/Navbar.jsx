import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop: full floating pill nav */}
      <nav className="navbar navbar-desktop">
        <a href="#top">CL.</a>
        <a href="#benefits">Benefits</a>
        <a href="#projects">Work</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQs</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile: single hamburger icon button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-dropdown">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}

export default Navbar;