
import { describe, it, expect } from '@jest/globals';
import createCosmonaut from "../src/createCosmonaut";
import { Mission } from '../src/types';

/**
 * Test createCosmonaut function
 * 
 */
describe('Test createCosmonaut function', () => {
    it('string', () => {
        expect(createCosmonaut("Amstrong", "Moon", "United-State")).toStrictEqual({name: "Amstrong", mission: "Moon", country: "United-State"});
    });
});