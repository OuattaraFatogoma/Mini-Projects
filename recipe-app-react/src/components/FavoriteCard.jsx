function FavoriteCard() {
    return (
      <li className="favorite">
         <img src="./favicon.jpg" alt="${recipe.name}" />
        <h4>Meal</h4>
        <i class="fa-solid fa-xmark"></i>
      </li>
    )
  }
  
  export default FavoriteCard