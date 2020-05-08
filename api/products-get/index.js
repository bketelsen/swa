let azure = require('azure-storage');

module.exports = async function (context, req) {

    let connectionString = process.env.StorageConnectionString;
    let tableService = azure.createTableService(connectionString);
    tableService.queryEntities('pages',null,(error, result, response) => {
      var pages = result.entities;
        context.res.status(200).json(pages);
    });

};
