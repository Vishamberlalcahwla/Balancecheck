const Utility = require("../common/Utility");
const Web3 = require('web3');
module.exports = {
  async Check_Balance(req, res) {
    try {
      let dataBody = req.body;
      let array_batches = Utility.convert_array_to_batches(dataBody, 20);
      let balance_array = [];
      let data_balance_array = [];
      array_batches.forEach(async (element) => {
        balance_array.push(
          new Promise(async (resolve, reject) => {
            let balance_array_batches =
              await Utility.Fetch_Total_Balance_From_GOERLI_NETWORK(
                element.toString()
              );
            resolve(balance_array_batches);
          })
        );
      });
      Promise.all(balance_array)
        .then(async (responses) => {

          let formated_data = [].concat.apply([], responses)
          let totalBalance = formated_data.reduce((a, b) => +a + +b.balance, 0);
          return res.json({
            status: 200,
            addresses: formated_data,
            totalBalance : totalBalance,
            message: "Data",
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({
            status: 400,
            addresses: [],
            totalBalance : 0,
            
            message: "Error, Please check the log",
          });
        });
    } catch (error) {
      console.log(error);
      res.json({
        status: 400,
        addresses: [],
        totalBalance : 0,
        message: "Error, Please check the log",
      });
    }
  },
};
