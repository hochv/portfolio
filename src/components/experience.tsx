import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import shape1 from "@img/shape1.png";
import shape2 from "@img/shape2.png";
import shape3 from "@img/shape3.png";
import shape4 from "@img/shape4.png";

interface IProps {}

/**
 * @author
 * @function @Experience
 **/

export const Experience: FC<IProps> = (props) => {
  const experienceBoxes = [
    {
      title: "Frontend web development",
      desc: "E-commerce Themes, Bloggers, SEO, Regular Websites, Blockchain-Wallet, Building code base ...",
      img: shape1,
    },
    {
      title: "Backend development",
      desc: "Nodejs, Express, MongoDB, Authentication, Realtimes, WebRTC, ...",
      img: shape2,
    },
    {
      title: "Mobile App",
      desc: "React Native, Build code base, Attendance and mangage employee App, Best practice, ...",
      img: shape3,
    },
    {
      title: "Other Application",
      desc: "Jira, Figma, Photoshop, Wireframes, ...",
      img: shape4,
    },
  ];
  return (
    <section className="experience">
      <div className="experience__content">
        <h2 className="heading">Work Experience</h2>
        <div className="experience__grid">
          {experienceBoxes.map((el, idx) => (
            <ExperienceBox
              title={el.title}
              desc={el.desc}
              img={el.img}
              key={idx + "_experience--box"}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-large bg"></div>
    </section>
  );
};

const ExperienceBox = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: StaticImageData;
}) => (
  <div className="experience__box">
    <div className="image">
      <Image sizes="50%" alt="Portfolio experience images" src={img}></Image>
      <div className="bottom"></div>
    </div>
    <div className="data">
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>
      <div className="btn">LEARN MORE</div>
    </div>
  </div>
);
