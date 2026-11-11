# Administrador de tareas - Frontend
Aplicación desarrollada durante el elemento de competencia 2
de Diseño Frontend con Frameworks.
## Tecnologías
- React
- TypeScript
- Vite
- PNPM
- CSS
## Alcance actual
La versión actual contiene la estructura visual del Administrador
de tareas y tres tareas de demostración. Los formularios, filtros
y acciones todavía no tienen comportamiento.
## Instalación
```bash
pnpm install
```
## Ejecución
```bash
pnpm dev
```
## Compilación
```bash
pnpm build
```
## Componentes principales
- AppHeader
- TaskForm
- TaskFilters
- TaskSummary
- TaskList
- TaskItem

# Administrador de tareas - Frontend
Aplicación desarrollada con React, TypeScript, Vite y PNPM
para administrar tareas.
## Alcance actual
La aplicación permite visualizar una colección local de tareas
mediante componentes React.
Actualmente incluye:
- Modelo de tarea con TypeScript.
- Cinco tareas locales.
- Renderizado mediante map.
- Uso de claves estables.
- Estados pendiente y completada.
- Resumen calculado.
- Mensaje para una colección vacía.
- Diseño adaptable.
Los formularios, eventos y operaciones CRUD se implementarán
en actividades posteriores.
## Tecnologías
- React
- TypeScript
- Vite
- PNPM
- CSS
- Git y GitHub
## Instalación
pnpm install
## Ejecución
pnpm dev
## Validación
pnpm lint
pnpm build
## Estructura principal
- components: componentes visuales.
- data: colección local de tareas.
- models: tipos e interfaces.
- styles: estilos globales.
- docs: preguntas y documentación.
## Modelo Task
Cada tarea contiene id, title, status, createdAt y updatedAt.

# Administrador de tareas - Frontend
Aplicación desarrollada con React, TypeScript, Vite y PNPM.
## Alcance actual
La aplicación administra una colección local de tareas mediante
estado de React. Actualmente permite:
- Registrar tareas.
- Consultar la colección.
- Completar y reabrir tareas.
- Editar títulos.
- Cancelar una edición.
- Eliminar con confirmación.
- Calcular el resumen automáticamente.
- Mostrar una colección vacía.
Los cambios permanecen en memoria y se reinician al recargar.
## Operaciones CRUD
- Create: registro mediante el formulario.
- Read: renderizado de la colección.
- Update: cambio de estado y edición.
- Delete: eliminación confirmada.
## Validación
pnpm lint
pnpm build

# Administrador de tareas Frontend
Aplicación desarrollada con React, TypeScript, Vite y PNPM.
## Funciones actuales
- Operaciones CRUD de tareas.
- Validación al registrar y editar.
- Búsqueda por título.
- Filtro por estado.
- Ordenamiento de resultados.
- Persistencia mediante localStorage.
- Interfaz adaptable.
## Ejecución
pnpm install
pnpm dev
## Validación técnica
pnpm lint
pnpm build
## Alcance
Esta versión utiliza almacenamiento local del navegador.
La conexión con la API REST se realizará en el EC3.

# Administrador de tareas Frontend
Aplicación desarrollada con React, TypeScript,
Vite, React Router y PNPM.
## Funciones actuales
- Navegación SPA.
- Página de inicio.
- Administración de tareas.
- Detalle mediante una ruta dinámica.
- Página 404.
- Operaciones CRUD.
- Validación de títulos.
- Búsqueda, filtros y ordenamiento.
- Persistencia mediante localStorage.
- Interfaz adaptable.
## Rutas
- `/`
- `/tasks`
- `/tasks/:taskId`
- `*`
## Ejecución
```bash
pnpm install
pnpm dev
```
## Validación técnica
```bash
pnpm lint
pnpm build
```
## Alcance
Esta versión utiliza almacenamiento local.
La API REST se integrará en la Actividad 10.
## Integración con la API REST
La aplicación consume la API de tareas mediante Fetch API.
### Requisitos
- Backend disponible en http://localhost:3000
- Frontend ejecutado mediante Vite
- MongoDB Atlas conectado desde el Backend
### Configuración local
1. Copiar `.env.example` como `.env.local`.
2. Confirmar `VITE_API_URL=/api`.
3. Iniciar el Backend con `pnpm dev`.
4. Iniciar el Frontend con `pnpm dev`.
### Funciones remotas
- Listado paginado.
- Búsqueda, filtro y ordenamiento.
- Creación, edición y cambio de estado.
- Eliminación con confirmación.
- Consulta de detalle por identificador.
- Estados de carga, vacío, error y reintento.
### Compilación
```bash
pnpm build

# Administrador de tareas Frontend
SPA desarrollada con React, TypeScript, Vite,
React Router y Fetch API.
## Funciones actuales
- Registro e inicio de sesión.
- Restauración de identidad con /api/auth/me.
- Rutas públicas y protegidas.
- CRUD remoto de tareas.
- Búsqueda, filtros, ordenamiento y paginación.
- Eliminación disponible para admin.
- Manejo de carga, vacío, error, 401 y 403.
## Rutas
- `/`
- `/login`
- `/register`
- `/tasks` protegida
- `/tasks/:taskId` protegida
## Variables
```env

VITE_API_URL=/api
```
## Ejecución
```bash
pnpm install
pnpm dev
```
La API debe ejecutarse en el puerto configurado por
el proxy de Vite.
## Seguridad didáctica
El access token se conserva en sessionStorage para
practicar restauración dentro de la pestaña. No se
almacenan contraseñas ni se imprimen tokens. La API
mantiene la autenticación y autorización reales.
## Validación
```bash
pnpm lint
pnpm build

# Evidencias EC3 F3 A11
## Entorno
- Rama:
- React:
- React Router:
- URL local del Frontend:
- URL local del Backend:
## Casos
| Caso | HTTP | Resultado | Evidencia |
|---|---:|---|---|
| Registro válido | 201 | | |
| Correo duplicado | 409 | | |
| Login inválido | 401 | | |
| Login válido | 200 | | |
| /auth/me | 200 | | |
| /tasks sin token | 401 | | |
| CRUD con user | 2xx | | |
| DELETE con user | 403 | | |
| DELETE con admin | 204 | | |
| Token alterado | 401 | | |
## Rutas y sesión
- Redirección a login:
- Recuperación de la ruta intentada:
- Restauración después de recargar:
- Cierre y botón Atrás:
## Calidad
- pnpm lint:
- pnpm build:
- Consola del navegador:
## Protección de datos
Confirmo que las evidencias no muestran contraseñas,
tokens completos, JWT_SECRET ni MONGODB_URI.