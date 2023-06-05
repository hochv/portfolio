import { AboutMe } from "@/components/about";
import { Experience } from "@/components/experience";
import { ObserverClient } from "@/components/observer";

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
      <ObserverClient />
    </section>
  );
}
