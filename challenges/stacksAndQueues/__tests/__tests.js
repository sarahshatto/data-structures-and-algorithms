'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe("PseudoQueue Tests", () => {
    it("Empty test", () => {
        let testPQ = new PseudoQueue();

        try {
            testPQ.dequeue();
        } catch(exception) {
            expect(exception).toEqual('PQueue is empty');
        }
        
    });

    it("Test Queue", () => {
        let testPQ = new PseudoQueue();

        testPQ.enqueue(1);
        testPQ.enqueue(2);
        testPQ.enqueue(3);

        expect(testPQ.dequeue()).toEqual(1);
        expect(testPQ.dequeue()).toEqual(2);
        expect(testPQ.dequeue()).toEqual(3);
    });
});
