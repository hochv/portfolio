import Image from "next/image";
import React, { FC } from "react";
import avt from "@img/avt.png";

interface IProps {}

/**
 * @author
 * @function @AboutMe
 **/

export const AboutMe: FC<IProps> = (props) => {
  return (
    <section className="about_me">
      <article className="greeting">
        <div className="bg-gradient hidden-tablet">
          <div className="inside-gradient">
            <Image
              width={130}
              height={170}
              src={avt}
              alt="my portfolio avatar"
            />
          </div>
        </div>
        <div className="greeting__content">
          <p className="first__intruduce">
            Hello! I Am <span className="theme-color name">Hawk Hoang</span>
          </p>
          <p className="position">A Web Developer who</p>
          <p className="slogan">
            Making dream come <span className="theme-color">true</span>
          </p>
          <p className="slogan">
            Think <span className="theme-color">different</span> And
          </p>
          <p className="slogan">
            Dare to <span className="theme-color">change</span>...
          </p>
          <p className="sub__slogan">
            That is Gr-r-reat! But meaning less for me.
          </p>
        </div>
      </article>
      <article className="description">
        <p className="slogan">I am a Web developer.</p>
        <div className="status">
          Currently, I am <span className="theme-color">available</span> for
          work
        </div>
        <p className="long__introduce hidden">
          A self-taught Frontend web developer, functioning in the industry for
          2+ years now. I make meaningful and delightful digital products. I
          have worked in two companies all of them are outsource company, get
          access to trending and supposedly future technologies such as ReactJS
          or Web3. I am rated to have a good mind for coding and code extremely
          clean from other senior dev. With my experience I want to be able to
          contribute to the technology industry and develop myself day by day
        </p>
      </article>
    </section>
  );
};
