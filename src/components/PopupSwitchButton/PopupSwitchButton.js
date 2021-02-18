
import './PopupSwitchButton.css';

function PopupSwitchButton ({ isRight, onSwitchPhoto }) {
  return (
    <button className={`popup__switch ${isRight ? 'popup__switch_right' : 'popup__switch_left'}`} onClick={onSwitchPhoto} >
      {isRight ? <>&#129046;</> : <>&#129044;</>}
    </button>
  )
}

export default PopupSwitchButton