import React from 'react';

const Navigation = (props) => {
  let cardButtons = props.cardLinks.map((cardLink) => {
    return (
      <button className="menu-button-link" id={cardLink.position} 
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