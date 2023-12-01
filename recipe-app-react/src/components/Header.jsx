
function Header() {
    return (
      <header>
        <h1>Recipe App</h1>
        <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            name="search_for_recipe"
            placeholder="Search Recipe"
          />
        </form>
      </header>
    )
  }
  
  export default Header;