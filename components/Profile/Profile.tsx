import React from "react";
import Image from "next/image";
import st from "./Profile.module.scss";

const Profile = () => (
  <div className={st.container}>
    <div className={st.title}>Profile</div>
    <div className={st.subtitle}>I'm a web developer</div>
    <hr />
    <div className={st.body}>
      <div className={st.aboutMe}>
        <div className={st.title}>About me</div>
        <div>
          I' a fullstack web developer, focusing on front-end development.
          Passionate about finding the just right solution to. I love working in
          a team or solo.
        </div>
      </div>
      <div className={st.picture}>
        <Image
          src="/me.png"
          alt="Picture of the author"
          width={240}
          height={240}
        />
      </div>
      <div className={st.details}>
        <div className={st.title}>Details</div>
        <div>
          <div className={st.label}>Name</div>
          <div>Alexander Leibhammer</div>
        </div>
        <div>
          <div className={st.label}>Age</div>
          <div>36</div>
        </div>
        <div>
          <div className={st.label}>Location</div>
          <div>Cape Town, South Africa</div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
