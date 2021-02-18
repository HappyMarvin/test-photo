import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import PhotosItem from "../PhotosItem/PhotosItem";
import PopupWithPhoto from "../PopupWithPhoto/PopupWithPhoto";
import "./Album.css";

function Album (props) {
  const [album, setAlbum] = useState({
    title: ''
  });
  const [photos, setPhotos] = useState([])
  const [photoForPopup, setPhotoForPopup] = useState({});
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [indexForPopup, setIndexForPopup] = useState(0);

  useEffect(() => {
    api.getAlbum(props.match.params.id)
      .then(setAlbum)
      .catch(e => console.error(e.message));
    api.getPhotos(props.match.params.id)
      .then(setPhotos)
      .catch(e => console.error(e.message));
  }, [])

  const handlePhotoClick = (photo, index) => {
    setPhotoForPopup(photo);
    setPopupIsOpen(true);
    setIndexForPopup(index);
  }

  const closePopup = () => {
    setPopupIsOpen(false);
    setTimeout(()=>{
      setPhotoForPopup({})
    }, 300)
  }

  const handleSwitchPhoto = (isRight) => {
    console.log(isRight);
    const direction = isRight ? 1 : -1
    setPhotoForPopup(photos[isRight ? indexForPopup + 1 : indexForPopup - 1])
    setIndexForPopup(isRight ? indexForPopup  + 1 : indexForPopup - 1)
    console.log('test');
  }

  return (
    <>
      <Link to={`../user/${album.userId}`} className="back-link" >&#8656; Вернуться к списку альбомов</Link>
      <h1 className="album__title">{album.title}</h1>
      <ul className="album__list">
      {photos.map((photo, index) =>
      <PhotosItem 
        photo={photo}
        key={photo.id}
        onPhotoClick={handlePhotoClick}
        index={index}
      />
      )}
      </ul>
      <PopupWithPhoto
        photo={photoForPopup}
        onClose={closePopup}
        isOpen={popupIsOpen}
        photosSize={photos.length}
        index={indexForPopup}
        onSwitchPhoto={handleSwitchPhoto}
      />
    </>
  )
};

export default Album