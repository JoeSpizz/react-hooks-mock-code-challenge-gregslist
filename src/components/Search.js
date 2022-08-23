import React,{useState} from "react";

function Search({searcher}) {
  const [search, setSearch] = useState("")


  function handleSearch(e){
   
    setSearch(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    searcher(e.target.firstChild.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
