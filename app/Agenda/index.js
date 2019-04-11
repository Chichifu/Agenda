var bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path= require('path');
const app = express();

//const indexRoutes=require('./routes/index');
const tareasRoutes=require('./src/routes/tareas');

//settings
app.set('views',path.join(__dirname,'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//configurar cors
//Le decimos a nuestro servidor que utilice body-parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
//Añadimos este middleware el que nos permitira recibir peticiones
app.use((req, res, next) => {
  //permitimos que las peticiones se puedan hacer desde cualquier sitio
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Origin', '192.168.0.11')
  // configuramos las cabeceras que pueden llegar
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  // configuramos los métodos que nos pueden llegar
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next(); // para que se salga de esta función
});

//routes
//app.use(indexRoutes);
app.use('/api',tareasRoutes);

//static files
app.use(express.static(path.join(__dirname, 'src/dist/agenda-cliente')));

//start server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
