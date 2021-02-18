import './PopupWithPhoto.css';
import { useEffect, useState } from "react";
import PopupSwitchButton from "../PopupSwitchButton/PopupSwitchButton"

function PopupWithPhoto ({ photo, onClose, isOpen, onSwitchPhoto, photosSize, index }) {
  useEffect(() => {
    if (!photo) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [photo, onClose]);

  return (
    <section 
      className={`popup ${isOpen ? 'popup_show' : ''}`}
      onClick={e => e.target.classList.contains('popup') && onClose()}
    >
      <div className="popup__container">
        <img src={photo ? photo.url : '#'} alt="Фото" className="popup__image" />
        <h2 className="popup__image-title">{isOpen ? photo.title : ''}</h2>
        <button 
          className="popup__close popup__close_image" 
          type="button" 
          aria-label="Закрыть фото"
          onClick={onClose}
        />
        {index < (photosSize - 1) && <PopupSwitchButton isRight={true} onSwitchPhoto={onSwitchPhoto.bind(null, true)} />}
        {index > 0 && <PopupSwitchButton isRight={false} onSwitchPhoto={onSwitchPhoto.bind(null, false)} />}
      </div>
    </section>
  )
}

export default PopupWithPhoto