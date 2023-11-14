const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f480a90cc7msh78e5d2ced0755ecp1e73dajsn61316da9cddc',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
const recipesEl =document.getElementById('recipe-container');
const searchRecipeEl =document.getElementById('search');
const form = document.getElementById('form');
const favoriteContainer = document.getElementById('favorite-container');
const modulEl = document.getElementById("show-recipe");
updateFavorite();
getRandomMeal();

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const recipeToSearch = searchRecipeEl.value;
    if(recipeToSearch){
        recipesEl.innerHTML = "";
        const result  = await getMeals(recipeToSearch)
        result.forEach(recipe => {
            addMeal(recipe);
        });
    }
});


////////////// functions //////////////////

async function getRandomMeal(){
    const random = Math.round(Math.random()*100);
    const randomUrl = `https://tasty.p.rapidapi.com/recipes/list?from=${random}&size=1`;
    const response = await fetch(randomUrl, options);
	const data = await response.json();
    const result = data.results[0];
    console.log(result);
    addMeal(result,true);
}

async function getMeals(name){
    searchRecipeEl.value = "";
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${name}`;
    const response = await fetch(url, options);
    const data = await response.json();
    const result = data.results;
    console.log(result);
    return result;
}

function addMeal(recipe,random=false) {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        ${random ? `<h3>Random Recipe</h3>` : ""}
        <img
        src="${recipe.thumbnail_url}"
        alt="${recipe.name}"
        />
        <span>
            <p>${recipe.name}</p>
            <i class="fa-regular fa-heart"></i>
        </span>
    `;
    recipesEl.appendChild(recipeDiv);

    const addToFavoriteBtn = recipeDiv.querySelector(".fa-heart")
    addToFavoriteBtn.addEventListener("click", () => {
        if(addToFavoriteBtn.classList.contains("fa-solid")){
            removeMealLS(recipe);
            addToFavoriteBtn.classList.remove("fa-solid");
        }else{
            addToFavoriteBtn.classList.add("fa-solid");
            console.log(recipe);
            addMealLS(recipe);
        }
    });

    const img = recipeDiv.querySelector("img");
    img.addEventListener("click", ()=>{
        show_recipe(recipe);
    });
}

function addMealLS(recipe){
    localStorage.setItem(recipe.name, JSON.stringify(recipe));
    updateFavorite()
}

function removeMealLS(recipe){
    localStorage.removeItem(recipe.name);
    updateFavorite()
}

function updateFavorite(){
    const keys = Object.keys(localStorage);
    if(keys.length > 0){
        favoriteContainer.innerHTML = "";
        keys.forEach(key => {addFavorite(key)});
    }
    
} 

function addFavorite(name){
    const recipe = JSON.parse(localStorage.getItem(name));
    const favoriteRecipe = document.createElement("li");
    favoriteRecipe.classList.add("favorite");
    favoriteRecipe.innerHTML = `
        <img
        src="${recipe.thumbnail_url}"
        alt="${recipe.name}"
        />
        <h4>${recipe.name}</h4>
        <i class="fa-solid fa-xmark"></i>
    `;
    favoriteContainer.appendChild(favoriteRecipe);

    const removeFavoriteBtn = favoriteRecipe.querySelector(".fa-xmark");
    removeFavoriteBtn.addEventListener("click", ()=>{
        removeMealLS(recipe);
    });

    const img = favoriteRecipe.querySelector("img");
    img.addEventListener("click", ()=>{
        show_recipe(recipe);
    });
}


function show_recipe(recipe){
    console.log(recipe.sections[0]);
    modulEl.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        <img src="${recipe.thumbnail_url}" alt="${recipe.name}">
        <a href="${recipe.original_video_url}" target="_blank"><h2>${recipe.name}</h2></a>
        <p>${recipe.description}</p>
        <ul class="ingedients-container">
        </ul>
    `;
    const ingedients_container = modulEl.querySelector(".ingedients-container");
    ingredients = recipe.sections[0].components.forEach(ingredient => {
        const ingedientText =  document.createElement("li");
        ingedientText.innerText = ingredient.raw_text;
        ingedients_container.appendChild(ingedientText);
    })

    modulEl.showModal();

    const closeBtn = modulEl.querySelector(".fa-xmark");
    closeBtn.addEventListener("click",() => {
        modulEl.close();
    });
    
}


