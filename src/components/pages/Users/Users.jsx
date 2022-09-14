import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  let url = "http://localhost:8888/.netlify/functions/fn-getUsers";

  let [users, setUsers] = useState([]);

  useEffect(() => {
    (async (getUsers) => {
      try {
        let response = await axios.get(getUsers);
        setUsers(response.data);
      } catch (err) {
        console.log("error", err);
      }
    })(url);
  }, []);


  
  return (
    <>
      <h3>Usuarios en la base de datos</h3>
      <ul>
        {users.map((el, k) => {
          return (
            <li key={k}>
              {k+1} - {el.name} - {el.email} - {el.gender} - {el.nickname}
            </li>
          );
        })}
      </ul>
      <label>Cantidad de usuarios en la base de datos: {users.length}</label>
    </>
  );
};

export default Users;
