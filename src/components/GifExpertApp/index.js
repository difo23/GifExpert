import React, { /*PropTypes,*/ useState } from 'react';
import AddElement from './AddElement';
import GifGrid from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
	const [ category, setCategory ] = useState(defaultCategories);

	return (
		<div>
			<h2> GifExpertApp</h2>
			<hr />
			<AddElement handleAdd={setCategory} />
			<div>{category.map((element) => <GifGrid key={element} category={element} />)}</div>
		</div>
	);
};

//GifExpertApp.propTypes = {};

export default GifExpertApp;
