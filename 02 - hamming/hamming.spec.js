import { hamming } from './hamming';

test('it return 0 when params are identical', () => {
    expect(hamming('A','A')).toBe(0);
    expect(hamming('AT','AT')).toBe(0);
    expect(hamming('AGT','AGT')).toBe(0);
});

test('it return number of different when params aren"t the same', () => {
    expect(hamming('AGC','ATC')).toBe(1);
    expect(hamming('AGT','ATG')).toBe(2);
});

test('it trows exception if strings have different lengths', () => {
    expect(() => { hamming('ATCG','ATC') }).toThrow('String length dont\'t match!');
});

test('it trows excepetion if strings are greater than 10 characters', () => {
    expect(() => { hamming('ATCGATCGATC','ATCGATCGATC') }).toThrow('String to long!');
});