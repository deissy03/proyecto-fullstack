# PROYECTO -FullStack front y back 
 ### cree un APIS de productos "bolsos" y una de usuarios para la creacion de la parte front y el back.
 El usuario podrá ingresar(si esta en la base de datos) o registrase desde un formulario y quedar almacenado en la base de datos para poder visualizar la tienda en la página shop.
## Pasos de elaboración:
## BACKEND
* * Después de crear el repositorio en github y sincronzarlo en el local iniciamos documentación.
* Instalar node.js  comandos node -v  se utiliza para ver versión  de node  y  npm -v para la versión de npm.(node package manager)
* 1. creamos el proyecto de node con el código: 
* npm init --yes 
 Este comando se utiliza para inializar un proyecto de Node.js con la configuración predeterminada, es decir, sin que te pregunte nada y aceptando todas las opciones por defecto. Observaremos que nos creo un archivo package.json el cual contiene la información  sobre las dependencias del proyecto y otros metadatos.
 * 2. Instalamos express con el comando: npm i express donde  se crea el package-lock.json que mantiene 
 el registro de las versiones específicas de las dependencias instaladas y el node.modules que es donde se almacena todas las dependencias del proyecto y bibliotecas de terceros.
*  3. Se crea una carpeta src para almacenar el código fuente de la aplicación, se encarga de organizar de manera más fácil y entendible el código 
* 4. Se crea un archivo index.js que es el punto de entrada principal de la aplicación.
* 5. A la altura del package.json creamos el archivo .env que se utiliza para almacenar variables de entorno específicas de la aplicación, como claves de API contraseñas, enlaces u otros datos sensibles, en este archivo cree una nueva varibale y
coloque el enlace de la base de datos que nos proporciona mongobd atlas, estos dados no seran visibles en el repositorio.
* 6. Instalamos la dependencia nodemon con el código: npm i nodemon -D que es la dependencia de desarrollo
* 7. Modificamos los campos en el archivo package.json : "main": "./src/index.js" que define el punto de entrada principal del modulo,"start": "node src/index.js" define el comando para iniciar la aplicación en un entorno de producción,
    "dev": "nodemon src/index.js" inicia la plicación en un entorno de desarrollo utilizando nodemon para reiniciar automaticamente, "type": "module" habilita la funcionalidad de modulos y permite utilizar características como import y export.
* 8. Usamos el comando npm i para instalar todas las dependencias listadas en el archivo package.json y npm start para iniciar la aplicación según lo definido en el campo start.
* 9. Instalamos mongoose con el comando npm i mongoose, que es una biblioteca de modelado de objetos para mongoBD en node.js,  instalamos dotenv de la siguiente forma npm i dotenv que nos permite cargar variables de entorno desde un archivo.  
.env a process.env facilitando la gestión de la configuración de la aplicacción, instalamos morgan con el comando npm i morgan que es un middleware para registar las solicitudes HTTP, lo que proporciona información útil para el desarrollo y depuración, quedando todas estas dependencias habilitadas en el archivo package.json. 
* 10. Se crea el archivo servidor.js que contiene la lógica necesaria para inicializar el servidor aqui importamos express, morgan y exportamos servidor. Probamos en postman la ruta del servidor
* 11. Creamos una carpeta a la que llame routes y un archivo de rutaProductos donde creamos las rutas de producto usando los verbos HTTP  get, post, put, delete y confirmamos en postman.
     * Post: se usa para enviar datos a un servidor, para crear un recurso nuevo.
     * Get: se utiliza para leer información de un recurso específico.
     * Put: se utiliza para actualizar un recurso existente en el servidor.
     * Delete: se emplea para eliminar un recurso específico en el servidor.
* 12. Para correr el proyecto lo hacemos con el comando : npm run dev para detenerlo lo hacemos con control c.
* 13. Creamos la carpeta model y un archivo modeloProducto donde creamos  todo el esquema de  nuestras colecciones para que despues sean enviadas a mongo y para poder construir un nuevo esquema.
* 14. Creamos la carpeta controller y el archivo controladorProductos que se encarga de controlar lo que sucede con los verbos HTTP.
* 15. En postman se envia los datos con cada uno de los verbos HTTP y probamos que el servidor de nuestra base de datos este recibiendo la solicitudes.
* 16. Luego de estar conectados a la base de datos con mongoBD de Atlas comprobamos que lleguen y se observen los datos. De esta manera usamos el CRUD.

 ## FRONTENT 
 * Creamos nuevo proyecto de angular 
 * Instalar dependencias:
 -npm i boostrap@5.3.3
 -npm i bootstrap-icons
 -npm i cors
 -npm i jsonwebtoken
 -npm i ngx-toastr
 -npm i multer
 -npm i fs-extra
 En angular.json debemos anexar:
  "styles": [
              "node_modules/bootstrap/scss/bootstrap.scss",
              "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
              "node_modules/ngx-toastr/toastr.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ],
 Para protejer las rutas creamos creamos:
 -ng generate guard en mi caso lo llame activate -ng generate guard guards/activate
 esto crea dos carpetas automaticamente que son:
 activate.guard.spect.ts
 activate.guard.ts
 * Reiniciar componentep rincipal
 * Craer componente base (público, inicio de sesión y privado).
 * Craer enrutamiento base.
 * Craer estilos globales (framework, fuentes, colores).
 * Notificaciones al usuario,
 * Favicon personalizado.
 * En cada componente ( comprobar/ agregar/ editar/ actualizar)
 * Implementar servicios.
 * Actualizar información.

## link de Descarga:

_ https://nodejs.org/

_ https://www.postman.com/

_ https://www.mongodb.com/atlas

## Link de interes:
_ https://www.npmjs.com/
_  https://ngx-toastr.vercel.app

# AUTORA: @Deisy Esquivia Perez 