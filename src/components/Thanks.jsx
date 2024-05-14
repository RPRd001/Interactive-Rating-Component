import illustrationThanks from "../assets/images/illustration-thank-you.svg"

const Thanks = () => {
  const rating = 5

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa minus voluptatibus obcaecati corrupti iusto minima similique eum quod ipsum iure!
        </p>
    </div>
  )
}

export default Thanks