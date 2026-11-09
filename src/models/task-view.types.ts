import type { TaskStatus } from "./task.interface";
export type TaskFilter = "all" | TaskStatus;
export type TaskSort =
  | "updated-desc"
  | "updated-asc"
  | "title-asc"
  | "title-desc"
// Se agregaron las opciones de ordenamiento por fecha de creación
  | "created-desc"
  | "created-asc";
// Se agregó la interfaz TaskViewOptions para representar las opciones de visualización de tareas, 
// incluyendo la consulta de búsqueda, el filtro y el ordenamiento.
export interface TaskViewOptions {
  query: string;
  filter: TaskFilter;
  sortBy: TaskSort;
}
