import Layout from "@/components/layout";
import Card from "@/components/project/card";
import { useRouter } from "next/router";

export enum PROJECT_NAME {
  RED_TETRIS = "red-tetris",
  TRANSCENDENCE = "transcendence",
  JWITTER = "jwitter",
  MOVISTAGRAM = "movistagram",
}
export interface IProject {
  name: PROJECT_NAME;
  title: string;
  content: Lang;
  tools: string[];
  gitUrl: string;
  prodUrl?: string;
  photos?: string[];
}

const PROJECTS: IProject[] = [
  {
    name: PROJECT_NAME.RED_TETRIS,
    title: "Red-Tetris / 2023",
    content: {
      en: "Project at 42 Paris, an out-circle project where state management with Redux is emphasized, and the server sends real-time packets using Socket.IO (WebSocket) for a multiplayer gaming experience.",
      fr: "Project à 42 Paris, projet après le tronc commun mettant l'accent sur la gestion d'état avec Redux, où le serveur envoie des paquets en temps réel grâce à Socket.IO (WebSocket) pour une expérience de jeu multijoueur.",
    },
    tools: [
      "TypeScript",
      "React / Redux / Redux-Toolkit",
      "Node / Express / Nest",
      "SocketIO / WebSocket",
    ],
    gitUrl: "https://github.com/hyungyoo/red-tetris",
    prodUrl: undefined,
    photos: [
      "in_game_dark.png",
      "in_game_white.png",
      "in_lobby_dark.png",
      "in_lobby_white.png",
    ],
  },
  {
    name: PROJECT_NAME.TRANSCENDENCE,
    title: "Transcendence / 2023",
    content: {
      en: "Project at 42 Paris, this is a web application that implements real-time chat and a Pong game, along with a random matching system. It uses SocketIO/WebSocket and is configured by Docker.",
      fr: "Projet à 42 Paris, il s'agit d'une application web qui implémente un chat en temps réel ainsi qu'un jeu de Pong, avec un système de mise en correspondance aléatoire. Elle utilise SocketIO/WebSocket et est configurée par Docker.",
    },
    tools: [
      "TypeScript",
      "React / Next",
      "Node / Express / Nest",
      "Json Web Tokens / Two Factor Auth",
      "Typeorm / PostgreSQL",
      "SocketIO / WebSocket",
      "Docker-compose",
    ],
    gitUrl: "https://github.com/jeanoza/ft_transcendence",
    prodUrl: undefined,
    photos: [
      "match.png",
      "match_result.png",
      "profile.png",
      "auth.png",
      "auth2.png",
      "chat_channel.png",
      "chat_dm.png",
      "leader_board.png",
      "user_profile_2fa.png",
      "user_profile.png",
    ],
  },
  {
    name: PROJECT_NAME.JWITTER,
    title: "Jwitter / 2021",
    content: {
      en: "Personal side project, a Twitter clone project, bringing Firebase, React, TypeScript, and styled-components together to explore the power of real-time database functionality for a hands-on learning experience",
      fr: "Projet personnel, Projet de clonage de Twitter pour tester/pratiquer la base de données en temps réel de Firebase. Ce projet est essentiellement réalisé avec Firebase, React (avec CRA, Hooks, styled-components) et TypeScript.",
    },
    tools: ["TypeScript", "React", "Firebase / Firestore / FirebaseAuth"],
    gitUrl: "https://github.com/jeanoza/jwitter_ts",
    prodUrl: "https://jeanoza.github.io/jwitter_ts/#/",
    photos: [
      "login.png",
      "main.png",
      "profile.png",
      "auth-google.png",
      "auth-github.png",
      "put-picture.png",
    ],
  },
  {
    name: PROJECT_NAME.MOVISTAGRAM,
    title: "Movistagram / 2021",
    content: {
      en: "Personal side project, Single Page Application that uses React to display information about movies and TV shows. Users can search for content and view details about it. It gets its data from the OMDB API.",
      fr: "Projet personnel, SPA qui utilise React pour afficher des informations sur les films et les émissions de télévision. Les utilisateurs peuvent rechercher du contenu et afficher des détails à son sujet. Les données sont récupérées à partir de l'API OMDB.",
    },
    tools: ["JavaScript", "React", "React Hooks", "Axios", "Movie API"],
    gitUrl: "https://github.com/jeanoza/movistagram",
    prodUrl: "https://jeanoza.github.io/movistagram/#/",
    photos: ["main.png", "detail.png"],
  },
];

export default function Project() {
  const {
    query: { lang },
  } = useRouter();
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4">
        {PROJECTS.map((project, index) => (
          <Card
            name={project.name}
            key={index}
            title={project.title}
            content={project.content[lang as keyof Lang]}
            tools={project.tools}
            gitUrl={project.gitUrl}
            prodUrl={project.prodUrl}
            photos={project.photos}
          />
        ))}
      </div>
    </Layout>
  );
}
