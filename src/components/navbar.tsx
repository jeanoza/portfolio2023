import Link from "next/link";
import { useRouter } from "next/router";

interface Lang {
	en: string;
	fr: string;
}
const NAV_ITEMS = {
	about: {
		en: "About",
		fr: "Par rapport a",
	},
	competence: {
		en: "Competence",
		fr: "Compétence",
	},
	project: {
		en: "Project",
		fr: "Projet",
	},
};

export default function Navbar({
	lang,
	setLang,
}: {
	lang: string;
	setLang: any;
}) {
	const { pathname } = useRouter();
	return (
		<div className="navbar bg-base-100 mb-4">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
					>
						{Object.entries(NAV_ITEMS).map(([key, value]) => {
							const href = key;
							const content = value[lang as keyof Lang];
							return (
								<li
									key={key}
									className={pathname.slice(1) === href ? "text-primary" : ""}
								>
									<Link href={href}>{content}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost normal-case text-xl">
					Kyubong CHOI
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{Object.entries(NAV_ITEMS).map(([key, value]) => {
						const href = key;
						const content = value[lang as keyof Lang];
						return (
							<li
								key={key}
								className={pathname.slice(1) === href ? "text-primary" : ""}
							>
								<Link href={href}>{content}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="navbar-end ">
				<div className="langIcon mx-2">FR</div>
				<div className="langIcon mx-2">EN</div>
			</div>
		</div>
	);
}
