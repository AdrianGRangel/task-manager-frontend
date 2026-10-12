1. ¿Qué función cumple la interfaz Task?
# En TypeScript, la interfaz Task actúa como un "contrato" o molde que define la estructura de datos obligatoria para una tarea (por ejemplo, especificando qué propiedades debe tener, como id, title, completed o status, y sus respectivos tipos de datos). Su función principal es permitir el tipado estático, facilitando el autocompletado en el editor y previniendo errores en tiempo de desarrollo.

2. ¿Qué diferencia existe entre Task y TaskStatus?
# Task: Representa el objeto completo que contiene toda la información de una tarea individual (su identificación, título, descripción, estado, etc.).
# TaskStatus: Suele ser un tipo auxiliar, unión de strings (ej. 'pending' | 'in-progress' | 'completed') o un enum que define específicamente los estados posibles que puede asumir una tarea, limitando los valores válidos para esa propiedad en particular.

3. ¿Qué significa declarar un arreglo como Task[]?
# Significa que la variable o propiedad es una colección (lista) de elementos, y que cada uno de esos elementos dentro del arreglo debe cumplir estrictamente con la estructura definida por la interfaz o tipo Task.

4. ¿Qué hace el método map?
# Es un método nativo de los arreglos en JavaScript que recorre cada elemento del arreglo original, aplica una función transformadora sobre él y devuelve un nuevo arreglo con los resultados transformados, manteniendo intacto el arreglo original (respetando el principio de inmutabilidad).

5. ¿Qué resultado produce map dentro de TaskList?
# Dentro de TaskList, el método map transforma un arreglo de datos puros (Task[]) en un arreglo de componentes de interfaz de usuario de React (por ejemplo, <TaskItem/>). Esto permite renderizar dinámicamente la lista completa de tareas en pantalla a partir de los datos.

6. ¿Para qué utiliza React la propiedad key?
# React utiliza la propiedad key para identificar de manera única cada elemento dentro de una lista renderizada. Esto le permite al algoritmo de reconciliación (Virtual DOM) optimizar los cambios: cuando los elementos se actualizan, se agregan o se eliminan, React sabe exactamente qué componente cambió sin necesidad de volver a renderizar toda la lista desde cero.

7. ¿Por qué se utiliza task.id y no el índice?
# Usar el índice del arreglo (index) como key puede causar fallas graves de rendimiento y errores de estado si la lista cambia de orden, se filtran elementos o se eliminan filas intermedias (React podría asociar el estado visual incorrecto al elemento equivocado). Un identificador único (task.id) es persistente y garantiza que React identifique correctamente a cada tarea sin importar su posición.

8. ¿Cómo se envía una tarea de TaskList a TaskItem?
# Se envía a través de props (propiedades). El componente TaskList itera sobre el arreglo y pasa los datos de cada tarea individual al componente hijo TaskItem mediante un atributo (por ejemplo: <TaskItem task="{singleTask}"/>).

9. ¿Cómo se comunican App, TaskSummary y TaskList?
# Se comunican siguiendo el flujo de datos unidireccional de React (de arriba hacia abajo):

# App suele mantener el estado principal (la lista de tareas).

# App le pasa las tareas a TaskList para renderizar la lista de elementos.

# App también le pasa los datos necesarios (o el arreglo completo) a TaskSummary para que pueda calcular y mostrar estadísticas (como el total de tareas o cuántas están completadas).

10. ¿Qué es el renderizado condicional?
# Es la capacidad de React para decidir qué elementos o componentes mostrar en pantalla basándose en ciertas condiciones lógicas (utilizando operadores como &&, operadores ternarios ? :, o estructuras if/else). Un ejemplo clásico es mostrar un mensaje de "No hay tareas pendientes" cuando el arreglo está vacío, o la lista de tareas en caso contrario.

11. ¿Por qué el resumen se calcula a partir de la colección?
# Porque garantiza la consistencia y una única fuente de verdad (single source of truth). Si el resumen (ej. total de tareas completadas) se calcula dinámicamente derivándolo del arreglo de tareas actual, se evita el riesgo de desincronizar los contadores; si las tareas cambian, el resumen se actualiza de manera automática y precisa.

12. ¿Qué dificultad encontraste durante la refactorización y cómo la resolviste?
# Una dificultad común durante la refactorización suele ser mantener la inmutabilidad del estado al actualizar o eliminar elementos, o asegurar que TypeScript no arroje errores de tipos al mover props entre componentes. Se resuelve aplicando métodos inmutables como .filter() o .map() en lugar de mutar el arreglo directamente, y asegurándose de tipar correctamente cada contrato de props en los componentes hijos.