const Express = require("express");
const { connect } = require("mongoose");
const app = Express();

var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

const port =  process.env.PORT || 3000;

app.use('/assets', Express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


// Abriendo la conexión a mongoDB Atlas
connect(config.getDbConnectionString(), OPTIONS, MongoError => {
        if (MongoError) {
            console.error(MongoError);
            process.exit(1);
        }
        // se inicia el servidor
        app.listen(port, error => {
            if (error) {
                console.error(error);
                process.exit(1);
            }
            console.log("Conexión establecida con MongoDB Altas");
            console.log("Servidor listo");
        });
    }
);

setupController(app);
apiController(app);