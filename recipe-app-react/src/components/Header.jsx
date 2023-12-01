import { useState } from "react";
import { useGlobalContext } from "../context";


function Header() {
  const {SetSearchTerm} = useGlobalContext();
  const [text, SetText] = useState("");

  function handleSearch(event){
    SetText(event.target.value);
  };
  function handleSearchSubmition(event){
    event.preventDefault();
    if(text) SetSearchTerm(text);
  }
    return (
      <header>
        <h1>Recipe App</h1>
        <form id="form" onSubmit={handleSearchSubmition}>
          <input
            type="text"
            id="search"
            className="search"
            name="search_for_recipe"
            placeholder="Search Recipe"
            autoComplete="off"
            value={text}
            onChange={handleSearch}
          />
        </form>
      </header>
    )
  }
  
  export default Header;