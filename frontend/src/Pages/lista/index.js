import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { FiMapPin } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Lista(){
    const [entregas, setEntregas] = useState([]);

  

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://app-cad.herokuapp.com/entregas');
          const data = await response.json();
          setEntregas(data);
          console.log(data);
          
          }
        fetchData();
      }, []);

        

    
    
    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
              
                <Link className="button" to="/">Nova entrega</Link>
              
            </header>
            <h1>Entregas Cadastradas</h1>

            <ul>
                {entregas.map( entregas => {
                    return(
                        <li key={entregas.id}>
                        <strong>Nome:</strong>
                        <p>{entregas.cliente}</p>
    
                        <strong>Data:</strong>
                        <p>{entregas.dataEntrega}</p>

                        <strong>Endereço de Partida:</strong>
                        <p>{entregas.rua_partida} {entregas.numero_partida} - {entregas.complemento_partida}, {entregas.bairro_partida}, {entregas.cidade_partida} - {entregas.uf_partida}</p>

                          <strong>Endereço de destino:</strong>
                        <p>{entregas.rua_destino} {entregas.numero_destino} - {entregas.complemento_destino}, {entregas.bairro_destino}, {entregas.cidade_destino} - {entregas.uf_destino}</p>

                        <a target="_blank" href={`https://www.google.com/maps/dir/${entregas.rua_partida},${entregas.numero_partida}-${entregas.bairro_partida},${entregas.cidade_partida}-${entregas.uf_partida}/${entregas.rua_destino},${entregas.numero_destino}-${entregas.bairro_destino},${entregas.cidade_destino}-${entregas.uf_destino}/`} >
                        <FiMapPin size={30} color="0808b3" />
                        </a>
                                                    
                        </li>
                        
                    )}
                )}
                          
            </ul>

        </div>

    )
}