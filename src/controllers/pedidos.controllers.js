
export const listaPedidos = (req, res) => {
    res.status(200).json({
        mensaje: 'peticion get',
    });
};

export const crearPedido = (req,res) =>{
          res.status(200).json({
              mensaje: 'aqui creamos el pedido',
          });
}