import React from "react";
import { useState } from "react";
import Debug from "./Components/Debug";

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
				<Debug tokens={tokens}/>
			</main>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</>
	)
}

export default App;