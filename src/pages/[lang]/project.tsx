import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function Project() {
	const {
		query: { lang },
	} = useRouter();
	return (
		<Layout>
			<div className="">
				<h3>Project</h3>
			</div>
		</Layout>
	);
}
