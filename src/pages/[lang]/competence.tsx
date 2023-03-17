import Card from "@/components/competence/card";
import Layout from "@/components/layout";
import Seo from "@/components/seo";

const COMPETENCES = [
	{
		title: "Acquises",
		content: "Je suis capable de coder avec ",
		tools: [
			"JavaScript / TypeScript",
			"React / Next",
			"Node / Express / Nest",
			"SocketIO / WebSocket",
			"MySQL / PostgreSQL",
			"MongoDB",
			"C/C++",
			"Shell(linux / unix)",
		],
		imageUrl: "/can.jpeg",
	},
	{
		title: "En cours",
		content: "Je suis en train d'apprendre",
		tools: [
			"Design Pattern",
			"Clean Code",
			"Test Driven Development",
			"Restful API",
			"Computer Science",
		],
		imageUrl: "/work.jpeg",
	},
	{
		title: "A venir",
		content: "J'aimerais apprendre",
		tools: ["Spring / Spring boot", "Flask", "Django", "Kubernetes"],
		imageUrl: "/futur.webp",
	},
	{
		title: "Autre connaissances",
		content: "J'ai appris et comprends",
		tools: ["Docker", "Git", "Agile(Scrum)", "Java", "Python"],
		imageUrl: "/knowledge.jpeg",
	},
];

export default function Competence() {
	return (
		<Layout>
			<div className="flex flex-wrap gap-4 justify-center">
				{COMPETENCES.map((competence, index) => (
					<Card
						key={index}
						title={competence.title}
						content={competence.content}
						tools={competence.tools}
						imageUrl={competence.imageUrl}
					/>
				))}
			</div>
		</Layout>
	);
}
