import "./PhotosItem.css"

function PhotosItem({ photo, onPhotoClick, index }) {
  return (
    <li className="photos-item">
      <h2 className="photos-item__title">{photo.title.length > 43 ? photo.title.slice(0, 40) + '...' : photo.title}</h2>
      <img src={photo.thumbnailUrl} onClick={onPhotoClick.bind(null, photo, index)} />
    </li>
  )
}

export default PhotosItem