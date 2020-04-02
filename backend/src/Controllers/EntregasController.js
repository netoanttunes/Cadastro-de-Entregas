const Entrega = require("../models/Entrega")

module.exports ={

    async index(request, response) {
        const entregas = await Entrega.find()

        return response.json(entregas)
     },


    async store(request, response) {
        const {
            cliente,
            dataEntrega,
            rua_partida,
            numero_partida,
            complemento_partida,
            bairro_partida,
            cidade_partida,
            uf_partida,
            rua_destino,
            numero_destino,
            complemento_destino,
            bairro_destino,
            cidade_destino,
            uf_destino} = request.body;
    
        const entrega = await Entrega.create({
            cliente,
            dataEntrega,
            rua_partida,
            numero_partida,
            complemento_partida,
            bairro_partida,
            cidade_partida,
            uf_partida,
            rua_destino,
            numero_destino,
            complemento_destino,
            bairro_destino,
            cidade_destino,
            uf_destino
            })
    
                
        return response.json(entrega);
    }
};