import { APIKEY } from '../config/api/constant';

export const getGifs = async (category) => {
	let limit = 5;

	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${APIKEY}`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const imagenes = data.map((img) => {
		return {
			key: img.id,
			url: img.images.downsized_medium.url,
			title: img.title
		};
	});

	return imagenes;
};
