import React /*,{ useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { LinearProgress } from '@material-ui/core';
// import { getGifs } from '../../helpers/getGifs';

const Gifgrid = ({ category }) => {
	const { data, loading } = useFetchGifs(category);

	return (
		<div>
			<h3>{category}</h3>
			{loading && <LinearProgress />}
			<div className="card-grid">
				{data.map(({ id, url, title }) => {
					return (
						<div key={id} className="card">
							<h4>{title}</h4>
							<img src={url} alt={title} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

Gifgrid.propTypes = {
	category: PropTypes.string
};

export default Gifgrid;
