import React from "react";
import { useState } from "react";
import useToggle from './hooks/useToggle';
import CodeArea from "./Components/CodeArea";
import Debug from "./Components/Debug";
import './index.css';
import { FaPlay } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';

function App(){
	const [state, toggle] = useToggle(false);
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
				<button onClick={toggle}>
					{state?<BiShow/>:<BiHide/>}
				</button>
			</nav>
			<main>
				<CodeArea code={code}>
					<textarea onChange={handleCodeChange}/>
				</CodeArea>
			</main>
			<Debug show={state} tokens={tokens}/>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;