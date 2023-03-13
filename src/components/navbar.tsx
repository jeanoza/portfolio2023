import Link from "next/link";
import { useRouter } from "next/router";

const ITEMS = ['', 'competence', 'project']

export default function Navbar() {
	const router = useRouter();
	return <div className="navbar bg-base-100">
		<div className="navbar-start">
			<div className="dropdown">
				<label tabIndex={0} className="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
				</label>
				<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					{ITEMS.map((item, index) => {
						const href = !item.length ? "/about" : "/about/" + item;
						const content = !item.length ? 'Kyubong?' : item[0].toUpperCase() + item.slice(1);
						return <li key={index} className={router.pathname === href ? "text-white" : ""}><Link href={href}>{content}</Link></li>
					})}
				</ul>
			</div>
			<Link href="/" className="btn btn-ghost normal-case text-xl">Kyubong CHOI</Link>
		</div>
		<div className="navbar-center hidden lg:flex">
			<ul className="menu menu-horizontal px-1">
				{ITEMS.map((item, index) => {
					const href = !item.length ? "/about" : "/about/" + item;
					const content = !item.length ? 'Kyubong?' : item[0].toUpperCase() + item.slice(1);
					return <li key={index} className={router.pathname === href ? "text-white" : ""}><Link href={href}>{content}</Link></li>
				})}
				{/* <li><Link href="/about">Kyubong?</Link></li>
				<li><Link href="/about/competence">Competence</Link></li>
				<li><Link href="/about/project">Project</Link></li> */}
			</ul>
		</div>
		<div className="navbar-end" />
	</div>
}