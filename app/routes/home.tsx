import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aditya | Developer Portfolio" },
    { name: "description", content: "A blend of technology and lifelong language learning." },
  ];
}

export default function Home() {
  return <Welcome />;
}
