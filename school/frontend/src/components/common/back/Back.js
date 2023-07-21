import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();
  const parentPath = location.pathname.split("/")[1];

  return (
    <>
      <section className="back">
        <h2>Home / {parentPath}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
