import illustrationThanks from "../assets/images/illustration-thank-you.svg"

const Thanks = ({ rating }) => {

  return (
    <div id="thanks-component">
        <img className="illustration" src={illustrationThanks} alt="a cellphone illustration with messages and links" />
        <p className="rating-label">
          You selected {rating} out of 5
        </p>
        <h3>
          Thank you!
        </h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch! 
        </p>
    </div>
  )
}

export default Thanks