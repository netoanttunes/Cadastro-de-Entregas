import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

import './styles.css';
import logoImg from '../../assets/logo.svg';



export default function Mapa(){
    const [entregas, setEntregas] = useState([]);
    
    
  

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://app-cad.herokuapp.com/entregas');
          const data = await response.json();
          setEntregas(data);
            
          }
        fetchData();
      }, []);

        

    
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
              
                <Link className="button" to="/">Nova entrega</Link>
              
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {entregas.map( entregas => {
                    return(
                        <li key={entregas.id}>
                        <strong>Nome:</strong>
                        <p>{entregas.cliente}</p>
    
                        <strong>Data:</strong>
                        <p>{entregas.dataEntrega}</p>

                        
                            
                        </li>
                        
                    )}
                )}
                          
            </ul>

        </div>

    )
}