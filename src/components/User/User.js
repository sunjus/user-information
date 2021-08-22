import React from "react";
import Button from "../Button";

const User = ({ character, name, username, website, id }) => {
  return (
    <div>
      <div>
        <div>{character}</div>
        <div>
          <h5>{name}</h5>
          <p>{username}</p>
          <p>
            <a href={`${website}`}>{website}</a>
          </p>
        </div>
        <Button id={id} />
      </div>
    </div>
  );
};

export default User;
