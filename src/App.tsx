/*Framework imports*/
import React from "react";
import { useState } from "react";

/*Style imports*/
import './index.css';

/*Icons imports*/
import { FaPlay } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';

/*Components imports*/
import CodingArea from "./components/CodingArea";
import CompiledArea from "./components/CompiledArea";
import Debug from "./components/Debug";

/*Class imports*/
import ErrorToken from "./classes/ErrorToken";
import Token from "./classes/Token";

/*Custom hooks imports*/
import useToggle from './hooks/useToggle';

/*Function imports*/
import doLexAnalysis from "./utils/lexicalAnalysis";
import classNames from "classnames";

function App(){
	const [theme, toggleTheme] = useToggle(true);
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
		setErrorMessage("");
		try{
			const newTokens = doLexAnalysis(coolCode);
			setTokens(newTokens);
		}
		catch (error){
			if (error){
				if (error instanceof ErrorToken){
					setErrorMessage(error.toString());
					setErrorLine(error.getLine);
				}
				toggle(true);
			}
		}
	}

	const appClass = classNames('app-content', {dark: theme});

	return (
		<div className={appClass}>
			<nav>
				<button onClick={runCompiler}>
					<FaPlay/>
				</button>
					<button onClick={() => toggle()}>
					{show?<BiShow/>:<BiHide/>}
				</button>
				<button onClick={() => toggleTheme()}>
					{theme?<FaSun/>:<FaMoon/>}
				</button>
			</nav>
			<main>
				<CodingArea
					code={coolCode}
					errorLine={errorLine}
					onChange={handleCodeChange}
					theme={theme}
				/>
				<CompiledArea 
					code={tokens.toString()}
					theme={theme}
				/>
			</main>
			<Debug
				show={show}
				errorMessage={errorMessage}
				theme={theme}
			/>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;