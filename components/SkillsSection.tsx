import skills from "../datas/skills";

interface LocalProps {
  name: string;
  Icon: any;
  color: string;
}

function Skill({ name, Icon, color }: LocalProps) {
  return (
    <div
      className="group cursor-default w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] border border-[#123853] rounded-md text-center flex flex-col justify-evenly items-center skill_card hover:bg-[#123853cb] hover:text-white transition ease-in duration-500"
    >
      <Icon
        className="text-[#123853] group-hover:scale-110 group-hover:transition group-hover:ease-in group-hover:duration-500 group-hover:text-white"
        size={40}
      />
      <span style={{ textAlign: "center" }}> {name} </span>
    </div>
  );
}

// Filtres adaptés à la nouvelle organisation
const languageSkills = skills.filter(s => s.category === "Langage");
const webSkills = skills.filter(s => s.category === "Web");
const mobileSkills = skills.filter(s => s.category === "Mobile");
const bddSkills = skills.filter(s => s.category === "BDD");
const versioningSkills = skills.filter(s => s.category === "Versioning");
const designSkills = skills.filter(s => s.category === "Design");
const outilsSkills = skills.filter(s => s.category === "Outils");
const systemSkills = skills.filter(s => s.category === "Système");

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">Voici ce que peut faire Fabrice</h2>
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Langages de programmation & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {languageSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-langage-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Développement Web</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {webSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-web-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Développement Mobile</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {mobileSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-mobile-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Base de Données</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {bddSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-bdd-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Versioning</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {versioningSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-versioning-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl !text-center mb-4 text-[#123853]">Design</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {designSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-design-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Outils</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {outilsSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-outils-${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 !text-center text-[#123853]">Système</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {systemSkills.map((data, index) => (
              <Skill
                name={data.name}
                color={data.color}
                Icon={data.icon}
                key={`${data.name}-system-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}