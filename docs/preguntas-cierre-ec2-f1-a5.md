# Preguntas de cierre - EC2 F1 A5
## 1. ¿Qué problema resuelve React al construir una interfaz?
React resuelve la complejidad de sincronizar manualmente los datos de la aplicación con la interfaz de usuario (el DOM). En lugar de manipular el DOM directamente con JavaScript tradicional (document.getElementById, appendChild, etc.), React introduce un DOM Virtual y un enfoque declarativo: tú describes cómo debe verse la pantalla según el estado actual de los datos, y React se encarga de actualizar solo las partes necesarias de forma eficiente.
## 2. ¿Qué es un componente?
Un componente es un bloque de construcción independiente, reutilizable y aislado que combina lógica, estructura y diseño para representar una parte específica de la interfaz de usuario (por ejemplo, un botón, una barra de navegación o una tarjeta de producto). En React, un componente es fundamentalmente una función de JavaScript/TypeScript que retorna interfaz (TSX/JSX).
## 3. ¿Por qué los componentes comienzan con mayúscula?
Comienzan con mayúscula (Header, Button, UserProfile) para que React y el compilador de JSX/TSX puedan diferenciar los elementos nativos de HTML de los componentes personalizados.

Si se escribe en minúscula (<button />), React lo interpreta como una etiqueta nativa de HTML.

Si se escribe con mayúscula inicial (<Button/>), React entiende que es un componente de React creado por ti o por una librería.
## 4. ¿Qué diferencia existe entre HTML y TSX?
HTML: Es un lenguaje de marcado estático que describe la estructura de un documento web tradicional.

TSX (TypeScript JSX): Es una extensión de sintaxis que permite escribir código similar a HTML directamente dentro de archivos TypeScript. A diferencia de HTML:

Permite incrustar expresiones y lógica de TypeScript/JavaScript entre llaves {}.

Es estrictamente tipado (valida errores de sintaxis y tipos en tiempo de compilación).

Utiliza nombres de atributos en convención camelCase (por ejemplo, onclick en HTML pasa a ser onClick en TSX, class pasa a ser className).
## 5. ¿Para qué se utiliza className?
className se utiliza en JSX/TSX para asignar clases de CSS a un elemento HTML. No se utiliza la palabra reservada class (como en HTML estándar) porque en JavaScript/TypeScript class es una palabra clave reservada para definir clases orientadas a objetos.
## 6. ¿Qué son las propiedades o props?
Las props (abreviatura de properties) son los argumentos de entrada que se le pasan a un componente para personalizar su comportamiento o su contenido. Son de solo lectura (inmutables) y permiten que los componentes sean dinámicos y reutilizables al recibir datos desde un componente padre.
## 7. ¿Cómo ayuda TypeScript a validar las propiedades?
TypeScript permite definir el "contrato" o la estructura de los datos que debe recibir un componente mediante interface o type. De este modo:

Detecta en tiempo de compilación si olvidaste pasar una propiedad obligatoria.

Valida que el tipo de dato enviado sea el correcto (por ejemplo, que no pases un string donde se espera un number).

Proporciona autocompletado en el editor de código (IntelliSense), reduciendo significativamente los errores de desarrollo.
## 8. ¿Cuál es la responsabilidad de App.tsx?
App.tsx actúa como el componente principal o raíz de la aplicación (o de un módulo principal). Su responsabilidad suele ser orquestar la estructura general de la pantalla, integrar los componentes secundarios (Header, Sidebar, Content), gestionar el estado global o principal de ese flujo y estructurar la disposición visual general de la interfaz.
## 9. ¿Por qué la interfaz se dividió en varios componentes?
Se divide en componentes por varias razones clave:

Mantenibilidad: Módulos de código más pequeños y enfocados en una sola responsabilidad son más fáciles de entender, probar y corregir.

Reutilización: Evita duplicar código UI y lógica en distintos lugares del proyecto.

Trabajo en equipo: Permite que varios desarrolladores trabajen en distintas partes de la interfaz simultáneamente sin generar conflictos.
## 10. ¿Por qué los botones todavía están deshabilitados?
Los botones estan deshabilitado porque en esta actividad 5, todavia no se utilizarán estado ni eventos.

# Segun investigacion:
Los botones suelen estar deshabilitados o no funcionales principalmente por dos razones:

Falta de gestión de estado o eventos: Tienen el atributo disabled={true} de forma fija o carecen de un manejador de eventos (onClick) que capture y procese la interacción del usuario.

Validación de formulario o datos no cumplida: Es habitual deshabilitar un botón de envío o acción hasta que se hayan completado ciertos campos obligatorios o se cumplan ciertas condiciones lógicas en la aplicación.
## 11. ¿Qué componente consideras más reutilizable y por qué?
El componente más reutilizable suele ser un componente atómico UI básico, como un Botón (Button) o un Campo de Entrada (Input).

¿Por qué?
Porque no contiene lógica de negocio específica de la aplicación; simplemente recibe props genéricas (como label, onClick, variant, disabled, type) y se limita a renderizar diseño y capturar interacciones. Esto permite usar el mismo componente de botón en un formulario de inicio de sesión, un carrito de compras, un modal o cualquier otra sección del sistema.
## 12. ¿Qué dificultad encontraste y cómo la resolviste?
Respecto a este trabajo ninguno, solamente volvi a leer el PDF si tenia una duda.