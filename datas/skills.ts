import { BsGithub } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiPhp,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiFigma,
    SiMysql,
    SiMongodb,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAsana,
    SiVisualstudiocode,
    SiMicrosoftexcel,
    SiMicrosoftword,
    SiDiscord,
    SiLinux,
    SiCanva,
    SiPython,
    SiSqlite,
    SiGitlab,
    SiGmail,
    SiSlack,
    SiGoogledrive,
    SiGooglechrome,
    SiFirefox,
    SiKalilinux,
    SiFlutter,
    SiDart,
} from "react-icons/si";
import { IconType } from "react-icons";

interface LocalData {
    name: string;
    icon: IconType;
    color: string;
    category: "Web" | "Mobile" | "BDD" | "Système" | "Design" | "Outils" | "Versioning" | "Langage";
    subcategory?: string;
}

const skills: LocalData[] = [
    // Langages de programmation & Frameworks
    {
        name: "Python",
        icon: SiPython,
        color: "#346fa0",
        category: "Langage",
        subcategory: "Back-end",
    },
    {
        name: "PHP",
        icon: SiPhp,
        color: "#8993be",
        category: "Langage",
        subcategory: "Back-end",
    },
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
        color: "#f0db4f",
        category: "Langage",
        subcategory: "Front-end",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#007acc",
        category: "Langage",
        subcategory: "Front-end",
    },
    {
        name: "Dart",
        icon: SiDart,
        color: "#0175C2",
        category: "Langage",
        subcategory: "Mobile",
    },
    {
        name: "React.js",
        icon: SiReact,
        color: "#61dafb",
        category: "Langage",
        subcategory: "Front-end Framework",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        category: "Langage",
        subcategory: "Front-end Framework",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#3C873A",
        category: "Langage",
        subcategory: "Back-end Framework",
    },

    // Web
    {
        name: "HTML5",
        icon: AiFillHtml5,
        color: "#e34c26",
        category: "Web",
    },
    {
        name: "CSS3",
        icon: DiCss3,
        color: "#264de4",
        category: "Web",
    },

    // Mobile
    {
        name: "React Native",
        icon: SiReact,
        color: "#61dafb",
        category: "Mobile",
    },
    {
        name: "Flutter",
        icon: SiFlutter,
        color: "#02569B",
        category: "Mobile",
    },

    // Base de Données
    {
        name: "MySQL",
        icon: SiMysql,
        color: "#00758f",
        category: "BDD",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        category: "BDD",
    },
    {
        name: "SQLite",
        icon: SiSqlite,
        color: "#003b57",
        category: "BDD",
    },

    // Système & Sécurité
    {
        name: "Linux",
        icon: SiLinux,
        color: "#1793d1",
        category: "Système",
    },
    {
        name: "Kali Linux",
        icon: SiKalilinux,
        color: "#557C94",
        category: "Système",
    },

    // Versioning
    {
        name: "Git",
        icon: FaGitAlt,
        color: "#f34f29",
        category: "Versioning",
    },
    {
        name: "GitHub",
        icon: BsGithub,
        color: "#181717",
        category: "Versioning",
    },
    {
        name: "GitLab",
        icon: SiGitlab,
        color: "#fc6d26",
        category: "Versioning",
    },

    // Design
    {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
        category: "Design",
    },
    {
        name: "Adobe Photoshop",
        icon: SiAdobephotoshop,
        color: "#001E36",
        category: "Design",
    },
    {
        name: "Adobe Illustrator",
        icon: SiAdobeillustrator,
        color: "#FF9A00",
        category: "Design",
    },
    {
        name: "Canva",
        icon: SiCanva,
        color: "#00C4CC",
        category: "Design",
    },

    // Outils
    {
        name: "VS Code",
        icon: SiVisualstudiocode,
        color: "#0078d7",
        category: "Outils",
    },
    {
        name: "Slack",
        icon: SiSlack,
        color: "#4A154B",
        category: "Outils",
    },
    {
        name: "Discord",
        icon: SiDiscord,
        color: "#5865F2",
        category: "Outils",
    },
    {
        name: "Asana",
        icon: SiAsana,
        color: "#F06A6A",
        category: "Outils",
    },
    {
        name: "Google Drive",
        icon: SiGoogledrive,
        color: "#4285F4",
        category: "Outils",
    },
    {
        name: "Google Chrome",
        icon: SiGooglechrome,
        color: "#4285F4",
        category: "Outils",
    },
    {
        name: "Firefox",
        icon: SiFirefox,
        color: "#FF7139",
        category: "Outils",
    },
    {
        name: "Gmail",
        icon: SiGmail,
        color: "#D14836",
        category: "Outils",
    },
    {
        name: "Microsoft Excel",
        icon: SiMicrosoftexcel,
        color: "#217346",
        category: "Outils",
    },
    {
        name: "Microsoft Word",
        icon: SiMicrosoftword,
        color: "#2B579A",
        category: "Outils",
    },
];

export default skills;
