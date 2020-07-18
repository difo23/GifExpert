import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hooks useFetchGifs', () => {
	let category = 'Hola';
	test('should hooks return default state', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category));
        // await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should hooks return value state', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(5);
        expect(loading).toBe(false);
    });
    

});
