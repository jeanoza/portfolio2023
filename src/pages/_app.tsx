import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [lang, setLang] = useState("en");
	return <Component {...pageProps} lang={lang} setLang={setLang} />;
}
