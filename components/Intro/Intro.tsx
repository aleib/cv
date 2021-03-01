import React from "react";
import st from "./Intro.module.scss";

const Intro = () => (
  <div className={st.container}>
    <div className={st.hi}>Hey, I'm</div>
    <div className={st.nameWrap}>
      <div className={st.line} />
      <div className={st.name}>Alex Leibhammer</div>
      <div className={st.line} />
    </div>
  </div>
);

export default Intro;
