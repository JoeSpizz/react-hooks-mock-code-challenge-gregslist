import React, {useState} from "react";

function ListingCard({entry, handleDelete}) {
  const [favStatus, setFavStatus]=useState(false)
  function handleFavorite(){
    setFavStatus(!favStatus)
  }
console.log(entry)
  function prepareDelete(){
    handleDelete(entry.id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={entry.image} alt={entry.description} />
      </div>
      <div className="details">
        {favStatus ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{entry.description}</strong>
        <span> · {entry.location}</span>
        <button className="emoji-button delete" id={entry.id} onClick={prepareDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
