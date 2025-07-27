import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
	return (
		<footer>
			<div className="main_icons">
				<a
					href="https://github.com/Beerus243"
					target="_blank"
					rel="noreferrer">
					{" "}
					<BsGithub size="30" />{" "}
				</a>
				<a
					href="https://www.linkedin.com/in/fabrice-malanga-80a6ba282/"
					target="_blank"
					rel="noreferrer">
					{" "}
					<BsLinkedin size="30" />{" "}
				</a>
			</div>
			<div>copyright@2025</div>
		</footer>
	);
}
