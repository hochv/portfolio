import { AboutMe } from "@/components/about";
import { ObserverClient } from "@/components/observer";

export default function Home() {
  return (
    <section className="content__wrapper">
      <AboutMe />
      <ObserverClient />
    </section>
  );
}
