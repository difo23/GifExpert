import React from 'react';
import GifItem from '../../components/GifExpertApp/GifItem';
import { shallow } from 'enzyme';

describe('Test GifItem Component', () => {
	const id = '123456';
	const url = 'http://localhost:3000/algo.png';
	const title = 'imagen de pruewba';
	const alt = title;
	const wrapper = shallow(<GifItem key={id} url={url} title={title} />);

	test('Test prueba estructra GifItem', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test(`Debe poseer un title ${title}`, () => {
		const h4 = wrapper.find('h4');

		expect(h4.text().trim()).toBe(title);
	});

	test(`Debe poseer un url ${url} y alt ${alt}`, () => {
		const img = wrapper.find('img');

		expect(img.prop('alt')).toBe(alt);
		expect(img.prop('src')).toBe(url);
	});

	test(`Debe poseer un fadein animated`, () => {
		const div = wrapper.find('div');
		const className = div.prop('className');

		expect(className.includes('animate__fadeIn')).toBe(true);
	});
});
