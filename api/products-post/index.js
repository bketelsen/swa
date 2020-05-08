let azure = require('azure-storage');

module.exports = async function (context, req) {
    let page = req.body;
    page.PartitionKey = page.slug;
    page.RowKey = page.slug;

    let connectionString = process.env.StorageConnectionString;
    let tableService = azure.createTableService(connectionString);
    tableService.insertOrReplaceEntity('pages', page,(error, result, response) => {
        let res = {
            statusCode: error ? 400 : 204,
            body: null
        };
        context.done(null, res);
    });

};
