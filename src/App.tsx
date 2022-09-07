import React from "react";
import './index.css';
import { FaPlay } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';
import { useState } from "react";
import useToggle from './hooks/useToggle';
import CodingArea from "./components/CodingArea";
import CompiledArea from "./components/CompiledArea";
import Debug from "./components/Debug";
import ErrorToken from "./classes/ErrorToken";
import doLexAnalysis from "./functions/tokenCapture";
import Token from "./classes/Token";

function App(){
	const [show, toggle] = useToggle(false);
	const [coolCode, setCoolCode] = useState("");
	const [errorLine, setErrorLine] = useState(0);
	const [errorMessage, setErrorMessage] = useState("");

	//states temporarios
	const [tokens, setTokens] = useState(new Array<Token>);

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
		setCoolCode(event.target.value);
		setErrorLine(0);
	}

	const runCompiler = () => {
		try{
			setErrorMessage("");
			const newTokens = doLexAnalysis(coolCode);
			setTokens(newTokens);
		}
		catch (error){
			if (error instanceof ErrorToken){
				setErrorMessage(error.toString());
				setErrorLine(error.getLine);
			}
			else
				setErrorMessage("Error: unknow")
			toggle(true);
		}
	}

	return (
		<div className="app-content">
			<nav>
				<button onClick={runCompiler}>
					<FaPlay/>
				</button>
				<button onClick={() => toggle()}>
					{show?<BiShow/>:<BiHide/>}
				</button>
			</nav>
			<main>
				<CodingArea code={coolCode} errorLine={errorLine} onChange={handleCodeChange}/>
				<CompiledArea code={tokens.toString()}/>
			</main>
			<Debug show={show} errorMessage={errorMessage}/>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;