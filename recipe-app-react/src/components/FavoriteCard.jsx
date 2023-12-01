import { useGlobalContext } from "../context";

function FavoriteCard({thumbnail_url, name, id}) {
    const {removeFromFavoriteMeals} = useGlobalContext();

    return (
      <li className="favorite" key={id} id={id}>
         <img src={thumbnail_url} alt={name} />
        <h4>{name}</h4>
        <i className="fa-solid fa-xmark" onClick={()=>removeFromFavoriteMeals(id)}></i>
      </li>
    )
  }
  
  export default FavoriteCard