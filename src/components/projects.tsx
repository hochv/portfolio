import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import telekom from "@img/telekom.jpg";
import edufit from "@img/edufit.png";
import HLP from "@img/HLP.jpg";
import { Poppins } from "next/font/google";

interface IProps {}

/**
* @author
* @function @Projects

**/

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const Projects: FC<IProps> = (props) => {
  const PROJECTS_DATA = [
    {
      name: "Services Portal (sp.de)",
      desc: "An E-commerce web app for publishing and selling services, projects, news,... using NextJs. Feels nice to work with foreign developer (Germans) at T-mobile, I also work with them workflow, testing and many around.",
      img: telekom,
    },
    {
      name: "Services Portal management",
      desc: "A management web app for manage services, files, roles, news, projects, CMS layout, etc... for Services Portal pages using Angular. Feels nice to work with foreign developer (Germans) at T-mobile, I also work with them workflow, testing and many around.",
      img: telekom,
    },
    {
      name: "HLP NFTs - market, freelancer",
      desc: "An E-commerce web app for managing, generating, publishing and advertising NFTs of DAO Peace, using new Nextjs intergrate with Web3 and Blockchain. This is making for Japanese customer then I can understand and feel more easy when facing with their workflow.",
      img: HLP,
    },
    {
      name: "Edufit - Education management",
      desc: "A web app for manage and support for students, teacher, parents and all around education, using new Reactjs, Most featured fuction that have are attendance, timeline, schedule, form, and news, etc...",
      img: edufit,
    },
  ];
  return (
    <section className={font.className}>
      <section className="projects">
        {PROJECTS_DATA.map((e, idx) => {
          return (
            <ProjectBox key={"project__idx" + idx} left={!(idx % 2)} {...e} />
          );
        })}
      </section>
    </section>
  );
};

const ProjectBox = ({
  left,
  name,
  desc,
  img,
}: {
  left?: boolean;
  name: string;
  desc: string;
  img: StaticImageData;
}) =>
  left ? (
    <div className=" project__box projects__box--left">
      <div className="left">
        <div className="theme-color label__project">Featured Project</div>
        <div className="project__name">{name}</div>
        <div className="project__desc">{desc}</div>
      </div>
      <div className="right">
        <Image
          src={img}
          alt="my portfolio project image"
          width={500}
          className="image"
        ></Image>
      </div>
    </div>
  ) : (
    <div className="  project__box projects__box--right">
      <div className="right">
        <div className="theme-color label__project">Featured Project</div>
        <div className="project__name">{name}</div>
        <div className="project__desc">{desc}</div>
      </div>
      <div className="left">
        <Image
          src={img}
          alt="my portfolio project image"
          width={500}
          className="image"
        ></Image>
      </div>
    </div>
  );
