import React from 'react';
import AddOns from './AddOns.jsx';

const Items = (props) => {
  let items = props.items.map((item) => {
    return (
      <div className="menu-item">
        <span className="menu-item-name">
          {item.name}
        </span>
        <span className="menu-item-price">
          {item.price}
        </span>
        <div className="menu-item-description">
          {item.description}
        </div>
        {item.addOns.length > 0 ? (<AddOns addOns={item.addOns} />) : (null)}
      </div>
    )
  });

  return (
    <div className="menu-items">
      {items}
    </div>
  )
}

export default Items;