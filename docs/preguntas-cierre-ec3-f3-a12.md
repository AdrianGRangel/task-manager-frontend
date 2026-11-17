# Preguntas de cierre EC3 F3 A12
### 1. ¿Qué diferencia existe entre prueba automatizada, humo y aceptación?

Una prueba automatizada ejecuta comprobaciones repetibles sobre partes del sistema; por ejemplo, las pruebas del cliente verifican el envío de encabezados o el comportamiento de las guardas. Una prueba de humo es una revisión breve del despliegue para confirmar que los componentes esenciales responden, como la aplicación, la API y la conexión con Atlas. La aceptación valida que los flujos reales cumplen los requisitos del usuario, por ejemplo, registrarse, iniciar sesión y gestionar tareas con los permisos esperados.

### 2. ¿Por qué Fetch simulado no demuestra que Atlas funciona?

Al simular `fetch`, la prueba controla la respuesta y no realiza una petición de red. Comprueba el comportamiento del cliente frente a esa respuesta, pero no verifica la disponibilidad de la API, sus credenciales, la conexión del Backend con MongoDB Atlas ni las operaciones sobre datos reales. Para eso hay que probar el Backend desplegado y sus indicadores de salud, y realizar una prueba de extremo a extremo.

### 3. ¿Qué comprueba una guarda y qué seguridad continúa en el Backend?

Una guarda de ruta del Frontend decide qué interfaz mostrar según el estado de sesión; por ejemplo, redirige a una persona anónima desde una ruta protegida. No es una barrera de seguridad: el usuario puede modificar el cliente o llamar directamente a la API. El Backend debe validar el token en cada operación y autorizar el rol y el acceso al recurso, además de validar los datos recibidos.

### 4. ¿Por qué `VITE_API_URL` es pública y `JWT_SECRET` no?

`VITE_API_URL` solo indica al cliente a qué dirección pública de API conectarse. Las variables `VITE_*` se incorporan al JavaScript que recibe el navegador, así que cualquier visitante puede inspeccionarlas. `JWT_SECRET`, en cambio, firma o verifica tokens y debe permanecer únicamente en el entorno privado del Backend; publicarlo permitiría falsificar credenciales.

### 5. ¿Por qué cambiar `VITE_API_URL` exige otro build?

Vite sustituye `import.meta.env.VITE_API_URL` durante la compilación y deja el valor dentro de los archivos JavaScript generados. Cambiar una variable en el servicio de alojamiento no modifica los archivos ya compilados: hay que volver a construir la aplicación con el valor nuevo y desplegar ese resultado.

### 6. ¿Qué función cumple la reescritura hacia `index.html`?

La reescritura `/*` hacia `/index.html` hace que el servidor entregue la aplicación SPA también cuando se abre directamente una ruta como `/tasks/123` o se recarga allí. Después, React Router interpreta la URL. Sin el fallback, el servidor estático podría responder 404 al no encontrar un archivo físico para esa ruta.

### 7. ¿Qué diferencia existe entre build, deploy y release?

El *build* compila y empaqueta el código en archivos listos para servir, normalmente en `dist`. El *deploy* publica esos archivos en un entorno y los hace accesibles desde una URL. El *release* es la entrega identificada de una versión —por ejemplo, `v1.0.0`— con su commit, cambios y evidencias; puede coincidir con un despliegue, pero no son conceptos equivalentes.

### 8. ¿Por qué `CORS_ORIGIN` debe ser exacto?

El Backend compara el origen del navegador, formado por esquema, host y puerto, con el origen permitido. Un valor exacto como `https://frontend.example.com` evita permitir otros sitios por error; `http` y `https`, subdominios y puertos distintos son orígenes diferentes. CORS limita qué páginas pueden leer respuestas desde el navegador, pero no sustituye la autenticación ni la autorización.

### 9. ¿Qué diferencia existe entre 401 y 403?

`401 Unauthorized` indica que la petición no tiene credenciales válidas o que el token no es válido. `403 Forbidden` indica que la identidad fue reconocida, pero no tiene permiso para realizar esa operación. En esta aplicación, un usuario autenticado sin rol admin debe recibir `403` al intentar eliminar si esa acción está reservada a admin.

### 10. ¿Por qué ocultar Eliminar no sustituye la autorización?

Ocultar el botón mejora la interfaz, pero no impide que alguien construya manualmente una petición `DELETE` con una herramienta o desde la consola del navegador. La API debe comprobar el rol y los permisos en cada petición y rechazar la operación si no está autorizada; el control visual solo acompaña esa protección.

### 11. ¿Cómo demuestras que `v1.0.0` corresponde al deploy?

Compruebo que la etiqueta `v1.0.0` apunta al mismo hash de commit que el despliegue reporta como publicado. Registro ese hash, la etiqueta, la URL y la fecha en las evidencias; luego verifico el despliegue con la prueba de humo y los casos de aceptación. La lista de liberación define ese criterio, pero los campos de evidencias deben completarse con los datos reales: no basta con que exista la etiqueta.

### 12. ¿Qué mejorarías para un sistema sensible?

Empezaría con un análisis de amenazas y una revisión independiente de seguridad. Añadiría MFA, permisos de mínimo privilegio, validación estricta en el servidor, límites de intentos, auditoría y alertas, copias de seguridad probadas, gestión y rotación de secretos, actualizaciones de dependencias y pruebas de seguridad. También revisaría la gestión de sesión: el almacenamiento actual en `sessionStorage` es didáctico; para un sistema sensible evaluaría cookies `HttpOnly`, `Secure` y `SameSite` junto con las defensas CSRF adecuadas. Ninguna medida reemplaza las demás: deben probarse en conjunto.