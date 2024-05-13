import iconStar from "./assets/images/icon-star.svg";

function App() {
	const rating = [1, 2, 3, 4, 5];

	return (
		<>
			<div id="rating-component">
				<img src={iconStar} alt="A star icon" />
				<h2>How did we do?</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
					deleniti nam necessitatibus, dolorum est voluptatum temporibus modi
					animi quae beatae?
				</p>
				<form action="">
					<div className="rating-container">
						{rating.map((rate) => {
							return <div key={rate}>{rate}</div>;
						})}
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}

export default App;
