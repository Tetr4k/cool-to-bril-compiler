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

/*Custom hooks imports*/
import useToggle from './hooks/useToggle';

/*Function imports*/
import doLexAnalysis from "./utils/lexicalAnalisys";
import doSynAnalysis from "./utils/syntaxAnalisys";
import classNames from "classnames";

/* Error imports */
import { CompilationError } from "./classes/Errors"

function App(){
	const [theme, toggleTheme] = useToggle(true);
	const [show, toggle] = useToggle(false);
	const [coolCode, setCoolCode] = useState("");
	const [errorList, setErrorList] = useState(new Array<CompilationError>());

	const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
		setCoolCode(event.target.value);
	}

	const runCompiler = () => {
		setErrorList(new Array<CompilationError>());

		const [tokens, lexicalErrors] = doLexAnalysis(coolCode);

		const /*[syntaxTree, syntaxErrors]*/ syntaxErrors = doSynAnalysis(tokens);

		const compilationErrors = new Array<CompilationError>(...lexicalErrors, ...syntaxErrors);

		if (compilationErrors.length)
			toggle(true);

		setErrorList(compilationErrors);
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
					errors={errorList.map(elem => elem.getLine)}
					onChange={handleCodeChange}
					theme={theme}
				/>
				<CompiledArea
					code={coolCode} 
					theme={theme}
				/>
			</main>
			<Debug
				show={show}
				errors={errorList}
				theme={theme}
			/>
			<footer>
				<a href="https://github.com/Tetr4k/cool-to-bril-compiler/">Repository</a>
			</footer>
		</div>
	)
}

export default App;