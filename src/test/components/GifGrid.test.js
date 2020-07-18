import React from 'react';
import Gifgrid from '../../components/GifExpertApp/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid Component', () => {
	const CATEGORY = 'Bob Sponge';

	test('should default data and loading true', () => {
		let gifs = {
			data: [],
			loading: true
		};

		useFetchGifs.mockReturnValue(gifs);

		const wrapper = shallow(<Gifgrid category={CATEGORY} />);

		expect(wrapper.find('p').exists()).toBe(true);
		expect(wrapper.find('GifItem').length).toBe(gifs.data.length);
	});

	test('should get data and loading false', () => {
		let gifs = {
			data: [
				{
					id: '1234',
					url: 'https://localhost:3000/algo.png',
					title: 'Pruebas unitarias'
				},
				{
					id: '12345',
					url: 'https://localhost:3000/algo.png',
					title: 'Pruebas unitarias'
				}
			],
			loading: false
		};

		useFetchGifs.mockReturnValue(gifs);

		const wrapper = shallow(<Gifgrid category={CATEGORY} />);
		let progress = wrapper.find('p');

		expect(wrapper).toMatchSnapshot();
		expect(progress.exists()).toBe(false);
		expect(wrapper.find('GifItem').length).toBe(gifs.data.length);
	});
});
