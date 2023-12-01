import './App.css';
import { Header, Favorites, Meals, MealCard, Modal } from './components';


function App() {
  return (
    <main className="App">
      <Header/>
      <Favorites/>
      <Meals/>
      <dialog id="show-recipe">
        <Modal/>
      </dialog>
    </main>
  );
}

export default App;
