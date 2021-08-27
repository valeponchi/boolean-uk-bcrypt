const payBill = require("../payBill.js");

const { calculateSubtotal, calculateServiceCharge } = payBill;

const bill = [
  { item: "pizza", price: 8.0 },
  { item: "beer", price: 2.0 }
];

describe("Calculate subtotal function", () => {
  it("should add the prices of each item on the bill", () => {
    const input = [...bill];
    const output = 10.0;

    expect(calculateSubtotal(input)).toEqual(output);
  });
});

describe("Calculate service charge function", () => {
  describe("when service charge is not given", () => {
    it("should calculate a default of 12.5% from the total", () => {
      // Write code here
      
      const input = 10;
      const output = 1.25;
      expect(calculateServiceCharge(input)).toEqual(output)
  });

  describe("when service charge is given", () => {
    it("should calculate the given service charge from the total", () => {
      // Write code here
      const input = 10
      const input2 = 20
      const output = 1.25
      expect(calculateServiceCharge(input, input2)).toEqual(output)
    });
  });
})
})