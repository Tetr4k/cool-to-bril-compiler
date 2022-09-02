import React from "react";
import { useState } from "react";
import useToggle from './hooks/useToggle';
import CodingArea from "./components/CodingArea";
import Debug from "./components/Debug";
import './index.css';
import { FaPlay } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';
import captureTokens from "./functions/tokenCapture";

function App(){
	const [state, toggle] = useToggle(false);
	const [tokens, setTokens] = useState(new Array<(string | number)>);
	const [code, setCode] = useState("");

	const renderTokens = () => {
		return tokens.map((element, index) => {
			return (<li key={index}>{element}</li>)
		})
	}

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCode(event.target.value);
	}

	const runCompiler = () => {
		const capturedTokens = captureTokens(code);
		setTokens(capturedTokens);
		toggle(true);
		//const tokens = doLexicalAnalysis(code);
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
				<CodingArea code={code}>
					<textarea onChange={handleCodeChange}/>
				</CodingArea>
				
				{/*
				
				<p>
					{code}
				</p> 

				*/}
				
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