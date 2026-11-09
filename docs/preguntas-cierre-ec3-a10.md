# Preguntas de cierre - EC3 F2 A10

1. # ¿Qué diferencia existe entre una falla de red y una respuesta HTTP 404?
Una falla de red ocurre cuando el navegador no consigue obtener una respuesta de la API, por ejemplo, porque el servidor no está disponible o no hay conexión. En cambio, un 404 es una respuesta HTTP válida: el servidor respondió, pero no encontró el recurso solicitado. En el servicio, el error de red se identifica con estado `0` y código `NETWORK_ERROR`; el 404 conserva su estado HTTP.

2. # ¿Por qué debe comprobarse response.ok después de fetch?
Porque `fetch` normalmente se resuelve aunque el servidor responda con un estado de error, como 404 o 500. `response.ok` permite distinguir las respuestas exitosas (estados 200–299) de las respuestas HTTP fallidas y convertir estas últimas en errores que la aplicación pueda manejar.

3. # ¿Qué responsabilidad tiene http.service.ts?
Centraliza el transporte HTTP: construye y ejecuta las solicitudes con la URL base, prepara encabezados, interpreta respuestas JSON y el estado 204, y normaliza los errores HTTP, de red y de respuesta inválida en `HttpError`. También permite propagar la cancelación de solicitudes.

4. # ¿Qué responsabilidad tiene task.api.service.ts?
Expone las operaciones propias de tareas —listar, consultar por id, crear, actualizar y eliminar— y construye sus rutas y parámetros de consulta. Delega la ejecución HTTP a `http.service.ts`, manteniendo los detalles de los endpoints fuera de los componentes.

5. # ¿Por qué VITE_API_URL no debe contener credenciales?
Las variables `VITE_*` se incorporan al código enviado al navegador y pueden ser inspeccionadas por cualquier usuario. Por eso `VITE_API_URL` debe indicar la dirección de la API, no contener contraseñas, tokens ni otros secretos; la autenticación debe gestionarse mediante un mecanismo seguro del lado servidor o tokens apropiados para el cliente.

6. # ¿Qué problema resuelve el proxy de Vite durante el desarrollo?
Permite que el servidor de desarrollo reenvíe solicitudes de una ruta local, como `/api`, al backend (en esta configuración, `http://localhost:3000`). Así se facilita la comunicación entre frontend y backend durante el desarrollo y se pueden evitar problemas de origen cruzado (CORS) en ese entorno.

7. # ¿Por qué el proxy no sustituye la configuración de producción?
El proxy configurado en `vite.config.ts` pertenece al servidor de desarrollo de Vite; no es un servidor proxy que se despliegue automáticamente con la aplicación compilada. En producción hay que configurar una URL de API adecuada y, si se necesita, un proxy inverso o reglas de enrutamiento en la infraestructura de despliegue.

8. # ¿Qué función cumple AbortController?
Permite cancelar una solicitud `fetch` en curso mediante un `AbortSignal`. Se usa, por ejemplo, al cambiar de página o desmontar un componente, para no continuar una consulta que ya no se necesita ni intentar actualizar la interfaz con un resultado obsoleto.

9. # ¿Por qué la ruta de detalle consulta la tarea por id?
El identificador de la URL señala qué recurso individual debe mostrar la página. Consultar `/tasks/:id` obtiene ese registro directamente desde la API, mantiene el detalle actualizado aunque no se haya cargado antes la lista y permite mostrar un estado de “no encontrada” cuando la API responde 404.

10. # ¿Por qué el formulario se limpia únicamente después de un POST satisfactorio?
Porque solo una creación confirmada por la API significa que la tarea se guardó. Si la solicitud falla, conservar el texto permite corregir o reintentar sin perder lo escrito; `TaskForm` limpia el campo únicamente cuando `onAddTask` informa que la operación terminó correctamente.

11. # ¿Qué ventaja ofrece separar la consulta remota de los componentes visuales?
Separa la lógica de comunicación con la API de la presentación: los componentes se enfocan en mostrar datos y responder a interacciones, mientras los servicios encapsulan rutas, parámetros y solicitudes. Esto facilita reutilizar y probar cada parte, y cambiar la API con menos impacto en la interfaz.

12. # ¿Qué cambio fue más difícil y cómo comprobaste que funcionaba?
