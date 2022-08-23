import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [searched, setSearched]= useState("")
 function searcher (data){
    setSearched(data)
 }
  return (
    <div className="app">
      <Header searcher={searcher}/>
      <ListingsContainer  searched={searched}/>
    </div>
  );
}

export default App;
