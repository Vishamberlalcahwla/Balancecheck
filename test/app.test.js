const Utility = require('../common/Utility');
const Common = require('../common/common');
const expect = require('chai').expect;


describe('Testing Total Balance', function() {
it('Etherum address', async () => {
    const result = await Utility.Call_Get_Request(JSON.stringify(Common.eth_Rich_Address));
    expect(result).to.equal(2.2453419557569094e+21); 
  });
})

describe('Testing More than 100 addresses', function() {
    it('Etherum address', async () => {
        const result = await Utility.Call_Get_Request(JSON.stringify(Common.eth_Address));
        expect(result).to.equal(""); 
      });
    })