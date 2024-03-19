import React from 'react'
import { Link } from 'react-router-dom';
import './HomeMe.css'

const About = () => {
  return (
    <div id='about'>
        <div id='containerAbout'>
          <h1>COMUNIDADE FOCADA EM FORTES CONEXÕES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad aut, consequatur eum omnis, sequi expedita iure, illum nam optio excepturi sed culpa. Tenetur aliquam voluptatum esse qui porro?</p>
          <Link to='https://chat.whatsapp.com/CAEQfJv1JqEAMGHegKt7xr'>
              <button>QUERO PARTICIPAR</button>
          </Link>
        </div>
    </div>
  )
}

export default About