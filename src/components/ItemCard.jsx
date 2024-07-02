import React from "react";

const ItemCard = ({info}) => {
    const {img,name} = info
  return (
    <div>
      <img className="rounded-lg"
        src={img}
        alt={name}
      />
      <h1 className="px-3 py-4 text-xl">{name}</h1>
    </div>
  );
};

export default ItemCard;
