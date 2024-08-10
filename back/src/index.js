import "dotenv/config";
import "./conexion.js";
import servidor  from "./servidor.js";

servidor.listen(3000, ()=>{
    console.log("El servidor se esta escuchando en el link http://3.135.232.36:3000")
});