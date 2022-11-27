const axios = require('axios');
require('dotenv').config()

function convert_array_to_batches(addresses,chunkSize)
{
    const array_of_batches = [];
    while (addresses.length > 0) 
    {
        const batches = addresses.splice(0, chunkSize);
        array_of_batches.push(batches);
    }
    return array_of_batches;
}

async function Fetch_Total_Balance_From_GOERLI_NETWORK(addresses)
{
    try
    {
    let url = process.env.GOERLI_API_URL 
    url    += "module=account"
    url    += "&action=balancemulti"
    url    += "&apikey=" + process.env.API_KEY 
    url    += "&address=" +addresses
    let response_data = null
    var config = 
    {
        method  : 'get',
        url     : url,
        headers : { 'Accept-Encoding': 'application/json', }
    };
    response_data = await axios(config).then(function (response) 
      {
        return response.data.status != '0' ? response.data.result : null
      })
      .catch(function (error) {
        console.log("error",error);
        return null
      });
      console.log("response_data",response_data)
      return response_data  ;
    }
    catch (error) 
    {
        console.log(error);
        return null
    }
}

async function Call_Get_Request(parameters)
{
    try
    {
      let response_data = null
      var config = {
        method: 'get',
        url: 'http://localhost:4000/checkBalance',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : parameters
      };
      response_data = await axios(config)
      .then(function (response) {
        response_data = response.data.totalBalance;
        return response_data
      })
      .catch(function (error) {
        console.log(error);
        response_data = 0
      });
      
    return response_data
    }
    catch (error) 
    {
        console.log(error);
        return 0
    }
}

module.exports = {

    convert_array_to_batches : convert_array_to_batches,
    Call_Get_Request :Call_Get_Request,
    Fetch_Total_Balance_From_GOERLI_NETWORK:Fetch_Total_Balance_From_GOERLI_NETWORK
}