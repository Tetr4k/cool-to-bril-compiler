import React from "react";
import { useState } from "react";
import CodeArea from "./Components/CodeArea";
import Debug from "./Components/Debug";
import './index.css';
import { FaPlay } from 'react-icons/fa';

function App(){
	const [tokens, setTokens] = useState([]);
	const [code, setCode] = useState("");

	const doLexicalAnalysis = (code: string) => {
		console.log("Fazendo analize lexica . . .")
	}

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCode(event.target.value);
		console.log(code);
		doLexicalAnalysis(code);
	}

	const runCompiler = () => {
		const tokens = doLexicalAnalysis(code);
	}

	return (
		<div className="app-content">
			<nav>
				<button onClick={runCompiler}>
					<FaPlay/>
				</button>
			</nav>
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