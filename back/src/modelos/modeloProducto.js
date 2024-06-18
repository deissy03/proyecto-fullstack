import  {Schema, model} from "mongoose";

const esquemaProducto = new Schema({

    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    material:{ type: String, required: true },
    precio: { type: Number, required: true },
    color:{ type: String, required: true },
    disponibilidad:{ type: Boolean, required: true },
    fechaIngreso:{ type: Date, required: true },
    imagen:{date: Buffer, contentType:String},
},
 { versionKey: false, timestamps: true }
  );
      export default model("producto",esquemaProducto);