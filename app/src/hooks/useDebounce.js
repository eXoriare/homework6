import { useEffect, useState } from "react"



export const useDebounce = (value, ms = 0) => {
	const [debouncedState, setDebouncedState] = useState(value)

	useEffect(() => {

		const id = setTimeout(() => {
			setDebouncedState(value)
		}, ms)


		return () => clearTimeout(id)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])


	return debouncedState
}