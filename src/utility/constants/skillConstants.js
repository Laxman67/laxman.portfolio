import { Code2, Database, Server, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Responsive Design", "PWA"],
  },
];

export default skills;
