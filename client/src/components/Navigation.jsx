import React from 'react';
// is inserting css into html head
import style from '../styles/Navigation.css';

const Navigation = ({ cardLinks, switchCard, activeCardPosition }) => {
  let cardButtons = cardLinks.map((cardLink) => {
    return (
      <button className={`menu-button-link ${cardLink.position == activeCardPosition ? "menu-button-active" : ""}`} 
      id={cardLink.position} onClick={(e) => { switchCard(e.target.id) }}>
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