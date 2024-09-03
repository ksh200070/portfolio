import { useLocation, useNavigate } from "react-router-dom";
import ProfileCard from "../../../component/ProfileCard/ProfileCard";
import styles from "./firstProfile.module.scss";
import React, { useState, useEffect } from "react";

export default function BasicProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profile } = state;

  const onClickSwitchProfile = () => {
    return navigate("/profile");
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.profile}>
            <ProfileCard
              size="sm"
              profile={profile}
              onClick={onClickSwitchProfile}
            ></ProfileCard>
            {/* <button>프로필 변경</button> */}
          </div>
        </section>
      </div>
    </>
  );
}
