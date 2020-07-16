import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddElement = ({ handleAdd }) => {
	const [ element, setElement ] = useState('');

	const handleChange = (e) => {
		setElement(e.target.value);
	};

	const handleSumit = (e) => {
		e.preventDefault();

		if (element.trim().length > 2) {
			handleAdd((category) => [ ...category, element ]);
		}

		setElement('');
	};

	return (
		<form onSubmit={handleSumit}>
			<div>
				<input type="text" value={element} onChange={handleChange} />
			</div>
		</form>
	);
};

AddElement.propTypes = {
	handleAdd: PropTypes.func.isRequired
};

export default AddElement;
