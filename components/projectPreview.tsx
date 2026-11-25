import type { ReactNode } from "react";
import Image from "next/image";

interface ProjectPreviewProps {
  name: string;
  previewImage?: string;
}

const previewTypes: Record<string, string> = {
  Kelasi: "education",
  Rdv: "rdv",
  Rexal: "rexal",
  ZandoMarket: "market_mobile",
  "Fabrice Malanga": "portfolio",
  "DRC Sky Agency": "travel",
  Tokutana: "portfolio",
};

function BrowserFrame({ children, address }: { children: ReactNode; address: string }) {
  return (
    <div className="preview_browser">
      <div className="preview_browser_bar">
        <span className="preview_browser_dots"><i /><i /><i /></span>
        <span className="preview_address">{address}</span>
        <span className="preview_browser_menu">•••</span>
      </div>
      {children}
    </div>
  );
}

function EducationPreview() {
  return <BrowserFrame address="kelasi.app">
    <div className="preview_site preview_education">
      <div className="preview_site_nav"><b>kelasi<span>.</span></b><span>Accueil</span><span>Notre approche</span><button>Espace parent</button></div>
      <div className="preview_education_body"><div><small>LA RÉUSSITE SE CONSTRUIT ENSEMBLE</small><strong>Suivez chaque<br />étape de sa<br /><em>réussite.</em></strong><span>Les progrès scolaires de votre enfant, toujours à portée de main.</span><button>Découvrir Kelasi　↗</button></div><div className="preview_school_art"><div className="preview_school_sun" /><div className="preview_school_book">✦<br /><b>2e</b><br />TRIMESTRE</div><div className="preview_school_line" /></div></div>
      <div className="preview_edu_stats"><span>✓　Notes & résultats</span><span>◷　Suivi en temps réel</span><span>♡　Vie scolaire</span></div>
    </div>
  </BrowserFrame>;
}

function DatingPreview() {
  return <div className="rdv_mobile_preview">
    <div className="rdv_mobile_story"><small>APPLICATION MOBILE</small><strong>De belles<br />rencontres,<br /><em>à portée de main.</em></strong><span>Flutter · Firebase</span></div>
    <div className="rdv_phone"><div className="rdv_phone_screen"><div className="rdv_status_bar"><span>9:41</span><span>●●●　▰</span></div><div className="rdv_app_header"><b>rdv<span>♥</span></b><i>⌕　♡</i></div><div className="rdv_app_prompt"><small>PRÈS DE VOUS</small><b>Quelqu’un vous attend.</b></div><div className="rdv_app_person"><div className="rdv_app_avatar"><span>A</span></div><div className="rdv_app_person_meta"><b>Amara, 24</b><small>Kinshasa · En ligne</small></div><span className="rdv_app_verified">✓</span></div><div className="rdv_app_actions"><i>×</i><i>♡</i><i>✦</i></div><div className="rdv_app_tabbar"><span>⌂</span><span>♡</span><span>✉</span><span>◉</span></div></div></div>
    <span className="rdv_mobile_spark">✦</span>
  </div>;
}

function RexalPreview() {
  return <BrowserFrame address="rexal.shop">
    <div className="preview_site preview_rexal">
      <div className="preview_site_nav"><b>REXAL<span>®</span></b><span>Nos saveurs</span><span>À propos</span><button>Panier　0</button></div>
      <div className="preview_rexal_body"><div><small>LE BONHEUR À CROQUER</small><strong>Le pop-corn<br />qui fait <em>pop !</em></strong><span>Du vrai maïs, une touche de gourmandise et beaucoup de plaisir.</span><button>Commander　↗</button></div><div className="preview_popcorn"><span>🍿</span><b>REXAL</b></div></div>
      <div className="preview_rexal_badge">FRAIS & CROUSTILLANT</div>
    </div>
  </BrowserFrame>;
}

function MarketPreview() {
  return <div className="zando_mobile_preview">
    <div className="zando_mobile_story"><small>APPLICATION MOBILE</small><strong>Le marché<br />à portée de<br /><em>main.</em></strong><span>Achats · Ventes · Services</span></div>
    <div className="zando_phone"><div className="zando_phone_screen"><div className="zando_status_bar"><span>9:41</span><span>●●●　▰</span></div><div className="zando_app_header"><b>zando<span>market</span></b><i>♙</i></div><div className="zando_search">⌕　Rechercher un article</div><div className="zando_categories"><span>⌂<small>Maison</small></span><span>▱<small>Auto</small></span><span>▣<small>Emploi</small></span><span>•••<small>Autres</small></span></div><div className="zando_app_banner"><small>BIENVENUE SUR ZANDO</small><b>Trouvez votre<br />prochain coup<br />de cœur.</b><span>Des annonces près de vous</span></div><div className="zando_app_section"><b>À découvrir</b><div><i>◉</i><i>✿</i></div></div><div className="zando_tabbar"><span>⌂<small>Accueil</small></span><span>♡<small>Favoris</small></span><span>＋<small>Publier</small></span><span>✉<small>Messages</small></span></div></div></div>
    <span className="zando_mobile_spark">✦</span>
  </div>;
}

function PortfolioPreview() {
  return <BrowserFrame address="fabrice.dev">
    <div className="preview_site preview_portfolio">
      <div className="preview_site_nav"><b>FM<span>.</span></b><span>À propos</span><span>Projets</span><span>Contact</span><button>Discutons　↗</button></div>
      <div className="preview_portfolio_body"><div><small>DÉVELOPPEUR WEB & MOBILE</small><strong>Je construis<br />des idées qui<br /><em>font avancer.</em></strong><span>Des produits numériques utiles, du concept à la mise en ligne.</span><button>Voir mes projets　↗</button></div><div className="preview_portfolio_art"><span>FM</span><i>✳</i></div></div>
      <div className="preview_portfolio_footer">KINSHASA, RDC　·　DISPONIBLE POUR DE NOUVEAUX PROJETS</div>
    </div>
  </BrowserFrame>;
}

function TravelPreview() {
  return <BrowserFrame address="drc-sky-agency.vercel.app">
    <div className="preview_site preview_travel">
      <div className="preview_site_nav"><b>DRC<span> SKY</span></b><span>Destinations</span><span>Nos engagements</span><span>Conseils</span><button>Planifier un voyage</button></div>
      <div className="preview_travel_body"><div><small>VOYAGER AUTREMENT EN RDC</small><strong>La nature<br />nous montre<br /><em>le chemin.</em></strong><span>Des voyages responsables au cœur des paysages congolais.</span><button>Explorer les destinations　↗</button></div><div className="preview_travel_landscape"><div className="preview_travel_sun" /><div className="preview_travel_mountain mountain_back" /><div className="preview_travel_mountain mountain_front" /><div className="preview_travel_water" /><span>PARC NATIONAL<br />DES VIRUNGA</span></div></div>
      <div className="preview_travel_footer">✳　GUIDES LOCAUX　　✳　SÉJOURS ÉTHIQUES　　✳　NATURE PRÉSERVÉE</div>
    </div>
  </BrowserFrame>;
}

const previews: Record<string, () => JSX.Element> = {
  education: EducationPreview,
  rdv: DatingPreview,
  rexal: RexalPreview,
  market: MarketPreview,
  market_mobile: MarketPreview,
  portfolio: PortfolioPreview,
  travel: TravelPreview,
};

export default function ProjectPreview({ name, previewImage }: ProjectPreviewProps) {
  if (previewImage) {
    return (
      <div className="project_preview project_preview_screenshot" aria-hidden="true">
        <Image className="project_preview_image" src={previewImage} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
      </div>
    );
  }

  const type = previewTypes[name] || "portfolio";
  const Preview = previews[type];
  return <div className={`project_preview project_preview_${type}`} aria-hidden="true"><Preview /></div>;
}

