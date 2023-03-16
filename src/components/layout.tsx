import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: React.PropsWithChildren) {
	const { pathname } = useRouter();
	const title = pathname.slice(1);

	return (
		<div className="flex flex-col h-screen">
			<Seo title={title} />
			<Navbar />
			<main className="px-2 md:px-6 m-auto">
				<div className="w-100 lg:w-2/3 2xl:w-1/2 mx-auto">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
