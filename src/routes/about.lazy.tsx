import { createLazyFileRoute } from "@tanstack/react-router";

const About = () => {
  return 1;
};

export const Route = createLazyFileRoute("/about")({
  component: About,
});
