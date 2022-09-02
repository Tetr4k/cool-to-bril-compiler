import React from "react";
import './index.css';
import { FaPlay } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';
import { useState } from "react";
import useToggle from './hooks/useToggle';
import CodingArea from "./components/CodingArea";
import Debug from "./components/Debug";
import Token from "./classes/Token";
import ErrorToken from "./classes/ErrorToken";
import doLexAnalysis from "./functions/tokenCapture";

function App(){
	const [state, toggle] = useToggle(false);
	const [code, setCode] = useState("");
	const [errorLine, setErrorLine] = useState(0);

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCode(event.target.value);
		setErrorLine(0);
	}

	const [tokens, setTokens] = useState(new Array<(Token)>);

	const renderTokens = () => {
		return tokens.map((element, index) => {
			return (
				<li key={index}>
					{element.toString()}
				</li>
			)
		})
	}

	const runCompiler = () => {
		const newTokens = doLexAnalysis(code);
		const lastToken = newTokens.reverse().at(0);

		if (lastToken instanceof ErrorToken) 
			setErrorLine(lastToken.getLine);
		else
			setErrorLine(0);

		if (newTokens.length > 0)
			toggle(true);

		setTokens(newTokens);
	}

	return (
		<div className="app-content">
			<nav>
				<button onClick={runCompiler}>
					<FaPlay/>
				</button>
				<button onClick={() => toggle()}>
					{state?<BiShow/>:<BiHide/>}
				</button>
			</nav>
			<main>
				<CodingArea code={code} error={errorLine}>
					<textarea onChange={handleCodeChange}/>
				</CodingArea>
			</main>
			<Debug show={state}>
				{renderTokens()}
			</Debug>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;