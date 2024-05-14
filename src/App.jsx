import { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
	// Render State
	const [render, setRender] = useState(true);

	// Selected Rating
	const [selected, setSelected] = useState(false);

	// onSubmit ? pass to next section
	const submitRating = () => {};

	return (
		<>
			{render ? <Rating render={render} setRender={setRender} /> : <Thanks />}
		</>
	);
}

export default App;
