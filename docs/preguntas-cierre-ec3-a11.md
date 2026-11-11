# Preguntas de cierre EC3 F3 A11

1. **¿Qué diferencia existe entre autenticación y autorización?**

	La autenticación comprueba quién es la persona, por ejemplo, validando sus credenciales al iniciar sesión. La autorización determina qué acciones puede realizar esa persona según sus permisos o rol, como permitir que solo `admin` elimine tareas.

2. **¿Qué información guarda `sessionStorage` y qué información no debe guardar?**

	En este proyecto guarda el token de acceso bajo la clave `task-manager.access-token`. No se deben guardar contraseñas ni información sensible innecesaria. El token también es sensible: `sessionStorage` limita su persistencia a la pestaña, pero no lo protege del código JavaScript malicioso.

3. **¿Por qué se consulta `/api/auth/me` al recargar?**

	Al recargar, React pierde el estado que tenía en memoria. Si encuentra un token guardado, consulta `/api/auth/me` para que la API valide ese token y devuelva los datos actuales del usuario. Así la aplicación restaura la sesión sin confiar únicamente en que exista un valor guardado en el navegador.

4. **¿Por qué el Frontend no debe confiar en decodificar un JWT sin verificarlo?**

	Decodificar solo permite leer el contenido; no demuestra que el token sea auténtico ni que no haya sido alterado o expirado. La verificación de firma, vigencia y permisos debe hacerla el Backend, que es quien decide si acepta cada solicitud.

5. **¿Qué responsabilidad tiene `AuthProvider`?**

	Mantiene y comparte el estado de autenticación de la aplicación: usuario, token y estado de sesión. También coordina el inicio de sesión, registro, validación inicial del token, reintento y cierre de sesión, para que los componentes no dupliquen esa lógica.

6. **¿Qué beneficio ofrece `useAuth`?**

	Permite que cualquier componente obtenga los datos y acciones de autenticación desde el contexto, sin pasar props manualmente por muchos niveles. Además, informa con un error claro si se usa fuera de `AuthProvider`.

7. **¿Qué representa el estado `checking`?**

	Indica que hay un token guardado y la aplicación está esperando que el Backend confirme si la sesión sigue siendo válida. Mientras tanto, se evita mostrar la página protegida o redirigir prematuramente al inicio de sesión.

8. **¿Qué diferencia existe entre 401 y 403?**

	`401 Unauthorized` significa que la solicitud no tiene una autenticación válida (por ejemplo, el token falta, expiró o no es válido). `403 Forbidden` significa que la identidad fue reconocida, pero no tiene permiso para realizar esa acción.

9. **¿Por qué `ProtectedRoute` no sustituye la seguridad del Backend?**

	`ProtectedRoute` controla la navegación y la experiencia visual en el navegador; no puede impedir que alguien invoque directamente la API. El Backend debe autenticar y autorizar cada solicitud protegida, incluso si la ruta está oculta en el Frontend.

10. **¿Por qué ocultar Eliminar a `user` no constituye autorización?**

	Ocultar el botón solo evita que aparezca en la interfaz. Una persona aún podría enviar una solicitud `DELETE` directamente a la API. Por eso el Backend debe comprobar el rol y rechazar la operación si no tiene permiso; la comprobación del Frontend es solo una ayuda de interfaz.

11. **¿Por qué un cambio de rol exige iniciar sesión de nuevo?**

	En esta implementación, el usuario y su rol se mantienen en el estado de la sesión, y se reciben al iniciar sesión o al consultar `/api/auth/me`; no se actualizan automáticamente si un administrador cambia el rol en el Backend. Volver a iniciar sesión —o volver a validar la sesión— permite obtener los datos actualizados. En cualquier caso, el Backend debe aplicar siempre el rol vigente al autorizar cada operación.

12. **¿Qué ocurre realmente al seleccionar Cerrar sesión?**

	La aplicación elimina el token de `sessionStorage`, limpia el usuario y el token del estado de React, cambia el estado a anónimo y navega a `/login`. El Frontend no llama a un endpoint de cierre de sesión ni invalida por sí mismo el JWT en el servidor; el Backend todavía debe validar la vigencia del token en cada solicitud.

13. **¿Qué riesgo conserva `sessionStorage` ante XSS?**

	Si se ejecuta JavaScript malicioso en el sitio, puede leer el token de `sessionStorage` y robarlo para intentar usarlo mientras siga siendo válido. Por eso también hacen falta medidas contra XSS, como escapar y validar correctamente los datos, además de una política de seguridad de contenido adecuada.

14. **¿Por qué las tareas todavía no pertenecen a un usuario específico?**

	Las solicitudes de tareas envían el token para identificar una sesión, pero el modelo de tarea del Frontend no incluye un identificador de propietario y las consultas no filtran las tareas por usuario. Por eso la autenticación protege el acceso a la API, pero no establece todavía una relación de propiedad por usuario; esa asociación y su filtrado deben implementarse en el Backend.

15. **¿Qué dificultad encontraste al integrar la sesión y cómo la resolviste?**

    Para la parte de `useTaskList.ts` tuve problemas al momento de hacer la llamada a los tokens, solamente era cuestion de moverlo hasta el final y preparar retornos vacios para que no viera nada que fallara al momento, fue una solucion de google gemini