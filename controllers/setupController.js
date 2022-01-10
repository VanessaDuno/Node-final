var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function(req, res){
        
        //seed dataBase
        var starterTodos = [
            {
                username: 'test',
                todo: 'Learn confluent',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn node js',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn apache kafka',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, result){
            res.send (result);
        })
    })
}