import Stack from "@/components/about/stack";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

const TITLES = [
	{
		en: "Persevering, Curious, Organized, and Supportive",
		fr: "Persévérant, Curieux, Organisé et Solidaire",
	},
	{
		en: "Make from a crisis to an opportunity",
		fr: "Transformer une crise en une opportunité",
	},
	{
		en: "A philosophy graduate started coding since Covid-19...",
		fr: "Etudiant sortant de sciences humaines a commencé à coder depuis Covid-19...",
	},
];
const CONTENTS = [
	{
		en: "	Hello, I am a Fullstack developer with over a year of experience as a Fullstack developer at Estech Design. I am currently seeking a position as a junior backend developer and I possess coding skills in multiple languages such as C, C++, Java, Python, JavaScript, and TypeScript, as well as practical skills in using frameworks such as React, Next.js, Express, and Nest.js.",
		fr: "Bonjour, je suis un développeur Fullstack avec plus d'un an d'expérience en tant que Fullstack développeur chez Estech Design. Je suis actuellement à la recherche d'un poste de développeur backend junior et je possède des compétences en codage dans plusieurs langages tels que C, C++, Java, Python, JavaScript et TypeScript, ainsi que des compétences pratiques en utilisant des frameworks tels que React, Next.js, Express et Nest.js. ",
	},
	{
		en: "I am also a student at 42 Paris, an innovative and renowned programming school. I have learned to code independently and work collaboratively with other developers effectively and efficiently.",
		fr: "Je suis également un étudiant de 42 Paris, une école de programmation innovante et renommée. J'ai appris à coder de manière autonome et à travailler en collaboration avec d'autres développeurs de manière efficace et efficiente.",
	},
	{
		en: "As a Fullstack developer, I have gained valuable experience in designing and implementing databases, including PostgreSQL, MySQL, and MongoDB. Additionally, I have experience using Docker for deploying my applications, which enables me to create robust and easily deployable applications.",
		fr: "En tant que développeur Fullstack, j'ai acquis une expérience précieuse en matière de conception et d'implémentation de bases de données, notamment PostgreSQL, MySQL et MongoDB. De plus, j'ai de l'expérience dans l'utilisation de Docker pour le déploiement de mes applications, ce qui me permet de créer des applications robustes et faciles à déployer.",
	},
	{
		en: "I am passionate about technology, motivated, and eager to learn and grow. With my coding and database skills, as well as my experience in using Docker, I am confident that I can bring added value to any company in search of a talented and motivated junior backend developer.",
		fr: "Je suis passionné par la technologie, motivé et désireux d'apprendre et de grandir. Avec mes compétences en codage et en bases de données, ainsi que mon expérience dans l'utilisation de Docker, je suis convaincu que je peux apporter une valeur ajoutée à toute entreprise à la recherche d'un développeur backend junior talentueux et motivé.",
	},
];

export default function About() {
	const {
		query: { lang },
	} = useRouter();
	if (!lang) return null;
	return (
		<Layout>
			<div className="flex flex-col gap-6 rounded-lg shadow-lg">
				<div className="flex flex-col gap-4 justify-center items-center p-4">
					<div className="avatar rounded-full mx-auto" />
					<h3 className="font-semibold">{TITLES[0][lang as keyof Lang]}</h3>
					<h3 className="text-primary">{TITLES[1][lang as keyof Lang]}</h3>
					<h3 className="text-slate-400 italic">
						{TITLES[2][lang as keyof Lang]}
					</h3>
				</div>
				{typeof lang === "string" && <Stack lang={lang} />}
				<div className="p-4">
					{CONTENTS.map((content, index) => (
						<p className="my-4" key={index}>
							{content[lang as keyof Lang]}
						</p>
					))}
				</div>
			</div>
			<style jsx>{`
				.avatar {
					min-width: 120px;
					min-height: 120px;
					background-image: url("/kychoi.jpeg");
					background-size: cover;
					background-position: center center;
				}
			`}</style>
		</Layout>
	);
}
