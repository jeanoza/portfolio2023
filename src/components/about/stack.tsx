const ICONS_MAJOR = ["js", "ts", "node", "nest", "react", "next"];
const ICONS_SECOND = ["java", "python", "c", "cpp"];
const ICONS_ETC = ["postgresql", "mysql", "docker", "shell"];

export default function Stack() {
	return (
		<div className="p-4">
			<div className="font-bold flex justify-center items-center gap-4 my-4">
				<h3>Developpeur Fullstack | Etudiant a </h3>
				<div className="icon ft"></div>
			</div>
			<div className="w-3/4  mx-auto">
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_MAJOR.map((icon, index) => (
						<div key={index} className={`icon ${icon}`} />
					))}
				</div>
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_SECOND.map((icon, index) => (
						<div key={index} className={`icon ${icon}`} />
					))}
				</div>
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_ETC.map((icon, index) => (
						<div key={index} className={`icon ${icon}`} />
					))}
				</div>
			</div>
			<style jsx>{`
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
				.ts {
					background-image: url("/ts.png");
				}
				.node {
					background-image: url("/node.png");
				}
				.nest {
					background-image: url("/nest.svg");
				}
				.next {
					background-image: url("/next.png");
				}
				.python {
					background-image: url("/python.jpg");
					transform: scale(1.5);
				}
				.cpp {
					background-image: url("/cpp.svg");
					transform: scale(0.9);
				}
				.c {
					background-image: url("/c.png");
				}
				.java {
					background-image: url("/java.png");
					transform: scale(1.7);
				}
				.react {
					transform: scale(0.8);
					background-image: url("/react.svg");
				}
				.postgresql {
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
		</div>
	);
}
