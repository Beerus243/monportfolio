import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import image from "./images/fababy.jpg";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Main() {
  return (
    <main className="site_main" id="header">
      <div className="main_image">
        <Image src={image} alt="Teddy Cubaka" width="225" height="300" />
      </div>
      <h1 className="font-bold text-4xl text-[#123853]">Fabrice MALANGA Murbal</h1>
      <div className="text-lg">Développeur fullstack</div>
      <div className="main_icons">
        <a
          href="https://github.com/Beerus243"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsGithub size="30" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/fabrice-malanga-80a6ba282/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsLinkedin size="30" />{" "}
        </a>
      </div>
      <Link
        to="about"
        style={{ color: "black" }}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <BsChevronCompactDown size="25" />
      </Link>
    </main>
  );
}
