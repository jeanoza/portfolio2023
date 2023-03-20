import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: any) {
	const { pathname } = useRouter();
	const title = pathname.slice(8);

	return (
		<div className="flex flex-col h-screen w-100">
			<Seo title={title} />
			<Navbar />
			<main className="px-2 md:px-0 m-auto lg:w-10/12 mx-auto max-w-screen-lg flex justify-center">
				{children}
			</main>
			<Footer />
		</div>
	);
}
