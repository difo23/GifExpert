import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../components/GifExpertApp';

describe('Pruebas componente App index', () => {
	const defaultCategories = [ 'Hola', 'Mono' ];
	const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />);

	test('should snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should ', () => {
		expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
	});
});
