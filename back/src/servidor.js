import express from "express";
import cors from "cors";
import morgan from "morgan";

const servidor=express();
servidor.use (cors());
servidor.use (morgan('dev'));
servidor.use(express.json());

servidor.get('/',(solicitud,respuesta)=>{
    respuesta.status( 404).send("no se encontro la pagina")
});



export default servidor;