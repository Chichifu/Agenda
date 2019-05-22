import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/add/operator/map';

import {Tarea} from '../Tarea';

// Creamos el servicio Tarea con los metodos para CRUD

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  domain = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Interpolaciones con JavaScript:
  // Las interpolaciones con js se realizan de la siguiente manera
  // `${this.LoQueSea}`
  // ejemplo:
  // Antes de nada debemos crear el parametro, en este caso usaremos el parametro del ejercicio
  // dominio= 'http://localhost:300'
  // y para realizar la interpolacion (es decir, concatenaciones)
  // `${this.dominio}/api/tareas` = this.domio+'/api/tareas'

  getTarea() {
    // Retorna un array de tareas
    return this.http.get<Tarea[]>
    // Concatena el dominio con la ruta donde se encuentran las tareas, eso debe dar una respuesta (res)
    (`${this.domain}/api/tareas`).map(res => res);
  }

  addTarea(newTarea: Tarea) {
    // newTarea: Tarea sirve para validar que el parametro es de tipo Tarea
    // Lo que hacemos ahora, mediante .post es agregar una nueva tarea y devuelve una propiedad de Tarea -> <Tarea>
    return this.http.post<Tarea>(`${this.domain}/api/tareas`, newTarea).map(res => res);
  }

  deleteTarea(id) {
    // debemos pasar primero un "id" de la tarea que queremos eliminar
    // para borrar la tarea, utilizamos .delete y devuelve una propiedad de Tarea -> <Tarea>

    return this.http.delete<Tarea>(`${this.domain}/api/tareas/${id}`).map(res => res);
  }

  updateTarea(newTarea: Tarea) {
    // Para la actualizacion de una tarea, utilizamos el metodo .put
    // Hay que fijarse que la actualizacion require de dos parametros:
    // 1º La tarea que queremos actualizar: Se pasa como parametro (newTarea)
    // 2º El id de la tarea: en la interpolacion ${newTarea._id}
    return this.http.put(`${this.domain}/api/tareas/${newTarea._id}`, newTarea).map(res => res);
  }

}
