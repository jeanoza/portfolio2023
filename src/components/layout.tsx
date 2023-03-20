import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: any) {
	const { pathname } = useRouter();
	const title = pathname.slice(8);

	return (
		<div className="flex flex-col h-screen">
			<Seo title={title} />
			<Navbar />
			<main className="px-2 md:px-6 m-auto">
				<div className="w-100 lg:w-10/12 mx-auto max-w-screen-xl flex justify-center">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
}
