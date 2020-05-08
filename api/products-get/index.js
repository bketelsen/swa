let azure = require('azure-storage');

module.exports = async function (context, req) {

  let connectionString = process.env.StorageConnectionString;
  let tableService = azure.createTableService(connectionString);

  tableService.queryEntities('pages', null, null, function (error, result) {
    if (!error) {

      var pages = result.entries;
      context.res.status(200).json(pages);
    } else {

      context.res.status(400).json(error);
    }
  });

};
