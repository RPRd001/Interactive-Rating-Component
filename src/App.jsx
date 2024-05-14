import { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
	// Render State
	const [render, setRender] = useState(true);

	// Rating State
	const [rating, setRating] = useState(undefined);

	return (
		<>
			{render ? <Rating setRating={setRating} rating={rating}  render={render} setRender={setRender} /> : <Thanks rating={rating} />}
		</>
	);
}

export default App;
