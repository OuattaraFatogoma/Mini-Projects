import { useGlobalContext } from "../context";
import {MealCard} from "."

function Meals(){
  const {meals, loading} = useGlobalContext();

  if(loading) return(
                  <section id="recipe-container">
                    <img src="../../loading.gif" alt="loading image" width="200px" style={{margin:'auto'}}/>
                  </section>)

  if(meals.length<1) return(<section id="recipe-container"> <h2>No meal found</h2> </section>)
   
  return (
    <section id="recipe-container">
      {
      meals.map(meal =>{
        const {thumbnail_url, name, id} = meal;
        return <MealCard thumbnail_url={thumbnail_url} name={name} id={id} key={id}/>
      }
        
      )}
    </section>
  )
}

export default Meals