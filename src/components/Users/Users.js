import { useState, useEffect } from "react";
import User from "../User";
import style from "./users.module.css";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((parsedData) => setData(parsedData))
      .catch((error) => console.log(error));
  }, []);
  //console.log(data);
  return (
    <div className={style.usersContainer}>
      <div className={style.users}>
        {data ? (
          data.map((user) => (
            <User
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
