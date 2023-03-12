import Navbar from "./navbar";

export default function Layout({ children }: React.PropsWithChildren) {
	return <div className="container">
		<Navbar />
		{children}
	</div>
}