module.exports = function (context, req, toDoItem) {
    context.log('JavaScript queue trigger function processed work item');
    if (!page)
    {
        context.log("Page item not found");
    }
    else
    {
        context.log("Found page , Slug=" + page.slug);
    }

    context.done();
};