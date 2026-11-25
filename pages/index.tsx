import Head from "next/head";
import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Achievement from "../components/achievement";
import Career from "../components/career";
import Footer from "../components/footer";
import { BiArrowToTop } from "react-icons/bi";
import ScrollToTop from "react-scroll-up";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrice Malanga — Développeur web & mobile</title>
        <meta
          name="description"
          content="Fabrice Malanga, développeur web et mobile à Kinshasa, conçoit des expériences numériques claires et performantes, du concept à la mise en ligne."
        />
        <meta name="title" content="Portefolio developpeur fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <Navbar />
        <Main />
        <About />
        <ScrollToTop showUnder={160}>
          <span className="go_up_button">
            {" "}
            <BiArrowToTop size="30" color="white" />{" "}
          </span>
        </ScrollToTop>
        <Achievement />
        <Career />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
