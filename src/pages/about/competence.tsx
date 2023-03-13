import Card from "@/components/competence/card";
import Layout from "@/components/layout";
import Seo from "@/components/seo";

export default function Competence() {
	return <Layout>
		<Seo title="Competence" />
		<main className="px-2 md:px-6">
			<div className="w-100 md:w-2/3 m-auto gap-4">
				<h3>Competence</h3>
				<Card></Card>
			</div>
		</main>
	</Layout>
}