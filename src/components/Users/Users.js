import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from "../api";
import "./Users.css"

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers()
      .then(setUsers)
      .catch(e => console.error(e.message));
  }, [])

  return (
    <>
      <h1 className="users__title">Список пользователей</h1>
      <ul className="users__list">
        {users.map(user => (
          <li className="users__item">
            <Link className="users__link" to={`user/${user.id}`} key={user.id}>
              {user.name}
            </ Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users