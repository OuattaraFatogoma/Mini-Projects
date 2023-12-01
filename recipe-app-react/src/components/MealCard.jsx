import { useGlobalContext } from "../context";
import { Modal } from "."

function MealCard({thumbnail_url, name, id}) {
  const {addToFavoriteMeals, removeFromFavoriteMeals, showMealRecipe} = useGlobalContext();

  function handleHeartClick(event) {
    const element = event.target;
    if(element.classList.contains("fa-solid")){
     console.log(element.parentNode.parentNode.id);
     removeFromFavoriteMeals(element.parentNode.parentNode.id);
     element.classList.remove("fa-solid");
    }else{
      console.log(element.parentNode.parentNode.id);
      addToFavoriteMeals(element.parentNode.parentNode.id);
      element.classList.add("fa-solid");
    }
  }


  return (
    <div className="recipe" key={id} id={id}>
       <h3>Random Recipe</h3>
        <img src={thumbnail_url} alt={name}  onClick={()=> showMealRecipe(id)} />
        <span>
            <p>{name}</p>
            <i className="fa-regular fa-heart" onClick={handleHeartClick}></i>
        </span>
    </div>
  )
}

export default MealCard