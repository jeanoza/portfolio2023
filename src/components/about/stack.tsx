const ICONS_MAJOR = ["TypeScript", "Node", "Express", "Nest", "React/Next",];
const ICONS_SECOND = ["PostgreSQL", "MySQL", "Docker", "Shell", "Unix"];
const ICONS_ETC = ["Java", "Python", "C/C++"];

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
			<div className="w-3/4  mx-auto">
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_MAJOR.map((icon, index) => (
						<div key={index} className={`badge ${badges[index % badges.length]}`} >{icon}</div>
					))}
				</div>
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_SECOND.map((icon, index) => (
						<div key={index} className={`badge ${badges[index % badges.length]} `} >{icon}</div>
					))}
				</div>
				<div className="flex justify-center items-center gap-4 my-4">
					{ICONS_ETC.map((icon, index) => (
						<div key={index} className={`badge ${badges[index % badges.length]} `} >{icon}</div>
					))}
				</div>
			</div>
			<style jsx>{`
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
