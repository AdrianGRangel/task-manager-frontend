# Preguntas de cierre EC2 F3 A8
1. ## ¿Por qué las reglas de validación se colocaron en una utilidad?
Se colocaron en `task-validation.ts` para concentrar las reglas en un solo lugar y reutilizarlas tanto al crear como al editar tareas. Así se evita duplicar lógica y se mantiene el mismo criterio de validación en ambos formularios.

2. ## ¿Qué significa el retorno string | null de validateTaskTitle?
El tipo indica que la función devuelve un `string` con el mensaje cuando el título no es válido, o `null` cuando pasa la validación. En este caso verifica que, después de quitar espacios en los extremos, tenga entre 3 y 120 caracteres.

3. ## ¿Qué función cumplen aria-invalid, aria-describedby y role alert?
`aria-invalid` comunica a las tecnologías de asistencia que el campo tiene un valor inválido. `aria-describedby` relaciona el campo con el texto de ayuda o error que lo explica. `role="alert"` anuncia el mensaje de error cuando aparece, ayudando a que se perciba sin depender solo de señales visuales.

4. ## ¿Por qué query, filter y sortBy son estados controlados?
Se guardan en el estado de `App` y se pasan como valores a los controles de búsqueda, filtro y ordenamiento. Sus eventos actualizan ese estado, por lo que React mantiene los controles sincronizados con los criterios usados para mostrar las tareas.

5. ## ¿Por qué visibleTasks no debe almacenarse como estado independiente?
Porque se obtiene directamente de `tasks`, `query`, `filter` y `sortBy`. Calcularlo durante el render evita duplicar datos y tener que sincronizar otro estado cada vez que cambia cualquiera de esos valores; así se reducen inconsistencias.

6. ## ¿Cómo se normaliza una búsqueda?
En `getVisibleTasks`, se eliminan los espacios al principio y al final con `trim()` y se convierte la consulta a minúsculas con `toLocaleLowerCase("es-MX")`. Los títulos también se comparan en minúsculas, haciendo la búsqueda parcial y sin distinguir mayúsculas de minúsculas.

7. ## ¿Por qué se crea una copia antes de utilizar sort?
Porque `sort()` modifica el arreglo sobre el que se ejecuta. `getVisibleTasks` ordena `[...filteredTasks]`, una copia, para no mutar los datos derivados ni el arreglo original de tareas.

8. ## ¿Qué responsabilidad tiene task-query.service.ts?
Su responsabilidad es calcular la lista visible a partir de las tareas y los criterios recibidos: busca por título, filtra por estado y ordena por fecha de actualización, fecha de creación o título. Mantiene esa lógica separada de la presentación de los componentes.

9. ## ¿Por qué el resultado de JSON.parse se trata como unknown?
Los datos guardados pueden estar malformados o no tener la estructura esperada, y `JSON.parse` no garantiza por sí mismo que sean tareas válidas. Usar `unknown` obliga a comprobar el tipo y la estructura antes de utilizar el valor, en vez de asumir que es seguro.

10. ## ¿Qué comprueba la función isTask?
Comprueba que el valor sea un objeto y que tenga `id` y `title` de tipo texto, un `status` igual a `pending` o `completed`, y fechas `createdAt` y `updatedAt` de texto que puedan interpretarse como fechas válidas. Solo entonces lo reconoce como una tarea.

11. ## ¿Qué ventaja ofrece la inicialización diferida de useState?
Al pasar `() => loadTasks(initialTasks)` a `useState`, la carga desde `localStorage` se realiza para inicializar el estado, no en cada renderizado posterior. Esto evita repetir innecesariamente la lectura y validación de los datos guardados.

12. ## ¿Por qué localStorage se sincroniza mediante useEffect?
Guardar en `localStorage` es un efecto secundario, por lo que se hace en `useEffect` y no durante el render. El efecto depende de `tasks` y guarda la colección cuando esta cambia; la interfaz sigue derivándose del estado de React.

13. ## ¿Por qué TaskSummary recibe tasks y TaskList recibe visibleTasks?
`TaskSummary` recibe todas las tareas para mostrar totales generales que no cambien al buscar o filtrar. `TaskList` recibe `visibleTasks` para presentar solo los resultados que corresponden a la consulta, el filtro y el orden seleccionados.

14. ## ¿Qué información se pierde y cuál permanece al recargar?
Las tareas y sus datos (`id`, título, estado y fechas) permanecen en el mismo navegador porque se guardan en `localStorage` y se cargan al iniciar. Se reinician los estados de la interfaz que no se guardan: búsqueda, filtro, orden, modo de edición, borrador del título y mensajes de error. Si no hay datos guardados válidos, se cargan las tareas iniciales.

15. ## ¿Qué dificultad encontraste y cómo la resolviste?
Sin problemas