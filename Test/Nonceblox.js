const { expect } = require("chai");


describe("Nonceblox contract", () => {
  it("It should return Addition of Given number", async function () {
    const Nonceblox = await ethers.getContractFactory("Nonceblox");
    const nonceblox = await Nonceblox.deploy();

    await nonceblox.deployed();
    expect(await nonceblox.addition(4, 5)).to.equal("9");
  });

  it("It should return Suntraction of Given number", async function () {
    const Nonceblox = await ethers.getContractFactory("Nonceblox");
    const nonceblox = await Nonceblox.deploy();

    await nonceblox.deployed();
    expect(await nonceblox.subtraction(10,6)).to.equal("4");
  });
  it("It should return Multiplication of Given number", async function () {
    const Nonceblox = await ethers.getContractFactory("Nonceblox")
    const nonceblox = await Nonceblox.deploy()

    await nonceblox.deployed()
    expect(await nonceblox.multiplication(5,2)).to.equal("10")
  })
  it("It should return Division of Given number", async function () {
    const Nonceblox = await ethers.getContractFactory("Nonceblox")
    const nonceblox = await Nonceblox.deploy()

    await nonceblox.deployed()
    expect(await nonceblox.division(10,5)).to.equal("2")
  })
});
