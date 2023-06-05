import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @Contact
 **/

export const Contact: FC<IProps> = (props) => {
  return (
    <section className="contact">
      <h1 className="heading">Contact</h1>
      <p className="desc">
        I am currently looking to join a technology company where I can
        contribute, grow, support and gain recognition.
      </p>
      <a className="email" href="mailto:hochv2001@gmail.com">
        hochv2001@gmail.com
      </a>
      <p className="desc thanks">Thanks for visiting {"<3"}</p>
      <div className="social">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </section>
  );
};
