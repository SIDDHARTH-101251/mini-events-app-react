import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const initialRegistrationStatus = () => (
    <p className="registration-status-heading">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-status-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </>
  )

  const registered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-status-success-image"
      />
      <h1 className="you-have-already-registered">
        You have already registered for the event
      </h1>
    </>
  )

  const registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h1 className="registration-closed-text">
        Registrations Are Closed Now!
      </h1>
      <p className="stay-tuned-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  switch (status) {
    case registrationStatus.initial:
      return initialRegistrationStatus()
    case registrationStatus.yetToRegister:
      return yetToRegister()
    case registrationStatus.registered:
      return registered()
    case registrationStatus.registrationClosed:
      return registrationClosed()
    default:
      return null // or some default rendering
  }
}

export default ActiveEventRegistrationDetails
