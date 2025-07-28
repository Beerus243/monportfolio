import { BsLaptop } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { DescriptiveButton } from "./career";

export const aboutDetails: DescriptiveButton[] = [
	{
		id: 0,
		icon: BsLaptop,
		name: "Développement web",
		content:
			"Passionné par le web, je ne me limite pas au code : j’accompagne chaque projet de sa conception jusqu’à sa mise en ligne. J’interviens aussi bien sur le front-end que sur le back-end, en m’assurant de la cohérence, de la performance et de la maintenabilité des applications. Curieux de nature, je reste toujours à l’affût des dernières technologies pour proposer des solutions modernes et efficaces.",
		subContent:
			"HTML, CSS3, JavaScript, TypeScript, React, Next.js",
		mobileName: "Dév Web",
	},
	{
		id: 1,
		icon: BiMobileAlt,
		name: "Développement mobile",
		content:
			"Le développement mobile est pour moi un véritable terrain de création. J’aime concevoir des applications intuitives et performantes, du cahier des charges au déploiement sur les stores. Mon objectif : offrir une expérience fluide, agréable et cohérente sur tous les types d’écrans.",
		subContent: "React Native, Flutter",
		mobileName: "Dév Mob",
	},
	{
		id: 2,
		icon: MdDesignServices,
		name: "Conception de bases de données",
		content:
			"La donnée est le cœur de toute application. J’ai à cœur de concevoir des bases de données solides, bien structurées et optimisées. De la modélisation aux requêtes complexes, j’assure une gestion efficace des informations pour garantir fiabilité et performance.",
		subContent:
			"MySQL, SQL",
		mobileName: "Backend",
	},
];
