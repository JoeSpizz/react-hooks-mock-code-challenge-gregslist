import React from "react";
import Search from "./Search";

function Header({searcher}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searcher={searcher}/>
    </header>
  );
}

export default Header;
