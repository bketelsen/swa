 const CosmosClient = require('@azure/cosmos').CosmosClient


module.exports = function (context, req, page) {
    const dbResponse = await CosmosClient.databases.createIfNotExists({
      id: "lifehub"
    })
    const database = dbResponse.database
    const coResponse = await database.containers.createIfNotExists({
      id: "pages"
    })
    container = coResponse.container

    const querySpec = {
        query: "SELECT * FROM pages p"
      };
    const { resources } = await container.items.query(querySpec).fetchAll()

    debug('Setting up the container...done!')
    if (!resources)
    {
        context.log("Page item not found");
    }
    else
    {
      context.res.status(200).json({resources});
    }

    context.done();
};