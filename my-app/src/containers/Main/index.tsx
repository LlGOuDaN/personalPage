import React from "react";

import NavigationBar from "@Components/NavigationBar";

type IMainProps = {};

export default (props: IMainProps) => {
  return (
    <div className="main-container">
      <NavigationBar />
      <section className="main-container__top-section"></section>
    </div>
  );
};
