import React from 'react';

const AddOns = (props) => {
  let addOns = props.addOns.map((addOn) => {
    return (
      <div className="menu-add-on">
        <div className="menu-add-on-name">
          {addOn.name}
        </div>
        <div className="menu-add-on-price">
          +{addOn.price}
        </div>
      </div>
    )
  });

  return (
    <div className="menu-addOns"> 
      {addOns}
    </div>
  )
}

export default AddOns;