const assert = require('chai').assert;
const wordApp = require('../src/index.js');

describe("words()", () => {      
	it("checking for a single word", () => {     
		let Count = { word: 1 };     
		assert.equal(JSON.stringify(wordApp("word")), JSON.stringify(Count));
	});

	it("Checking for working example", () => {     
		let Count = { i: 2, learn: 1, fast: 2, so: 1, can: 1, work: 1 };     
		assert.equal(JSON.stringify(wordApp("I learn fast so I can work fast")), JSON.stringify(Count));
	});

	it("Checking for working example", () => {     
		let Count = "Please enter a String";    
		assert.equal(JSON.stringify(wordApp("")), JSON.stringify(Count));
		console.log("Please enter a String");
	});
});