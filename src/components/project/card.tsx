import { PROJECT_NAME } from "@/pages/[lang]/project";
import Link from "next/link";
import ImageViewer from "../imageViewer";
import { badges } from "../about/stack";
interface IProps{
	name: PROJECT_NAME
	title: string;
	content: string;
	tools: string[];
	gitUrl: string;
	prodUrl?: string;
	photos?: string[];
}
export default function Card({
	name,
	title,
	content,
	tools,
	gitUrl,
	prodUrl,
	photos,
}: IProps) {
	return (
		<div className="card card-compact shadow-xl w-100 md:w-2/3 mb-4">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{content}</p>
				<ul className="flex gap-x-4 gap-y-2 flex-wrap justify-center my-4">
					{tools.map((tool, index) => (
						<li className={`badge badge-outline ${badges[index % badges.length]} hover:scale-105`} key={index}>{tool}</li>
					))}
				</ul>
				{ photos && photos.length > 0 && (
						<ImageViewer photos={photos} name={name} />
				)}
				<div className="flex justify-end items-center gap-2">
					{prodUrl && (
						<Link href={prodUrl} target="_blank">
							<div className="cursor-pointer px-4 py-1 bg-primary text-white border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary rounded-lg">
								Demo
							</div>
						</Link>
					)}
					{gitUrl && (
						<Link href={gitUrl} target="_blank">
							<div className="cursor-pointer px-4 py-1 bg-primary text-white border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary rounded-lg">
								Code
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
