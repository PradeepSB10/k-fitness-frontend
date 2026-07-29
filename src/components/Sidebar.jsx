import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = ["home", "about", "plans", "trainers", "gallery", "contact"];

  return (
      <>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
          <div className="brand">
            <img src={logo} alt="K Fitness Logo" />

            <div className="brand-text">
              <h2 className="logo">K FITNESS</h2>
              <p className="tagline">DON'T QUIT STAY FIT</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={activeSection === link ? "active-link" : ""}
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    setActiveSection(link);
                    setMenuOpen(false);
                  }
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>
        </aside>
      </>
    );
}

export default Sidebar;