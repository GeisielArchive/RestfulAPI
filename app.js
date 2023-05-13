// Import required modules.
const express = require('express');
const bodyParser = require('body-parser');
const ejs  = require('ejs');
const crud = require(__dirname + '/crud.js');

// Setup the app.
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

////////////////////////////// Articles routes /////////////////////////////////
app.route('/articles')

.get(function(req, res){
    crud.getAllItems()
        .then((items) => { res.send(items) })
        .catch((err) => { console.log(err) });
})

.post(function(req, res){
    const article = {title: req.body.title, content: req.body.content}
    crud.createItem(article)
        .then((item) => { res.send(item) })
        .catch((err) => { console.log(err)}); 
})

.delete(function(req, res){
    crud.deleteAllItems()
        .then(() => { res.send("Successfully deleted all items") })
        .catch((err) => { console.log(err)});
});
////////////////////////////// Search for title ////////////////////////////////
app.route('/articles/:articleTitle')

.get(function(req, res){
    const search = {title: req.params.articleTitle}
    crud.getItem(search)
        .then(result => res.send(result))
        .catch(error => console.log(error));
})

.delete(function(req, res){
    const search = {title: req.params.articleTitle}
    crud.deleteItem(search)
        .then(() => res.send("Successfully deleted item"))
        .catch(error => console.log(error));
})

.put(function(req, res){
    const search = {title: req.params.articleTitle}
    const article = {title: req.body.title, content: req.body.content}
    crud.updateItem(search, article)
        .then(() => res.send("Successfully updated item"))
        .catch(error => console.log(error));
})

.patch(function(req, res){
    const search = {title: req.params.articleTitle}
    const article = req.body
    crud.updateTitleOrContent(search, article)
        .then(() => res.send("Successfully updated item"))
        .catch(error => console.log(error));
});
////////////////////////////// Start the server ////////////////////////////////
app.listen(3000, function(){
    console.log('Server started on port 3000')
});