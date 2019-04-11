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
  if (!task.title || !(tarea.isDone + '')) {
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
  db.tareas.remove({_id: mongojs.ObjectId(req.params._id)}, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
});

//actualizar tarea

router.put('/tareas/:id', (req, res, next) => {
  const tarea = req.body;
  let updateTarea = {}; //objeto tarea

  if (task.isDone) {
    updateTarea.isDone = task.isDone;
  }
  if (tarea.title) {
    updateTarea.title = tarea.title;
  }
  if (!updateTarea) {
    res.status(400);
    res.json({'error': 'bad request'});
  } else {
    db.tareas.update({_id: mongojs.ObjectId(req.params.id)}, updateTarea, {}, (err, task) => {
      if (err) return next(err);
      res.json(task);
    });
  }
});


module.exports = router;
