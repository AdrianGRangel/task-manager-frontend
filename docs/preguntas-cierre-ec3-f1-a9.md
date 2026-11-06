# Preguntas de cierre - EC3 F1 A9
1. # ¿Qué es una aplicación de página única?
Es una aplicación web que carga una página inicial y actualiza su contenido al navegar, sin volver a cargar el documento completo en cada cambio de vista. En esta aplicación, React Router muestra distintas páginas según la URL.
2. # ¿Qué responsabilidad tiene BrowserRouter?
`BrowserRouter` conecta la interfaz con la URL del navegador usando el historial del navegador. Permite navegar entre rutas y responder a los cambios de dirección sin recargar la página.
3. # ¿Cuál es la diferencia entre Routes y Route?
`Routes` contiene y busca entre las rutas declaradas para elegir la que coincide con la URL actual. Cada `Route` define una ruta concreta y el elemento que se debe mostrar cuando coincide.
4. # ¿Qué es una ruta índice?
Es la ruta predeterminada que se muestra en la dirección de su ruta padre cuando no hay una ruta hija más específica. En esta aplicación, la ruta índice muestra `HomePage` en `/` dentro de `AppLayout`.
5. # ¿Qué beneficio ofrece un layout?
Permite compartir una estructura común —como el encabezado, la navegación y el pie de página— entre varias páginas, evitando repetir ese código y manteniendo una presentación consistente.
6. # ¿Qué función cumple Outlet?
`Outlet` marca el lugar del layout donde React Router renderiza el elemento de la ruta hija que coincide con la URL.
7. # ¿Qué diferencia existe entre Link y NavLink?
Ambos permiten navegar internamente sin recargar la página. `NavLink` además permite saber si su ruta está activa, por ejemplo, para destacar el enlace actual; `Link` ofrece navegación sin ese estado activo integrado.
8. # ¿Por qué no se utilizan enlaces a para navegar internamente?
Porque un enlace HTML `<a>` normalmente solicita de nuevo la página y puede provocar una recarga completa. `Link` y `NavLink` realizan la navegación mediante React Router, conservando la experiencia de una aplicación de página única.
9. # ¿Qué representa :taskId?
Es un segmento dinámico de la ruta, que representa el identificador de una tarea. Por ejemplo, en `/tasks/abc123`, el valor de `taskId` sería `abc123`.
10. # ¿Cómo se recupera un parámetro dinámico?
Se recupera dentro del componente de la ruta mediante el hook `useParams()`. En `TaskDetailPage`, se obtiene `taskId` y se usa para encontrar la tarea correspondiente.
11. # ¿Cuándo debe utilizarse useNavigate?
Se utiliza cuando la navegación debe ocurrir como resultado de una acción o lógica del programa, en lugar de un clic en un enlace. Aquí se usa para volver a `/tasks` después de eliminar correctamente una tarea.
12. # ¿Qué función cumple la ruta *?
Es una ruta comodín que coincide con las direcciones que no coinciden con otras rutas declaradas. En esta aplicación muestra la página de “no encontrada”.
13. # ¿Por qué el estado continúa administrado por App?
Porque `App` mantiene la colección única de tareas y coordina sus operaciones. Las páginas reciben los datos y las funciones necesarias mediante props, de modo que todas consultan y actualizan la misma fuente de verdad.
14. # ¿Por qué localStorage permanece en esta actividad?
Porque permite conservar las tareas en el navegador al recargar la página, sin necesitar un servidor ni una base de datos. `App` las carga al iniciar y guarda los cambios cuando se actualiza la colección.
15. # ¿Qué dificultad encontraste y cómo la resolviste?
Tenia un problema en la linea 25 de la clase TaskDetailPage.tsx, en task.id, me decia que 'task' is possibly 'undefined'. Buscando soluciones en internet me sugerian hacer diversas cosas que no convencian tanto, preguntando a la IA sugirio primero recibir el parametro y Capturé task.id en taskIdentifier para después de comprobar que task existe, y el callback usa ese valor. Así TypeScript no lo considera posiblemente undefined.