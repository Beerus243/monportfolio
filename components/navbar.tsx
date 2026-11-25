import { useState } from "react";
import { BsWhatsapp, BsEnvelope, BsX, BsList } from "react-icons/bs";

const navigation = [
  { href: "#about", label: "À propos" },
  { href: "#achievements", label: "Projets" },
  { href: "#career", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site_header" id="navbar">
      <nav className="site_nav" aria-label="Navigation principale">
        <a className="site_brand" href="#header" onClick={() => setMenuOpen(false)}>
          FM<span>.</span>
        </a>

        <div className="desktop_nav_links">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>

        <a className="nav_contact" href="https://wa.me/243991760427" target="_blank" rel="noreferrer">
          <BsWhatsapp aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a className="nav_contact nav_email" href="mailto:malangafabrice@gmail.com" aria-label="Envoyer un e-mail à malangafabrice@gmail.com">
          <BsEnvelope aria-hidden="true" />
          <span>E-mail</span>
        </a>

        <button
          className="mobile_menu_toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BsX size={25} /> : <BsList size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile_nav_panel" id="mobile-navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href="https://wa.me/243991760427" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>WhatsApp · +243 991 760 427</a>
          <a href="mailto:malangafabrice@gmail.com" onClick={() => setMenuOpen(false)}>E-mail · malangafabrice@gmail.com</a>
        </div>
      )}
    </header>
  );
}
