import Layout from "@/components/layout";

const TITLES = [
	"Persévérant, Curieux, Organisé et Solidaire",
	"Make from a crisis to an opportunity",
	"Etudiant sortant de sciences humaines a commencé à coder depuis Covid-19...",
];
const CONTENTS = [
	"Bonjour, je suis un développeur Fullstack avec plus d'un an d'expérience en tant que Fullstack développeur chez Estech Design. Je suis actuellement à la recherche d'un poste de développeur backend junior et je possède des compétences en codage dans plusieurs langages tels que C, C++, Java, Python, JavaScript et TypeScript, ainsi que des compétences pratiques en utilisant des frameworks tels que React, Next.js, Express et Nest.js. ",
	"Je suis également un étudiant de 42 Paris, une école de programmation innovante et renommée. J'ai appris à coder de manière autonome et à travailler en collaboration avec d'autres développeurs de manière efficace et efficiente.",
	"En tant que développeur Fullstack, j'ai acquis une expérience précieuse en matière de conception et d'implémentation de bases de données, notamment PostgreSQL, MySQL et MongoDB.De plus, j'ai de l'expérience dans l'utilisation de Docker pour le déploiement de mes applications, ce qui me permet de créer des applications robustes et faciles à déployer.",
	"Je suis passionné par la technologie, motivé et désireux d'apprendre et de grandir. Avec mes compétences en codage et en bases de données, ainsi que mon expérience dans l'utilisation de Docker, je suis convaincu que je peux apporter une valeur ajoutée à toute entreprise à la recherche d'un développeur backend junior talentueux et motivé.",
];

export default function About() {
	return (
		<Layout>
			<div className="flex flex-col gap-6 rounded-lg shadow-lg  max-w-screen-2xl">
				<div className="flex flex-col gap-4 justify-center items-center p-4">
					<div className="avatar rounded-full mx-auto" />
					<h3 className="font-semibold">{TITLES[0]}</h3>
					<h3 className="text-primary">{TITLES[1]}</h3>
					<h3 className="text-slate-400 italic">{TITLES[2]}</h3>
				</div>
				<div className="p-4">
					<div className="font-bold flex justify-center items-center gap-4 my-4">
						<h3>Developpeur Fullstack / Etudiant a </h3>
						<div className="icon ft"></div>
					</div>
					<div className="font-bold flex justify-center items-center gap-4 my-4">
						<div className="flex gap-4">
							<div className="icon js"></div>
							<div className="icon nest"></div>
							<div className="icon react"></div>
							<div className="icon next"></div>
							<div className="icon postgres"></div>
							<div className="icon mysql"></div>
							<div className="icon docker"></div>
							<div className="icon shell"></div>
						</div>
					</div>
				</div>
				<div className="p-4">
					{CONTENTS.map((content, index) => (
						<p className="my-4" key={index}>
							{content}
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
				.icon {
					width: 56px;
					height: 56px;
					background-size: 100%;
					background-repeat: no-repeat;
					background-position: center center;
				}
				.ft {
					background-image: url("/42_icon.png");
				}
				.js {
					background-image: url("/js.png");
				}
				.nest {
					background-image: url("/nest.svg");
				}
				.next {
					background-image: url("/next.png");
				}
				.react {
					transform: scale(0.8);
					background-image: url("/react.svg");
				}
				.postgres {
					background-image: url("/postgresql.png");
				}
				.mysql {
					transform: scale(1.2);
					background-image: url("/mysql.webp");
				}
				.docker {
					background-image: url("/docker.png");
				}
				.shell {
					background-image: url("/shell.png");
				}
			`}</style>
		</Layout>
	);
}
