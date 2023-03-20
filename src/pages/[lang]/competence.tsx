import Card from "@/components/competence/card";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import { useRouter } from "next/router";

const COMPETENCES = [
	{
		title: {
			en: "Acquired",
			fr: "Acquises",
		},
		content: {
			en: "I am able to code with",
			fr: "Je suis capable de coder avec ",
		},
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
		imageUrl: "/images/competence/can.jpeg",
	},
	{
		title: {
			en: "In progress",
			fr: "En cours",
		},
		content: {
			en: "I am learning",
			fr: "Je suis en train d'apprendre",
		},
		tools: [
			"Design Pattern",
			"Clean Code",
			"Test Driven Development",
			"Restful API",
			"Computer Science",
		],
		imageUrl: "/images/competence/work.jpeg",
	},
	{
		title: {
			en: "In futur",
			fr: "A venir",
		},
		content: {
			en: "I would like to learn",
			fr: "J'aimerais apprendre",
		},
		tools: ["Spring / Spring boot", "Flask", "Django", "Kubernetes"],
		imageUrl: "/images/competence/futur.webp",
	},
	{
		title: {
			en: "Other skills",
			fr: "Autre connaissances",
		},
		content: {
			en: "I learned and know",
			fr: "J'ai appris et comprends",
		},
		tools: ["Docker", "Git", "Agile(Scrum)", "Java", "Python"],
		imageUrl: "/images/competence/knowledge.jpeg",
	},
];

export default function Competence() {
	const {
		query: { lang },
	} = useRouter();
	return (
		<Layout>
			<div className="flex flex-wrap gap-4 justify-center">
				{COMPETENCES.map((competence, index) => (
					<Card
						key={index}
						title={competence.title[lang as keyof Lang]}
						content={competence.content[lang as keyof Lang]}
						tools={competence.tools}
						imageUrl={competence.imageUrl}
					/>
				))}
			</div>
		</Layout>
	);
}
