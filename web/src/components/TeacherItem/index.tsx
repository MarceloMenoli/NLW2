import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://pbs.twimg.com/profile_images/1244655270153904128/1ElhgfNX_400x400.jpg" alt="Marcelo Campos Menoli"/>
            <div>
              <strong>Marcelo Menoli</strong>
              <span>Agricultura</span>
            </div>
          </header>
          <p>
            Agricultor de nascença, cultivador de experiências.
            <br/><br/>
            Desenvolvedor de diversos medos de plantio e colheitas, para as mais diversas sementes. Conhecedor da arte da AGRICULTURA.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 59,90</strong>
            </p>
            <button type='button'>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>      
  );
}

export default TeacherItem