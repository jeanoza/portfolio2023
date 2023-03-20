import Layout from "@/components/layout";
import Card from "@/components/project/card";
import { useRouter } from "next/router";

const PROJECTS = [
	{
		title: "Transcendence / 2023",
		content: {
			en: "Project at 42 Paris, this is a web application that implements real-time chat and a Pong game, along with a random matching system. It uses SocketIO/WebSocket and is configured by Docker.",
			fr: "Projet à 42 Paris, il s'agit d'une application web qui implémente un chat en temps réel ainsi qu'un jeu de Pong, avec un système de mise en correspondance aléatoire. Elle utilise SocketIO/WebSocket et est configurée par Docker.",
		},
		tools: [
			"TypeScript",
			"React / Next",
			"Node / Express / Nest",
			"Json Web Tokens / Two Factor Auth",
			"Typeorm / PostgreSQL",
			"SocketIO / WebSocket",
			"Docker-compose",
		],
		gitUrl: "https://github.com/jeanoza/ft_transcendence",
		prodUrl: undefined,
	},
	{
		title: "Développement de Web application / 2021 - 2022",
		content: {
			en: "Professional project at Estech Design, Web application development using Vanilla JS, SocketIO et WebSocket, as a Fullstack developer",
			fr: "Projet professionnel chez Estech Design, Développement d'une application Web fait par Vanilla JS, SocketIO et WebSocket, en tant que Développeur Fullstack",
		},
		tools: [
			"JavaScript / Vanilla JS",
			"Node / Express",
			"MySQL",
			"SocketIO / WebSocket",
		],
		gitUrl: undefined,
		prodUrl: undefined,
	},
	{
		title: "Développement de Web application / 2021",
		content: {
			en: "Professional project at Consortium, E-commerce application development using React, Django, and Kubernetes, as an intern.",
			fr: "Projet professionnel chez Comsortium, Développement d'une application E-commerce fait par React, Django et Kubernetes, en tant que stagiaire",
		},
		tools: [
			"JavaScript / React",
			"Python / Django",
			"TDD(Enzyme, Django-test-case)",
			"BDD(Cucumber)",
			"PostgreSQL",
			"Docker",
			"Kubernetes",
			"Jenkins X",
		],
		gitUrl: undefined,
		prodUrl: undefined,
	},
	{
		title: "Movistagram / 2021",
		content: {
			en: "Personal side project, Single Page Application that uses React to display information about movies and TV shows. Users can search for content and view details about it. It gets its data from the OMDB API.",
			fr: "Projet personnel, SPA qui utilise React pour afficher des informations sur les films et les émissions de télévision. Les utilisateurs peuvent rechercher du contenu et afficher des détails à son sujet. Les données sont récupérées à partir de l'API OMDB.",
		},
		tools: [
			"JavaScript",
			"React",
			"React Hooks",
			"Axios",
			"Movie API",
		],
		gitUrl: "https://github.com/jeanoza/movistagram",
		prodUrl: "https://jeanoza.github.io/movistagram/#/"
	},
];

export default function Project() {
	const {
		query: { lang },
	} = useRouter();
	return (
		<Layout>
			<div className="flex flex-col justify-center items-center gap-4">
				{PROJECTS.map((project, index) =>
					<Card
						key={index}
						title={project.title}
						content={project.content[lang as keyof Lang]}
						tools={project.tools}
						gitUrl={project.gitUrl}
						prodUrl={project.prodUrl}
					/>
				)}
			</div>
		</Layout>
	);
}
