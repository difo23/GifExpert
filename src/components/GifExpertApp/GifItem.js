import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({ key, title, url }) => {
	return (
		<li key={key} className="card animate__animated animate__fadeIn">
			<h4>{title}</h4>
			<img src={url} alt={title} />
		</li>
	);
};

GifItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
};

export default GifItem;
