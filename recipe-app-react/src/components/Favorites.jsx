import { FavoriteCard } from "."

function Favorites() {
  return (
    <section id="favorites">
    <h2>Favorites</h2>
    <ul id="favorite-container">
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
    </ul>
  </section>
  )
}

export default Favorites