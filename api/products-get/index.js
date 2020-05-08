let azure = require('azure-storage');

module.exports = async function (context, req) {

  let connectionString = process.env.StorageConnectionString;
  let tableService = azure.createTableService(connectionString);
  var query = new azure.TableQuery();
  tableService.queryEntities('pages', query, null, function (error, result) {
    if (!error) {
      var pages = result.entries.length;
      context.res.status(200).json({pages});
    } else {

      context.res.status(400).json(error);
    }
  });

};
