import Layout from "@/components/layout";
import Card from "@/components/project/card";
import { useRouter } from "next/router";

const PROJECTS = [
	{
		title: "FT_transcendence (2023)",
		content: {
			en: "Project at 42 Paris, Web application in which realtime chat, pong game and its random matching system are implemented by using SocketIO/WebSocket and configured by docker.",
			fr: "Je suis capable de coder avec ",
		},
		tools: [
			"TypeScript",
			"React / Next",
			"Node / Express / Nest",
			"Typeorm / PostgreSQL",
			"SocketIO / WebSocket",
			"Docker-compose",
		],
		imageUrl: "/can.jpeg",
	},
	{
		title: "Movistagram (2021)",
		content: {
			en: "Personal side project, application to practice react, which show drama and movies by using Movie API",
			fr: "Je suis en train d'apprendre",
		},
		tools: [
			"JavaScript",
			"React",
			"Axios",
			"Movie API",
		],
		imageUrl: "/work.jpeg",
	},
];

export default function Project() {
	const {
		query: { lang },
	} = useRouter();
	return (
		<Layout>
			<div className="">
				{PROJECTS.map((project, index) =>
					<Card
						key={index}
						title={project.title}
						content={project.content[lang as keyof Lang]}
						tools={project.tools}
						imageUrl={project.imageUrl}
					/>
				)}
			</div>
		</Layout>
	);
}
