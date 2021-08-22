import { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((parsedData) => setData(parsedData))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div>
      {data ? (
        data.map((user) => (
          <div key={user.id}>
            {user.name[0]}
            {user.name}
            {user.username}
            {user.website}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Users;
