import { AboutMe } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { ObserverClient } from "@/components/observer";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stacks";

export const metadata = {
  icons: {
    icon: "./favicon.png",
  },
};

export default function Home() {
  return (
    <section className="content__wrapper">
      <AboutMe />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
      <ObserverClient />
    </section>
  );
}
