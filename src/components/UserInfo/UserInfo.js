import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./userInfo.module.css";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    setUserInfo(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((parsedData) => setUserInfo(parsedData))
      .catch((error) => console.log(error));
  }, [id]);
  //console.log(data);
  return (
    <div className={style.card}>
      {userInfo ? (
        <ul className={style.cardBody}>
          <li>username: {userInfo.username}</li>
          <li>email: {userInfo.email}</li>
          <li>phone: {userInfo.phone}</li>
          <li>name: {userInfo.name}</li>
          <li>website: {userInfo.website}</li>
          <li>company: {userInfo.company.name}</li>
          <li>
            address:
            <ul className={style.card2}>
              <li>{userInfo.address.street}</li>
              <li>{userInfo.address.suite}</li>
              <li>{userInfo.address.city}</li>
              <li>{userInfo.address.zipcode}</li>
            </ul>
          </li>
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserInfo;
