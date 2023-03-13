/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface IProps {
	title: string;
	content: string;
	tools: string[];
	imageUrl: string;
}
export default function Card({ title, content, tools, imageUrl }: IProps) {
	return <div className="card card-compact w-80 bg-neutral shadow-xl">
		<figure><img height="300" src={imageUrl} /></figure>
		<div className="card-body">
			<h2 className="card-title">{title}</h2>
			<h3 className="text-lg">{content}</h3>
			<ul className="flex gap-4 text-white flex-wrap justify-center">
				{tools.map((tool, index) => <li key={index}>{tool}</li>)}
			</ul>
		</div>
	</div>
}