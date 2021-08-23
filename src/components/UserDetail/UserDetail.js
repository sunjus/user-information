import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./userDetail.module.css";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    setUserDetail(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((parsedData) => setUserDetail(parsedData))
      .catch((error) => console.log(error));
  }, [id]);
  //console.log(userDetail);
  return (
    <div className={style.card}>
      {userDetail ? (
        <ul className={style.cardBody}>
          <li>username: {userDetail.username}</li>
          <li>email: {userDetail.email}</li>
          <li>phone: {userDetail.phone}</li>
          <li>name: {userDetail.name}</li>
          <li>website: {userDetail.website}</li>
          <li>company: {userDetail.company.name}</li>
          <li>
            address:
            <ul className={style.card2}>
              <li>{userDetail.address.street}</li>
              <li>{userDetail.address.suite}</li>
              <li>{userDetail.address.city}</li>
              <li>{userDetail.address.zipcode}</li>
            </ul>
          </li>
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserDetail;
