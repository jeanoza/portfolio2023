import Seo from "@/components/seo";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Seo title="home" />
			<Link href="fr/about">
				<main className="h-screen flex justify-center items-center">
					<div className="px-2 w-100 md:w-2/3 2xl:w-1/2 border-4 border-primary">
						<h1 className="text-3xl mt-6 text-center text-slate-200">
							Kyubong CHOI
						</h1>
						<div className="my-6 flex flex-col mx-auto text-center text-slate-400">
							<span className="text-xl">Développeur Fullstack Junior</span>
							<span className="text-lg">
								TypeScript | React | Next | Nest | Node | Express
							</span>
						</div>
					</div>
				</main>
			</Link>
			<style jsx>{`
				main {
					background-image: url(/images/main.jpeg);
					background-size: cover;
					background-position: center center;
				}
			`}</style>
		</>
	);
}
