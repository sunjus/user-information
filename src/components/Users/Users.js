import { useState, useEffect } from "react";
import UserCard from "../UserCard";
import style from "./users.module.css";

const Users = () => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    setUserList(null);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((parsedData) => setUserList(parsedData))
      .catch((error) => console.log(error));
  }, []);
  //console.log(data);
  return (
    <div className={style.usersContainer}>
      <div className={style.users}>
        {userList ? (
          userList.map((user) => (
            <UserCard
              key={user.id}
              character={user.name[0]}
              name={user.name}
              username={user.username}
              website={user.website}
              id={user.id}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Users;
