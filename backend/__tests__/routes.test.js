const request = require('supertest');

const app = require('../src/app');


describe('Routes', () =>{
    afterAll(() => done())

    it('Should get delivery list', async () => {
        const response = await request(app)
            .get("/entregas")
    
    expect(response.status).toBe(200);
    });

    it('Should delivery record', async () => {
        const data = {
            cliente: "teste",
            dataEntrega:"teste",
            rua_partida:"teste",
            numero_partida:"01",
            complemento_partida:"teste",
            bairro_partida:"teste",
            cidade_partida:"teste",
            uf_partida:"teste",
            rua_destino:"teste",
            numero_destino:"02",
            complemento_destino:"teste",
            bairro_destino:"teste",
            cidade_destino:"teste",
            uf_destino:"teste"
        };

        const response = await request(app)
            .post("/entregas", data)
    
    expect(response.status).toBe(200);
    });
    

})