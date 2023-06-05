import { AboutMe } from "@/components/about";
import { Experience } from "@/components/experience";
import { ObserverClient } from "@/components/observer";
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
      <ObserverClient />
    </section>
  );
}
