import pinGenerator from '../index';

describe('index.ts', () => {
    it('should contain only numbers', () => {
        expect(/^\d+$/.test(pinGenerator())).toBe(true);
    });
    it('should generate a 4-digit pin by default', () => {
        expect(pinGenerator().length).toBe(4);
    });
    it('should throw error if length <= 0', () => {
        expect(() => {
            pinGenerator(0);
        }).toThrow();

        expect(() => {
            pinGenerator(-1);
        }).toThrow();
    });

    it('should generate pin if length >=1', () => {
        expect(pinGenerator(1).length).toBe(1);
        expect(pinGenerator(2).length).toBe(2);
        expect(pinGenerator(3).length).toBe(3);
        expect(pinGenerator(4).length).toBe(4);
        expect(pinGenerator(5).length).toBe(5);
        expect(pinGenerator(6).length).toBe(6);
        expect(pinGenerator(7).length).toBe(7);
        expect(pinGenerator(8).length).toBe(8);
        expect(pinGenerator(9).length).toBe(9);
        expect(pinGenerator(10).length).toBe(10);
    });
});
