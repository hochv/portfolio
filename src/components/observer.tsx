"use client";

import React, { FC, useEffect } from "react";

interface IProps {}

/**
 * @author
 * @function @ObserverClient
 **/

export const ObserverClient: FC<IProps> = (props) => {
  useEffect(() => {
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver((entries, observer) => {
        // entries : Danh sách các đối tượng chúng ta theo dỏi
        entries.forEach((entry) => {
          // Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
          if (entry.isIntersecting) {
            console.log("entry :", entry);
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.add("hidden");
          }
        });
      }, {});
      document.querySelectorAll(".hidden").forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);
  return <></>;
};
