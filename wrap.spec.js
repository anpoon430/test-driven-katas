const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  // beforeEach((function(){

  //   wrap(str, num)
  // }))
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("it makes sure no line of text is longer than the column number", () => {
    let text =
      "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
    let num = 20;
    expect(wrap(text, num)).to.equal(
      `Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`
    );
  });
  it("works with text shorter than column size", () => {
    let text = "lorem ipsum";
    let num = 20;
    expect(wrap(text, num)).to.equal("lorem ipsum");
  });

  // it('makes sure appropriate data types passed', () => {
  //   expect()
  // })
});
