import Layout from "@/components/layout";
import Seo from "@/components/seo";

const TITLES = [
	"Persévérant, Curieux, Organisé et Solidaire",
	"Make from a crisis to an opportunity",
	"Etudiant sortant de sciences humaines a commencé à coder depuis Covid-19..."
]
const CONTENTS = [
	"Bonjour, je suis un développeur Fullstack avec plus d'un an d'expérience en tant que Fullstack développeur chez Estech Design. Je suis actuellement à la recherche d'un poste de développeur backend junior et je possède des compétences en codage dans plusieurs langages tels que C, C++, Java, Python, JavaScript et TypeScript, ainsi que des compétences pratiques en utilisant des frameworks tels que React, Next.js, Express et Nest.js. ",
	"Je suis également un étudiant de 42 Paris, une école de programmation innovante et renommée. J'ai appris à coder de manière autonome et à travailler en collaboration avec d'autres développeurs de manière efficace et efficiente.",
	"En tant que développeur Fullstack, j'ai acquis une expérience précieuse en matière de conception et d'implémentation de bases de données, notamment PostgreSQL, MySQL et MongoDB.De plus, j'ai de l'expérience dans l'utilisation de Docker pour le déploiement de mes applications, ce qui me permet de créer des applications robustes et faciles à déployer.",
	"Je suis passionné par la technologie, motivé et désireux d'apprendre et de grandir. Avec mes compétences en codage et en bases de données, ainsi que mon expérience dans l'utilisation de Docker, je suis convaincu que je peux apporter une valeur ajoutée à toute entreprise à la recherche d'un développeur backend junior talentueux et motivé."
]

export default function About() {
	return <Layout>
		<Seo content="About" />
		<div className="flex flex-col gap-4 justify-center items-center my-4 p-4 rounded-lg shadow-lg">
			<div className="avatar rounded-full mx-auto" />
			<h3 className="font-semibold">{TITLES[0]}</h3>
			<h3 className="text-primary">{TITLES[1]}</h3>
			<h3 className="text-slate-400 italic">{TITLES[2]}</h3>
		</div>
		<div className="p-4 rounded-lg shadow-lg">
			{CONTENTS.map((content, index) => <p className="my-4" key={index}>{content}</p>)}
		</div>
		<style jsx>{`
			.avatar {
				min-width:120px;
				min-height:120px;
				background-image: url("/kychoi.jpeg");
				background-size: cover;
				background-position: center center;
			}
		`}</style>
	</Layout >
}