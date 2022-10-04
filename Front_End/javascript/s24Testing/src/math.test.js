const {sum} = require("./math.js");


describe("Toplama fonksiyonu yapalım", () =>{
it("10 + 5 = 15 mi?", () => {
    expect(sum(10,5)).toBe(15);
}) 
});