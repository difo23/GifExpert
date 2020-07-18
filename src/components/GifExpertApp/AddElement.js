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
		<div>
			<p>{element}</p>
			<form onSubmit={handleSumit}>
				<div>
					<input type="text" value={element} onChange={handleChange} />
				</div>
			</form>
		</div>
	);
};

AddElement.propTypes = {
	handleAdd: PropTypes.func.isRequired
};

export default AddElement;
