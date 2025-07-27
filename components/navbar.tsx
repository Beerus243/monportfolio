import React, { useCallback, useEffect, useState } from "react";
import { BsTelephone, BsCheckCircleFill, BsWhatsapp } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

interface CopyType {
  mail: boolean;
  phone: boolean;
}

export default function Navbar() {
  const [showContacts, setShowContacts] = useState(false);
  const [copy, setCopy] = useState<CopyType>({
    mail: false,
    phone: false,
  });
  const [scrollingIsHeigh, setScrollingIsHeigh] = useState<boolean>(false);
  const [scrollHeight, setY] = useState(0);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (scrollHeight > (1 / 2) * window.screen.height) setScrollingIsHeigh(true);
      else setScrollingIsHeigh(false);

      setY(window.scrollY);
    },
    [scrollHeight]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header className={"bg-white w-full h-[10vh] max-md:h-[70px] text-[#123853] sticky top-0 flex justify-between z-20 px-5 items-center max-md:px-3 my-0" + (scrollHeight > 100 ? " shadow" : "")} id="navbar">
      <h1 className="font-bold text-3xl text-[#123853]">
        {scrollHeight > 100 ?
          <span className="shower_animation">Fabrice Malanga</span>
          : ""}
      </h1>
      <div
        onClick={() => {
          if (!showContacts) setShowContacts(true)
        }}
        className="h-[50px] w-[50px] bg-[#123853] rounded-3xl text-white transition ease-in duration-500 flex justify-end items-start"
      >
        {
          showContacts ? <div
            onClick={() => { setShowContacts(false) }}
            className="absolute top-0 z-[5] right-0 w-screen h-screen bg-transparent "
          ></div> : null
        }
        {showContacts ? (
          <div className="bg-[#123853] h-fit w-fit relative rounded-3xl z-50 flex flex-col items-end p-2.5">
            <div className="text-white"><BsTelephone className="m-auto" size="30px" /></div>
            <div className="z-50 p-2.5 flex flex-col gap-5">
              <a
                href="https://wa.me/243831115891"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white"
                onClick={() => {
                  navigator.clipboard.writeText("+243 831 115 891");
                  setCopy({ ...copy, phone: true });
                  setTimeout(() => setCopy({ ...copy, phone: false }), 2000);
                }}
              >
                <BsWhatsapp size={20} />
                {copy.phone ? <BsCheckCircleFill size={20} /> : <FiCopy size={20} />}
                +243 831 115 891{" "}
              </a>
              <a
                href="mailto:malangafabrice@gmail.com"
                className="flex items-center gap-3 text-white"
                onClick={() => {
                  navigator.clipboard.writeText("malangafabrice@gmail.com");
                  setCopy({ ...copy, mail: true });
                  setTimeout(() => setCopy({ ...copy, mail: false }), 2000);
                }}
              >
                <SiGmail size={20} />
                {copy.mail ? <BsCheckCircleFill size={20} /> : <FiCopy size={20} />}
                malangafabrice@gmail.com{" "}
              </a>
            </div>
          </div>
        ) : <div className="h-[50px] w-[50px] flex justify-center items-center text-white"><BsTelephone className="m-auto" size="30px" /></div>}
      </div>
    </header>
  );
}
