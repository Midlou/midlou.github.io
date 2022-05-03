import React from 'react';
import useHandleChange from './useHandleChange';
import If from '../conditionals/if';

export default function Input({
	setState = null,
	label = '',
	name = '',
	value = undefined,
	type = 'text',
	className = '',
	placeholder = '',
	disabled = false,
	min = null,
	max = null,
	step = 1
}) {
	const { handleChange } = useHandleChange(setState, type);

	function getInputContent(className = null) {
		return <input
			type={type}
			name={name}
			defaultValue={value}
			onChange={setState ? handleChange : null}
			className={`w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
			disabled={disabled}
			placeholder={placeholder}
			min={min}
			max={max}
			step={step}
		/>
	}

	return <>
		<If render={label} body={() =>
			<label className="block text-sm">{label}</label>
		} />
		{
			getInputContent(className)
		}
	</>
}
