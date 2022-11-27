module.exports = 
{
  async check_balance_validation(req, res,next) {
    try 
    {
      let dataBody      = req.body
      if(dataBody.length < 100)
      {
        next();
      }
      else
      {
        res.status(400).json({ status: 400,data: {},message: "Addresses should be not more than 100"});
      }
    } catch (error) {
      console.log(error);
      res.json({ status: 400,data: {},message: "Error, Please check the log"});
    }
  },
};
