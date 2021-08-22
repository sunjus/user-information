import React from "react";
import Button from "../Button";
import style from "./userCard.module.css";

const UserCard = ({ character, name, username, website, id }) => {
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
        <Button href={`/${id}`}>More Detail</Button>
      </div>
    </div>
  );
};

export default UserCard;
