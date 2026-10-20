# Preguntas de cierre - EC2 F2 A7
1. ## ¿Qué diferencia existe entre una variable local y el estado de React?

Una variable local se vuelve a inicializar cuando el componente se ejecuta de nuevo y, por sí sola, no provoca una actualización de la interfaz. El estado de React se conserva entre renderizados; al actualizarlo con su setter, React vuelve a renderizar el componente para reflejar el nuevo valor.

2. ## ¿Qué valores devuelve useState?

Devuelve un arreglo con dos valores: el valor actual del estado y una función para actualizarlo. Por convención se desestructura así: `const [valor, setValor] = useState(valorInicial)`.

3. ## ¿Por qué useState se declara en el nivel superior del componente?

Los Hooks deben llamarse en el nivel superior del componente, no dentro de condiciones, ciclos o funciones anidadas. Así React los encuentra siempre en el mismo orden en cada renderizado y puede asociar correctamente cada estado.

4. ## ¿Qué significa que un campo sea controlado?

Significa que React mantiene su valor en el estado y lo muestra mediante la prop `value`. El evento `onChange` actualiza ese estado; por ejemplo, en `TaskForm`, el título del input se controla con `title` y `setTitle`.

5. ## ¿Por qué handleSubmit utiliza preventDefault?

Evita el comportamiento predeterminado del navegador al enviar un formulario, que normalmente recarga o navega la página. De ese modo, React procesa el envío, valida el título y actualiza el estado sin perder la vista actual.

6. ## ¿Cómo comunica TaskForm una nueva tarea a App?

`App` pasa `handleAddTask` a `TaskForm` mediante la prop `onAddTask`. Cuando el formulario es válido, `TaskForm` llama a esa función y le entrega el título limpio; `App` crea la tarea y actualiza la colección.

7. ## ¿Por qué App funciona como fuente de verdad?

Porque mantiene la colección principal de tareas en el estado `tasks`. Desde ahí coordina las operaciones y pasa los datos o funciones necesarias a los componentes hijos, evitando copias independientes que pudieran quedar desactualizadas.

8. ## ¿Cómo se implementa Create sin utilizar push?

Se crea una nueva tarea y se actualiza el estado con un arreglo nuevo: `[newTask, ...currentTasks]`. El operador spread agrega la tarea sin mutar el arreglo anterior; `push`, en cambio, modificaría ese mismo arreglo.

9. ## ¿Cómo permite map actualizar una sola tarea?

`map` recorre la colección y devuelve un arreglo nuevo. Se compara el `id` de cada tarea: las que no coinciden se conservan, y para la que coincide se devuelve una copia con los campos modificados. Así se actualiza solo esa tarea sin mutar el estado original.

10. ## ¿Cómo utiliza filter la operación Delete?

`filter` crea un arreglo nuevo con las tareas que cumplen una condición. Para eliminar por `id`, se conservan las tareas cuyo `id` es distinto del seleccionado: `currentTasks.filter((task) => task.id !== id)`.

11. ## ¿Por qué se emplea una función actualizadora en setTasks?

Se usa la forma `setTasks((currentTasks) => ...)` para calcular el siguiente estado a partir del valor más reciente que mantiene React. Esto evita basarse accidentalmente en una captura antigua de `tasks`, especialmente cuando hay varias actualizaciones próximas.

12. ## ¿Qué información conserva TaskItem como estado local?

Conserva información temporal propia de la interacción de edición: `isEditing` indica si el formulario de edición está abierto, `draftTitle` guarda el título provisional y `error` contiene el mensaje de validación. La tarea definitiva sigue siendo propiedad del estado de `App`.

13. ## ¿Por qué los cambios desaparecen al recargar la página?

Porque se esta usando todo en formato local, o mas bien se esta usando la pagina de forma estatica, al momento de recargar la pagina vuelve al estado inicial.

14. ## ¿Qué dificultad encontraste y cómo la resolviste?

Lo complicado de enteder la comunicacion y los cambios de estamos de los components.