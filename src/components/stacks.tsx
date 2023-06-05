import React, { FC } from "react";
import stack from "@img/stacks.png";
import Image from "next/image";

interface IProps {}

/**
 * @author
 * @function @Stack
 **/

export const Stack: FC<IProps> = (props) => {
  return (
    <section className="stacks">
      <div className="content__stacks">
        <h1 className="lookingfor-position">
          I am currently looking to join a{" "}
          <span className="theme-color">technology</span> company
        </h1>
        <p className="desc">
          where I can contribute, grow, support and gain recognition.
        </p>
      </div>
      <div className="stack__image">
        <Image src={stack} alt="my portfolio skill stack" className="img" />
      </div>
    </section>
  );
};
