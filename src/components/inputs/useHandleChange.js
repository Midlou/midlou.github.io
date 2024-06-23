const parseTypes = {
	number: (value) => parseFloat(value)
}

function parseValue(value, type) {
	return parseTypes[type] ? parseTypes[type](value) : value;
}

function useHandleChange(setState, type) {
	function handleChange({ target }) {
		let value = parseValue(target.value, type);

		if (!target.name) return setState(prevState => (value));

		setState(prevState => ({
			...prevState,
			[target.name]: value
		}));
	}

	return { handleChange };

}

export default useHandleChange;
