import Link from "next/link";

interface IProps {
	title: string;
	content: string;
	tools: string[];
	gitUrl?: string;
	prodUrl?: string;
}
export default function Card({ title, content, tools, gitUrl, prodUrl }: IProps) {
	return (
		<div className="card card-compact shadow-xl w-100 md:w-2/3 mb-4">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{content}</p>
				<ul className="flex gap-x-4 text-slate-500 flex-wrap justify-center">
					{tools.map((tool, index) => (
						<li key={index}>{tool}</li>
					))}
				</ul>
				<div className="flex justify-end items-center gap-2">
					{prodUrl && <Link href={prodUrl} target="_blank">
						<div className="cursor-pointer px-4 py-1 bg-primary text-white border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary rounded-lg">Demo</div>
					</Link>
					}
					{gitUrl && <Link href={gitUrl} target="_blank">
						<div className="cursor-pointer px-4 py-1 bg-primary text-white border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary rounded-lg">Code</div>
					</Link>
					}
				</div>
			</div>
		</div>
	);
}
