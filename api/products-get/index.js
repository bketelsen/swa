let azure = require('azure-storage');

module.exports = async function (context, req) {

  let connectionString = process.env.StorageConnectionString;
  let tableService = azure.createTableService(connectionString);

  var query = new azure.TableQuery()
  .where('PartitionKey eq ?', 'brian');
  tableService.queryEntities('pages', query, null, function (error, result) {
    var pages = result.entries;
    if (error) {
      context.res.status(400).json(error);
    } else {
      context.res.status(200).json(pages);
    }
  });

};
