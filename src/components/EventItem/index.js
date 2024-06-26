import {useState} from 'react'
import './index.css'

const EventItem = props => {
  const {event, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = event

  const [style, setStyle] = useState('event-image')

  const eventClicked = () => {
    setStyle('event-image-border')
    onClickEvent(registrationStatus)
  }

  const onEventBlur = () => setStyle('event-image')

  return (
    <li className="event-container">
      <button
        type="button"
        className="event-button-style"
        onClick={eventClicked}
        onBlur={onEventBlur}
      >
        <img src={imageUrl} alt="event" className={style} />
        <p className="event-name">{name}</p>
        <p className="event-place">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
