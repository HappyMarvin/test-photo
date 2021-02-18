import { useEffect, useState } from "react";
import api from "../api";
import AlbumsItem from "../AlbumsItem/AlbumsItem";
import "./User.css"
import {Link} from "react-router-dom";

function User(props) {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.getUser(props.match.params.id)
      .then(setUser)
      .catch(e => console.error(e.message));
    api.getAlbums(props.match.params.id)
      .then(setAlbums)
      .catch(e => console.error(e.message));
  }, [])

  return (
    <>
      <Link to="../" className="back-link" >&#8656; Вернуться к списку пользователей</Link>
      <h1 className="user__title">Альбомы пользователя {user.name}</h1>
      <ul className="user__list">
        {albums.map(album => <AlbumsItem album={album} key={album.id} />)}
      </ul>
    </>
  )
}
export default User