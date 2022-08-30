import React from "react";
import { useState } from "react";

function App(){
	const [tokens, setTokens] = useState([]);
	const [coolCode, setCoolCode] = useState("");
	const handleCoolCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCoolCode(event.target.value);
	}

	return (
		<>
			<main>
				<label>
					Cool:
					<textarea id="coolCode" value={coolCode} onChange={handleCoolCodeChange}></textarea>
				</label>
			</main>
		</>
	)
}

export default App;