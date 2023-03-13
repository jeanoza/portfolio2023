import Card from "@/components/competence/card";
import Layout from "@/components/layout";

const COMPETENCES = [
	{
		title: "Acquises",
		content: "Je suis capable de coder avec ",
		tools: [
			"JavaScript/TypeScript",
			"React/Next",
			"Node/Express/Nest",
			"SocketIO/WebSocket",
			"MySQL/PostgreSQL",
			"MongoDB",
			"C/C++"
		],
		imageUrl: "/can.jpeg"
	},
	{
		title: "A venir",
		content: "J'aimerais apprendre",
		tools: ["Spring/Spring boot"],
		imageUrl: "/futur.webp"

	},
	{
		title: "Autre connaissances",
		content: "J'ai appris et comprends",
		tools: ["Docker", "Github", "Agile(Scrum)", "Java", "Python"],
		imageUrl: "/can.jpeg"
	}
]

export default function Competence() {
	return <Layout>
		<div className="w-100 flex flex-wrap gap-4 justify-center">
			{COMPETENCES.map(
				(competence, index) => <Card
					key={index}
					title={competence.title}
					content={competence.content} tools={competence.tools}
					imageUrl={competence.imageUrl}
				/>
			)}
		</div>
	</Layout>
}