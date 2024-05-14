import iconStar from "../assets/images/icon-star.svg";

const Rating = ({ setRender }) => {
	const rating = [1, 2, 3, 4, 5];

	return (
		<div id="rating-component">
			<div className="image-container">
				<img src={iconStar} alt="A star icon" />
			</div>
			<h3>How did we do?</h3>
			<p>
				Please let us know how we did with your support request. All feedback is appreaciated to help us improve our offering!
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
