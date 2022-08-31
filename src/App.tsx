import React from "react";
import { useState } from "react";
import CodeArea from "./Components/CodeArea";
import Debug from "./Components/Debug";
import './index.css';

function App(){
	const [tokens, setTokens] = useState([]);

	return (
		<div className="app-content">
			<nav>

			</nav>
			<main>
				<CodeArea/>
				<Debug tokens={tokens}/>
			</main>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;