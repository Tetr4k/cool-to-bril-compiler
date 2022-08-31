import React from "react";
import { useState } from "react";
import CodeArea from "./Components/CodeArea";
import Debug from "./Components/Debug";
import './index.css';

function App(){
	const [tokens, setTokens] = useState([]);

	const [code, setCode] = useState("");

	const doLexicalAnalysis = (code: string) => {
		
	}

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCode(event.target.value);
		console.log(code);
		doLexicalAnalysis(code);
	}

	return (
		<div className="app-content">
			<main>
				<CodeArea code={code}>
					<textarea onChange={handleCodeChange}/>
				</CodeArea>
				<Debug tokens={tokens}/>
			</main>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;