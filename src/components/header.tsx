import React, { FC } from "react";
import "@styles/header.scss";
import Image from "next/image";
import logo from "@img/logo.png";
import { FaBars } from "react-icons/fa";
interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <Image
          width={60}
          height={40}
          alt="porfolio-logo"
          className="logo"
          src={logo}
        />
        <div className="header__content__navbar">
          <div className="nav__item">Home</div>
          <div className="nav__item">About</div>
          <div className="nav__item">Lab</div>
        </div>
        <div className="header__content__navbar--mobile">
          <FaBars size={20} />
        </div>
      </div>
    </div>
  );
};
