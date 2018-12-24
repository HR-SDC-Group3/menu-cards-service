import React from 'react';
import Items from './Items.jsx';

const CardDisplay = (props) => {
  let sections = props.card.sections.map((section) => {
    return (
      <div className="menu-section">
        <div className="menu-section-name">{section.name}</div>
        <div className="menu-section-description">{section.description}</div>
        <Items items={section.items} />
      </div>
    )
  })
  return (
    <div className="menu-card-display">
      {sections}
      <div className="menu-card-footnote">
        {props.card.footnote}
      </div>
    </div>
  )
}

export default CardDisplay;