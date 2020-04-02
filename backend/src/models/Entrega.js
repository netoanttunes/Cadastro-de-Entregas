const mongoose = require ('mongoose')

const entregaSchema = new mongoose.Schema({
    cliente: String,
    dataEntrega: String,
    rua_partida: String,
    numero_partida: Number,
    complemento_partida: String,
    bairro_partida: String,
    cidade_partida: String,
    uf_partida: String,
    rua_destino: String,
    numero_destino: Number,
    complemento_destino: String,
    bairro_destino: String,
    cidade_destino: String,
    uf_destino: String

});

module.exports = mongoose.model('Entrega', entregaSchema);