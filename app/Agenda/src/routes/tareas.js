const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('tareas-db', ['tareas']); //Aqui se pone despues la url de mlab

//Listar todas las tareas
router.get('/tareas', (req, res, next) => {
  db.tareas.find((err, tareas) => {
    if (err) return next(err);
    res.json(tareas)
  });
});

//Listar una unica tarea

router.get('/tareas/:id', (req, res, next) => {
  db.tareas.findOne({_id: mongojs.ObjectId(req.params._id)}, (err, tarea) => {
    if (err) return next(err);
    res.json(tarea)
  });
});

//guardar tarea

router.post('/tareas', (req, res, next) => {
  const tarea = req.body;
  if (!tarea.title || !(tarea.isDone + '')) {
    res.status(400).json({
      error: 'Bad data'
    });
  } else {
    db.tareas.save(tarea, (err, tarea) => {
      if (err) return next(err);
      res.json(tarea);
    })
  }
});

//borrar tarea

router.delete('/tareas/:id', (req, res, next) => {
  db.tareas.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
    // Error found: en req.params._id, no recogia correctamente el id ya que tenia guion bajo
    // y la solucion era quitarselo.
    if (err) return next(err);
    res.json(result);
  });
});

//actualizar tarea

router.put('/tareas/:id', (req, res, next) => {
  const tarea = req.body;

  let updateTarea = {}; //objeto tarea

  
  if (tarea.isDone) {
    updateTarea.isDone = tarea.isDone;
  }
  if (tarea.title) {
    updateTarea.title = tarea.title;
  }
  if (!updateTarea) {
    res.status(400);
    res.json({'error': 'bad request'});
  } else {
    var id=req.params.id
    console.log(id)
    // Problema al hacer el update
    // Problem fixed: Se encontraba en el (click)="updateTarea(tarea)"
    // Se estaba usando updateTarea(tarea.id). La id no era necesaria pasarla

    db.tareas.update({_id: mongojs.ObjectId(id)}, updateTarea, (err, tarea) => {
      if (err) return next(err);
      res.json(tarea);
    });
  }
});


module.exports = router;
