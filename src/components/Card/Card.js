import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./card.module.css";

const Card = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    setData(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((parsedData) => setData(parsedData))
      .catch((error) => console.log(error));
  }, [id]);
  //console.log(data);
  return (
    <div className={style.card}>
      {data ? (
        <div className={style.cardBody}>
          <h4>- name: {data.name}</h4>
          <h4>- username: {data.username}</h4>
          <h4>- email: {data.email}</h4>
          <h4>- phone: {data.phone}</h4>
          <h4>- website: {data.website}</h4>
          <h4>- company: {data.company.name}</h4>
          <h4>
            - address:
            <li>{data.address.street}</li>
            <li>{data.address.suite}</li>
            <li>{data.address.city}</li>
            <li>{data.address.zipcode}</li>
          </h4>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Card;
