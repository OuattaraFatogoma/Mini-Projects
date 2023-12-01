import { useGlobalContext } from "../context";
import {MealCard} from "."

function Meals(){
  const text = useGlobalContext()
  return (
    <section id="recipe-container">
      <MealCard/>
    </section>
  )
}

export default Meals