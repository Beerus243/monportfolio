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
			"Dans le développement Web... Fabrice ne fait pas que coder, Il peut aussi faire le suivi des projets et son élaboration. Il va de la modélisation d'un système à sa mise en ligne. Il peut aussi faire la maintenace d'une application web ou d'un site web. Il fait plusieurs technologies et veut en apprendre encore plus. Dans la conception web, Fabrice peut faire le front et Backend d'un site Web.",
		subContent:
			" HTML, Css3, Javascript, TypeScript, React, Nextjs",
		mobileName: "Dév Web",
	},
	{
		id: 1,
		icon: BiMobileAlt,
		name: "Développement mobile",
		content:
			"Tout comme pour le web, Fabrice fait la conception des applications mobiles. Il peut étudier, modéliser et concevoir le système pour une application. Et bien-sûr il peut aussi faire la maintenance de ce dernier.",
		subContent: "React Native, flutter",
		mobileName: "Dév Mob",
	},
		{
		id: 2,
		icon: MdDesignServices,
		name: "Conception base des données",
		content:
			"Dans le Domaine de base des données avec une solide expertise en MySQL et SQL, je maîtrise l'art de la gestion et de la manipulation des données. J'ai acquis une expérience approfondie la modélisation de bases données, la création de requêtes complexes, et l'optimisation des performances des systèmes de gestion de bases de données.",
		subContent:
			"Mysql, Sql",
		mobileName: "Backend",
	},
];
