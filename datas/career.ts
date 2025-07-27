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
			"Fabrice a fait ses études humanitaires au collège saint Gabriel, a kinshasa. Il a finit en option Biochimie avec un diplôme de 68% en 2018. Après avoir obtenu son diplôme d'État. Il a toujours su que l'informatique était sa passion et a commencé ses études supérieurs à L'ESMICOM où en 2022 il finira par décrocher son diplome de Graduat.",
		mobileName: "Scolaire",
	},
	{
		id: 1,
		name: "Extra-Scolaire",
		icon: TbSchool,
		content:
			"En déhors de la scolarité, Fabrice fait et a fait plusieurs activités. Depuis ses 13 ans, il a fait du karaté Shotokan et a bien-sûr beaucoup progressé dans le mouvement, passionné de la Callisthénie Fabrice continue de travailler chaque jour quand il a un peu de temps libre.",
		mobileName: "Extra-Scol.",
	},
	{
		id: 2,
		name: "Professionnelle",
		icon: MdWorkOutline,
		content:
			"Dans le domaine Professionnel Fabrice travaille entant que Développeur web et Mobile pour l'association ZandoPourTous, et passer le reste du temps à donner des cours à domicile sur la conception des bases de donnée.",
		mobileName: "Profession.",
	},
];

export default careerArray;
