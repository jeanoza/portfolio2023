import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = {
	about: {
		en: "Kyubong ?",
		fr: "Kyubong ?",
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

export default function Navbar() {
	const {
		pathname,
		query: { lang },
	} = useRouter();
	const router = useRouter();

	function handleChangeLang(lang: string) {
		const { pathname, query } = router;
		const newQuery = { ...query, lang };
		router.replace({ pathname, query: newQuery });
	}
	if (!lang) return null;
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
							const _pathname = `/[lang]/${key}`;
							const content = value[lang as keyof Lang];
							return (
								<li
									key={key}
									className={pathname.includes(key) ? "text-primary" : ""}
								>
									<Link
										href={{
											pathname: _pathname,
											query: { lang },
										}}
									>
										{content}
									</Link>
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
						const _pathname = `/[lang]/${key}`;
						const content = value[lang as keyof Lang];
						return (
							<li
								key={key}
								className={pathname.includes(key) ? "text-primary" : ""}
							>
								<Link
									href={{
										pathname: _pathname,
										query: { lang },
									}}
								>
									{content}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="navbar-end">
				<div
					className="langIcon fr rounded-full w-8 h-8 cursor-pointer mx-1"
					onClick={() => handleChangeLang("fr")}
				/>
				<div
					className="langIcon en rounded-full w-8 h-8 cursor-pointer mx-1"
					onClick={() => handleChangeLang("en")}
				/>
			</div>
			<style jsx>{`
				.langIcon {
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
				}
				.langIcon:hover {
					transform: scale(1.1);
					transition: transform 0.1s linear;
				}
				.langIcon.fr {
					background-image: url("/images/navbar/fr.png");
				}
				.langIcon.en {
					background-image: url("/images/navbar/en.png");
				}
			`}</style>
		</div>
	);
}
