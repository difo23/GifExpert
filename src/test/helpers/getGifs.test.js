import {getGifs} from '../../helpers/getGifs';

describe('Test getGifs Helper Fetch', () => {
    let category = 'Bod Sponge';
    let limit = 5;
	test(`Debe traer ${limit} elementos`, async () => {
		let elements = await getGifs(category);
		expect(elements.length).toBe(limit);
	});
});
