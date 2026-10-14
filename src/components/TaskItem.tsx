import type { Task } from "../models/task.interface";
interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onEditTask: (id: string, title: string) => void;
  onDeleteTask: (id: string) => void;
}
function formatTaskDate(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
  }).format(date);
}
export function TaskItem({
  task,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}: TaskItemProps) {
  const { title, status, updatedAt } = task;
  const statusLabel = status === "completed" ? "Completada" : "Pendiente";
  function handleEdit() {
    const newTitle = window.prompt("Editar tarea", title)?.trim();
    if (newTitle) {
      onEditTask(task.id, newTitle);
    }
  }

  function handleDelete() {
    if (window.confirm(`¿Eliminar la tarea «${title}»?`)) {
      onDeleteTask(task.id);
    }
  }

  return (
    <article className={`task-item task-item--${status}`} role="listitem">
      <div className="task-item__content">
        <h3 className="task-item__title">{title}</h3>
        <span className={`status-badge status-badge--${status}`}>
          {statusLabel}
        </span>
        <p className="task-item__date">
          Actualizada:{" "}
          <time dateTime={updatedAt}>{formatTaskDate(updatedAt)}</time>
        </p>
      </div>
      <div
        className="task-item__actions"
        role="group"
        aria-label={`Acciones para ${title}`}
      >
        <button type="button" onClick={() => onToggleStatus(task.id)}>
          Cambiar estado
        </button>
        <button type="button" onClick={handleEdit}>
          Editar
        </button>
        <button type="button" className="button-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </article>
  );
}
