import Image from "next/image";
import React, { FC } from "react";
import telekom from "@img/telekom.jpg";
import { Poppins } from "next/font/google";

interface IProps {}

/**
* @author
* @function @Projects

**/

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const Projects: FC<IProps> = (props) => {
  return (
    <section className={font.className}>
      <section className="projects">
        <ProjectBox left />
        <ProjectBox />
        <ProjectBox left />
        <ProjectBox />
      </section>
    </section>
  );
};

const ProjectBox = ({ left }: { left?: boolean }) =>
  left ? (
    <div className=" project__box projects__box--left">
      <div className="left">
        <div className="theme-color label__project">Featured Project</div>
        <div className="project__name">Example Project</div>
        <div className="project__desc">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </div>
      </div>
      <div className="right">
        <Image
          src={telekom}
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
        <div className="project__name">Example Project</div>
        <div className="project__desc">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </div>
      </div>
      <div className="left">
        <Image
          src={telekom}
          alt="my portfolio project image"
          width={500}
          className="image"
        ></Image>
      </div>
    </div>
  );
