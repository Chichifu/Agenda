import { Title } from '@angular/platform-browser';
import { Tarea } from './../../Tarea';
import { TareasService } from './../../services/tareas.service';
import { Component, OnInit } from '@angular/core';

// importar servicio



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];
  title: string;

  constructor(private tareaServicio: TareasService) {
    this.tareaServicio.getTarea().subscribe(tareas => {
      console.log(tareas);
      this.tareas = tareas;
    });
   }

  ngOnInit() {
  }

  addTarea(event) {
    event.preventDefault();
    // console.log(this.title);
    const newTarea: Tarea = {
      title: this.title,
      isDone: false
    };
    this.tareaServicio.addTarea(newTarea).subscribe(tarea => {
      this.tareas.push(tarea);
      this.title = ' ';
    });
  }

  deleteTarea(id) {
    // Mensaje de confirmacion: devuelve un boleano. En caso de ser true, realizara el borrado de la tarea
    // Se muestra como un mensaje de alert()
    const response = confirm('¿Esta seguro?');
    if (response) {
      const tareas = this.tareas;
      console.log(id);
      this.tareaServicio.deleteTarea(id).subscribe(data => {
      console.log(data);
      if (data.n === 1) {
        // Lo que hacemos aqui es lo siguiente:
        // Recorremos la lista de tareas uno a uno y si el indice i es igual al id eliminado
        // lo remueve del array.
        // Con splice(i, 1); elimina un item de la tabla
        // Resumen. Cuando un dato se elimina del array, se muestra en la interfaz (desaparece de la lista)
        for ( let i = 0; i < tareas.length; i++) {
          if (tareas[i]._id === id) {
            tareas.splice(i, 1);
           }
          }
        }
      });
    }
    return;
  }

  updateTarea(tarea: Tarea) {
    // console.log(tarea);
    const newTarea = {
      _id: tarea._id,
      title: tarea.title,
      isDone: !tarea.isDone
    };
    this.tareaServicio.updateTarea(newTarea).subscribe(res => {
      tarea.isDone = !tarea.isDone;
      console.log(res);
    });


  }
}
