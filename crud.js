// Import the mongoose module, define the schema and models.
const mongoose = require('mongoose');
const mySchema = { title: String, content: String };
const Article = mongoose.model('Article', mySchema);
const url = 'mongodb://127.0.0.1:27017/wikiDB';
const mongooseArgs = { useNewUrlParser: true, useUnifiedTopology: true };

exports.getItem = getItem;
exports.getAllItems = getAllItems;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.updateTitleOrContent = updateTitleOrContent;
exports.deleteItem = deleteItem;
exports.deleteAllItems = deleteAllItems;

// Opens connection with the database.
function connectDB(){
    return mongoose.connect(url, mongooseArgs);
}

// Closes the connection with the database.
function disconnectDB(){
    return mongoose.disconnect();
}

function getAllItems(){
    return connectDB()
        .then(() => Article.find({}))
        .catch(err => console.log(err))
        .finally(() => disconnectDB());
}

function getItem(article){
    return connectDB()
        .then(() => Article.findOne({title: article.title}))
        .catch(err => console.log(err))
        .finally(() => disconnectDB());
}

function createItem(article){
    return connectDB()
        .then(() => Article.create(article))
        .catch(err => console.log(err))
        .finally(() => disconnectDB());
}

function updateItem(article, update) {
    return connectDB()
      .then(() => Article.updateOne(
        { title: article.title },
        { $set: { title: update.title, content: update.content } }))
      .catch(err => console.log(err))
      .finally(() => disconnectDB());
}
  
function updateTitleOrContent(article, update) {
    return connectDB()
      .then(() => Article.updateOne({ title: article.title }, { $set: update }))
      .catch(err => console.log(err))
      .finally(() => disconnectDB());
}

function deleteItem(article){
    return connectDB()
        .then(() => Article.deleteOne({title: article.title}))
        .catch(err => console.log(err))
        .finally(() => disconnectDB());
}

function deleteAllItems(){
    return connectDB()
        .then(() => Article.deleteMany({}))
        .catch(err => console.log(err))
        .finally(() => disconnectDB());
}
