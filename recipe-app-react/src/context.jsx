import { createContext, useContext, useState, useEffect } from "react";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f480a90cc7msh78e5d2ced0755ecp1e73dajsn61316da9cddc',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const text = "Hi mom!!";

const AppContext = createContext();
const AppProvider = ({children})=>{

    const [meals, SetMeals] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [searchTerm, SetSearchTerm] = useState('');
    const [favoriteMeals, SetFavoriteMeals] = useState( JSON.parse(localStorage.getItem('favoritesMeals')) || []);
    const [mealToShow, SetMealToShow] = useState();


    const fetchMeals = async (mealName) =>{
        SetLoading(true);
        const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${mealName}`;
        try{
            const response = await fetch(url, options);
            const data = await response.json();
            if(loading) console.log("Loading...");
            SetMeals(data.results);
        }
        catch(err){
            console.log(err.response);
        }
        SetLoading(false);
        console.log(meals);
    }

    const fetchRandomMeal = async () => {
        SetLoading(true);
        const random = Math.round(Math.random()*100);
        const randomUrl = `https://tasty.p.rapidapi.com/recipes/list?from=${random}&size=1`;
        try{
            const response = await fetch(randomUrl, options);
            const data = await response.json();
            if(loading) console.log("Loading...");
            SetMeals(data.results);
        }
        catch(err){
            console.log(err.response);
        }
        SetLoading(false);
        console.log(meals);
    }

    function addToFavoriteMeals(id){
        const favorite = meals.find(meal => meal.id == id);
        const updateFavoriteMeals = [...favoriteMeals, favorite]
        SetFavoriteMeals(updateFavoriteMeals);
        console.log(favoriteMeals);
    }
    function removeFromFavoriteMeals(id){
        const updateFavoriteMeals = favoriteMeals.filter(meal => meal.id != id);
        SetFavoriteMeals(updateFavoriteMeals);
        console.log(favoriteMeals);
    }

    function showMealRecipe(id){
       SetMealToShow(meals.find(meal => meal.id == id));
       const modal = document.getElementById("show-recipe");
       modal.showModal();
    }


    useEffect(() =>{
        if(searchTerm){
            console.log('fetch meal by search term');
            console.log(searchTerm);
            fetchMeals(searchTerm);
        }
    },[searchTerm]);

    useEffect(() =>{
        console.log('fetch random meal');
       fetchRandomMeal();
    },[]);

    useEffect(() =>{
        localStorage.setItem('favoritesMeals', JSON.stringify(favoriteMeals))
    }, [favoriteMeals]);

   

    return (
        <AppContext.Provider value={{meals, loading, favoriteMeals, mealToShow, SetSearchTerm, addToFavoriteMeals, removeFromFavoriteMeals, showMealRecipe}}>
            {children}
        </AppContext.Provider>
    )
    
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}