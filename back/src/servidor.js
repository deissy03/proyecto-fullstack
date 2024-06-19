import path from "path";
import express from "express";  
import morgan from"morgan";
import cors from "cors";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";
import enrutadorProductos from "./rutas/rutaProductos.js";

const servidor = express(); 

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/productos',enrutadorProductos);
servidor.use('/usuarios',enrutadorUsuarios);
servidor.use('/inicio-sesion',enrutadorInicioSesion);
servidor.use('/imagenes', express.static(path.resolve(`imagnes`)));


servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
})

export default servidor;