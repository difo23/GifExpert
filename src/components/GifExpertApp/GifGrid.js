import React /*,{ useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { LinearProgress } from '@material-ui/core';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
	const { data, loading } = useFetchGifs(category);

	return (
		<div>
			<h3>{category}</h3>
			{loading && (
				<p id="loading">
					<LinearProgress />
				</p>
			)}
			<ul className="card-grid">
				{data.map(({ id, url, title }) => {
					return <GifItem key={id} url={url} title={title} />;
				})}
			</ul>
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string
};

export default GifGrid;
