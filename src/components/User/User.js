import React from "react";
import Button from "../Button";
import style from "./user.module.css";

const User = ({ character, name, username, website, id }) => {
  return (
    <div className={style.userContainer}>
      <div className={style.user}>
        <div className={style.userImg}>{character}</div>
        <div className={style.userBody}>
          <h5>{name}</h5>
          <p>@{username}</p>
          <p>
            <a href={`${website}`}>http://{website}</a>
          </p>
        </div>
        <Button id={id} />
      </div>
    </div>
  );
};

export default User;
