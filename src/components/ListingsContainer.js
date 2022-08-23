import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({searched}) {
  const [listings, setListings] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setListings(data))
  }, [])
 
  function handleDelete(id){
    console.log("ready to deletefrom container"+ id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(data=>finalDelete(id))
  }
  function finalDelete(id){
    const updatedListing = listings.filter((listing) => listing.id !== id);
  setListings(updatedListing);
  }

const filteredListingsArray = listings.filter(listing=>{
  return listing.description.toLowerCase().includes(searched.toLowerCase())
})


console.log(filteredListingsArray)

  return (
    <main>
      <ul className="cards">
        {filteredListingsArray.map(listing=> <ListingCard entry={listing} key={listing.id} handleDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
