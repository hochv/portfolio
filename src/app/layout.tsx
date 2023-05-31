import "@styles/global.scss";

import { Preahvihear } from "next/font/google";
import { Header } from "@/components/header";
import { BackgroundCanvas } from "@/components/background";
const font = Preahvihear({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Hawk Porfolio",
  description: "porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <section className="content">
          <Header />
          {children}
        </section>
        <BackgroundCanvas />
      </body>
    </html>
  );
}
