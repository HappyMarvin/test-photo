import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import defaultThumbnail from "../../images/default-thumbnail.png"
import "./AlbumsItem.css"

function AlbumsItem ({ album }) {

  const [photos, setPhotos] = useState([{
    thumbnailUrl: defaultThumbnail
  }]);

  useEffect(() => {
    api.getPhotos(album.id)
      .then(setPhotos)
      .catch(e => console.error(e.message));
  }, [])
  return (
    <li className="albums-item">
      <Link className="albums-item__link" to={`../album/${album.id}`}>
        <h2 className="albums-item__title">{album.title.length > 43 ? album.title.slice(0, 40) + '...' : album.title}</h2>
          <img className="albums-item__image" src={photos[0].thumbnailUrl} />
        <p className="albums-item__num">Фото в альбоме: {photos.length}</p>
      </Link>
    </li>
  )
}

export default AlbumsItem