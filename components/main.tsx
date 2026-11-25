import Image from "next/image";
import { BsArrowDown, BsGithub, BsLinkedin, BsArrowUpRight } from "react-icons/bs";
import image from "./images/fababy.jpg";

export default function Main() {
  return (
    <section className="hero_section" id="header" aria-labelledby="hero-title">
      <div className="hero_copy">
        <div className="availability"><span /> Disponible pour de nouvelles opportunités</div>
        <p className="hero_eyebrow">Développeur web & mobile · Kinshasa, RDC</p>
        <h1 id="hero-title">Je transforme<br />vos idées en <span>produits utiles.</span></h1>
        <p className="hero_intro">
          Bonjour, moi c’est Fabrice. Je conçois et développe des expériences numériques claires,
          performantes et pensées pour les personnes qui les utilisent.
        </p>
        <div className="hero_actions">
          <a className="button_primary" href="#achievements">Découvrir mes projets <BsArrowUpRight aria-hidden="true" /></a>
          <a className="button_secondary" href="mailto:malangafabrice@gmail.com">Parlons de votre projet</a>
        </div>
        <div className="hero_socials" aria-label="Réseaux professionnels">
          <a href="https://github.com/Beerus243" target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/fabrice-malanga-80a6ba282/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
          <span>Retrouvez-moi en ligne</span>
        </div>
      </div>

      <div className="hero_visual">
        <div className="hero_image_frame">
          <Image src={image} alt="Portrait de Fabrice Malanga" priority sizes="(max-width: 760px) 80vw, 420px" />
        </div>
        <div className="hero_note"><span>01</span><div><strong>Du concept au produit</strong><small>Web · Mobile · Données</small></div></div>
        <span className="hero_orbit" aria-hidden="true" />
      </div>

      <a className="scroll_hint" href="#about"><BsArrowDown aria-hidden="true" /> Défilez pour découvrir</a>
    </section>
  );
}
