const Utility = require('../common/Utility');
const Common = require('../common/common');
const expect = require('chai').expect;


describe('Testing Total Balance', function() {
it('Etherum address', async () => {
    const result = await Utility.Call_Get_Request(JSON.stringify(Common.eth_Rich_Address));
    expect(result).to.equal(647726790004104200); 
  });
})

describe('Testing More than 100 addresses', function() {
    it('Etherum address', async () => {
        const result = await Utility.Call_Get_Request(JSON.stringify(Common.eth_Address));
        expect(result).to.equal(""); 
      });
    })