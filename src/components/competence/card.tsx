/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface IProps {
	title: string;
	content: string;
	tools: string[];
	imageUrl: string;
}
export default function Card({ title, content, tools, imageUrl }: IProps) {
	return (
		<div className="card card-compact w-11/12 sm:w-96 shadow-xl">
			<div className="cover h-40" />
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<h3 className="text-lg">{content}</h3>
				<ul className="flex gap-4 text-slate-500 flex-wrap justify-center">
					{tools.map((tool, index) => (
						<li key={index}>{tool}</li>
					))}
				</ul>
			</div>
			<style jsx>{`
				.cover {
					background-image: url(${imageUrl});
					background-size: cover;
					background-position: center;
					border-radius:1rem 1rem 0 0;
				}
				.card:hover > .cover {
					background-size: 110%;
				}
			`}</style>
		</div>
	);
}
