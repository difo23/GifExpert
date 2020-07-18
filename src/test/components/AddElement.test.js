import React from 'react';
import { shallow } from 'enzyme';
import AddElement from '../../components/GifExpertApp/AddElement';
import { Simulate } from 'react-dom/test-utils';

describe('Pruebas del componente <AddElement />', () => {
	const handleAdd = jest.fn();

	let wrapper = shallow(<AddElement handleAdd={handleAdd} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddElement handleAdd={handleAdd} />);
	});

	test('should snapshot verify', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should simulate change', () => {
		const value = 'text value';

		wrapper.find('input').simulate('change', { target: { value } });

		const p = wrapper.find('p');

		expect(p.text().trim()).toBe(value);
	});

	test('should simulate submit no llamar la funcion handleAdd', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(handleAdd).not.toHaveBeenCalled();
	});

	test('should simulate submit llamando la funcion handleAdd y limpiando el input element', () => {
		const value = 'text value';

		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(handleAdd).toHaveBeenCalled();
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
