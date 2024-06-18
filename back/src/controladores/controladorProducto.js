import multer from 'multer';
import ModeloProducto from "../modelos/modeloProducto.js";

const ControladorProductos = {
  crearProducto: async (solicitud, respuesta) => {
    try {
      const almacenamiento = multer.diskStorage({
        destination: 'imagenes',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const carga = multer({ storage: almacenamiento }).single('imagen');
      carga(solicitud, respuesta, async (error) => {
        if (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al subir imagen gorra',
            datos: null,
          });
        } else {
          const nuevaProductos = new ModeloProducto({
            modelo: solicitud.body.modelo,
            marca: solicitud.body.marca,
            material: solicitud.body.material,
            precio: solicitud.body.precio,
            color: solicitud.body.color,
            disponibilidad: solicitud.body.disponibilidad,
            fechaIngreso: solicitud.body.fechaIngreso,
            imagen: {
              data: solicitud.file.filename,
              contentType: 'image/png',
            },
          });
          const ProductosCreada = await nuevaProductos.save();
          if (ProductosCreada._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'Productos creada',
              datos: ProductosCreada._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al crear Productos',
        datos: error,
      });
    }
  },
  leerProducto: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Producto leído',
        datos: null,
      });
    
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer Producto',
        datos: error,
      });
    }
  },
  leerProductos: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Productos leídos',
        datos: null,
      });
     
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer todas los Productos',
        datos: error,
      });
    }
  },
  actualizarProducto: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Productos actualizados',
        datos: null,
      });
  
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al actualizar Productos',
        datos: error,
      });
    }
  },
  eliminarProducto: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Productos eliminado',
        datos: null,
      });
     
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al eliminar Productos',
        datos: error,
      });
    }
  },
};

  
  export default ControladorProductos;