import { useState } from "react";
import iconStar from "../assets/images/icon-star.svg";

const Rating = ({ setRender, setRating, rating }) => {
	const ratingOptions = [1, 2, 3, 4, 5];

	const handleSubmition = (rating) => {
		if (rating === undefined) {
			alert("You need to select a Rating")
		}
		else {
			setRender(false)
		}
	}

	// Need to add:
	// 1. State for the rating
	// 2. Condition check for only submiting if a rating is clicked

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
					{ratingOptions.map((rate) => {
						return <button onClick={() => {
							setRating(rate)
						}}  type="button"  key={rate}>{rate}</button>;
					})}
				</div>

				<button
					className="submit-button"
					onClick={() => {
						handleSubmition(rating)
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
