import React from 'react';
import AddOns from './AddOns.jsx';

const Items = (props) => {
  let items = props.items.map((item) => {
    return (
      <div className="menu-item">
        <div className="menu-item-name">
          {item.name}
        </div>
        <div className="menu-item-price">
          {item.price}
        </div>
        <p className="menu-item-description">
          {item.description}
        </p>
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