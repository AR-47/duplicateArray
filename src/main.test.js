import { duplicate } from "./main.js";

test("duplicateArray returns a single array that is a duplicate of the input ", () => {
    expect(duplicate([1,2,3])).toEqual([1,2,3,1,2,3]);
    expect(duplicate(['1','2','3'])).toEqual(['1','2','3','1','2','3']);
    expect(duplicate(['Hello', 'World'])).toEqual(['Hello', 'World', 'Hello', 'World']);
})
