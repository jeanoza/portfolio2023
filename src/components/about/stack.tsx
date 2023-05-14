const BADGES = ["TypeScript", "Node/Express/Nest", "React/Next", "SocketIO", "WebSocket", "PostgreSQL/MySQL", "Docker", "Shell", "Unix", "Git"]
const BADGES_METHOD = ["Agile", "TDD", "Clean Code", "SOLID", "KISS", "DRY"]

const STATUT = {
	en: "Fullstack Developer | Student at ",
	fr: "Développeur Fullstack | Etudiant à ",
};

const badges = ["badge-neutral", "badge-primary", "badge-secondary", "badge-accent"]

export default function Stack({ lang }: { lang: string }) {
	return (
		<div className="">
			<div className="font-bold flex justify-center items-center gap-4 my-4">
				<h3>{STATUT[lang as keyof Lang]}</h3>
				<div className="icon ft" />
			</div>
			<div className="mx-auto">
				<div className="flex flex-wrap justify-center items-center gap-4 my-8">
					{BADGES.map((icon, index) => (
						<div key={index} className={`badge badge-outline ${badges[index % badges.length]} hover:scale-105`} >{icon}</div>
					))}
				</div>
				<div className="flex flex-wrap justify-center items-center gap-4 my-8">
					{BADGES_METHOD.map((icon, index) => (
						<div key={index} className={`badge badge-outline ${badges[index % badges.length]} hover:scale-105`} >{icon}</div>
					))}
				</div>
			</div>
			<style jsx>{`
			.badge{
					white-space: nowrap;
			}
			 .icon {
				width: 40px;
				height: 40px;
				background-size: 100%;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.ft {
				background-image: url("/images/about/42_icon.png");
			}
			`}</style>
		</div>
	);
}
