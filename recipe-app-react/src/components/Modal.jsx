import { useGlobalContext } from "../context";

function Modal() {
  const {mealToShow} = useGlobalContext();
  if(mealToShow==undefined) return(<></>)
  console.log(mealToShow);

  const {thumbnail_url, name, original_video_url, sections,description} = mealToShow;

  function closeModal(event){
    const modal = event.target.parentNode;
    modal.close();
  }

  
  return (
    <>
      <i class="fa-solid fa-xmark" onClick={closeModal}></i>
        <img src={thumbnail_url} alt={name} />
        <h2>{name}: <a href={original_video_url} target="_blank">Watch how to cook</a></h2>
        
        <p>{description}</p>
        <ul class="ingedients-container">
          {
            sections[0].components.map((ingredient,i) => <li key={i}>{ingredient.raw_text}</li>)
          }
        </ul> 
    </>
  )
}

export default Modal