import iconStar from "../assets/images/icon-star.svg";

const Rating = ({ setRender }) => {
	const rating = [1, 2, 3, 4, 5];

	return (
		<div id="rating-component">
			<div className="image-container">
				<img src={iconStar} alt="A star icon" />
			</div>
			<h2>How did we do?</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				deleniti nam necessitatibus, dolorum est voluptatum temporibus modi
				animi quae beatae?
			</p>
			<form>
				<div className="rating-container">
					{rating.map((rate) => {
						return <button type="button"  key={rate}>{rate}</button>;
					})}
				</div>

				<button
					className="submit-button"
					onClick={() => {
						setRender(false);
					}}
					type="button"
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default Rating;
