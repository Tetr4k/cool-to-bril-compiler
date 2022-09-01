import { useState } from "react"

const useToggle = (initialState: boolean): [boolean, any] => {
	const [state, setState] = useState(initialState);
	const toggle = (newState?: boolean) => newState == undefined ? setState(!state) : setState(newState);
	return [state, toggle];
}

export default useToggle;