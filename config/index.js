var config =  require('./config.json');

module.exports = {
    getDbConnectionString : function (){
    return `mongodb+srv://${config.user}:${config.pwd}@cluster0.mlgst.mongodb.net/${config.bd}?retryWrites=true&w=majority`;
    }
}