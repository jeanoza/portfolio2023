import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: React.PropsWithChildren) {
	const { pathname } = useRouter();
	const title = pathname.slice(1);

	return <div>
		<Seo title={title} />
		<Navbar />
		<main className="px-2 md:px-6">
			<div className="w-100 md:w-2/3 xl:w-1/2 m-auto">
				{children}
			</div>
		</main>
		<Footer />
	</div>
}