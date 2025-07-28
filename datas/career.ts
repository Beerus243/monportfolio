import { IconType } from "react-icons";
import { TbSchoolOff, TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";

export interface DescriptiveButton {
	id: number;
	name: string;
	icon: IconType;
	content: string;
	mobileName: string;
	subContent?: string;
}

const careerArray: DescriptiveButton[] = [
	{
		id: 0,
		name: "Scolaire",
		icon: TbSchoolOff,
		content:
			"J’ai effectué ma scolarité au Collège Saint Gabriel à Kinshasa, où j’ai obtenu mon diplôme d’État en Biochimie avec 68% en 2018. Passionné d’informatique, j’ai poursuivi mes études supérieures à l’ESMICOM et décroché mon diplôme de Graduat en 2022.",
		mobileName: "Scolaire",
	},
	{
		id: 1,
		name: "Extra-Scolaire",
		icon: TbSchool,
		content:
			"En dehors du parcours académique, je pratique le karaté Shotokan depuis l’adolescence et je m’investis dans la callisthénie dès que j’ai du temps libre. Ces activités m’apportent rigueur, discipline et équilibre au quotidien.",
		mobileName: "Extra-Scol.",
	},
	{
		id: 2,
		name: "Professionnelle",
		icon: MdWorkOutline,
		content:
			"Sur le plan professionnel, j’occupe le poste de développeur web et mobile pour l’association ZandoPourTous. J’interviens également en tant que formateur à domicile, notamment sur la conception de bases de données.",
		mobileName: "Profession.",
	},
];

export default careerArray;
