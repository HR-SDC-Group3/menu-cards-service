import React from 'react';
import style from '../styles/Navigation.css';

const Navigation = (props) => {
  let cardButtons = props.cardLinks.map((cardLink) => {
    return (
      <button className={style.button} id={cardLink.position} 
      onClick={(e) => { props.switchCard(e.target.id) }}>
        {cardLink.name}
      </button>
    )
  });

  return (
    <div id="menu-navigation">
      {cardButtons}
    </div>
  )
}

export default Navigation;