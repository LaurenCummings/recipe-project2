import '../css/Home.css';
import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

function Home() {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [mealType, setMealType] = useState("all");
    const [cultureType, setCultureType] = useState("all");
    // used if user enters search term while meal type radio buttons are checked
    const [checkAllMeals, setCheckAllMeals] = useState(false);

    async function getRecipes() {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/recipes');
            const data = await res.json();
            if (data?.recipes) {
                setRecipeList(data.recipes);
                setLoading(false);    
            }
        } catch(e) {
            console.log(e);
            setLoading(false);
        }
    }

    async function handleSearch() {
        setCheckAllMeals(true);
        if(!searchTerm.trim()) {
            getRecipes();
        };
        if (loading) return;

        setLoading(true);
        try {
            const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`);
            const searchResults = await res.json();
            if (searchResults?.recipes) {
                setRecipeList(searchResults.recipes);
                setLoading(false);
            }
        } catch (e) {
                console.log(e);
                setLoading(false);
        }
    }

    function handleMealsChange(event) {
        setSearchTerm("");
        setMealType(event.target.value);
    }

    async function getRecipesByMeal() {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/recipes/meal-type/${mealType}`);
            const data = await res.json();
            if (data?.recipes) {
                setRecipeList(data.recipes);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    async function getTags() {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/tags`);
            const data = await res.json();
            console.log(data);
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRecipes();
        getTags();
    }, []);

    useEffect(() => {
        setCheckAllMeals(false);
        if (mealType === "all") {
            getRecipes();
        } else {
            getRecipesByMeal();
        }
    }, [mealType]);

    // console.log(recipeList);

    return (
        <div className="home">
            <div className="search">
                <input 
                    type="text"
                    placeholder="Search for recipes..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
                <div className="sidebar">
                    <fieldset>
                        <legend>Filter by Meal Type:</legend>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="all" 
                                checked={mealType === "all" || checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="breakfast" 
                                checked={mealType === "breakfast" && !checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="lunch" 
                                checked={mealType === "lunch" && !checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="lunch">Lunch</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="dinner" 
                                checked={mealType === "dinner" && !checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="dinner">Dinner</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="dessert" 
                                checked={mealType === "dessert" && !checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="dessert">Dessert</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="meal" 
                                value="snack" 
                                checked={mealType === "snack" && !checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="snack">Snack</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Filter by Culture:</legend>
                        <div>
                            <input 
                                type="radio" 
                                name="culture" 
                                value="all" 
                                checked={cultureType === "all" || checkAllMeals} 
                                onChange={handleMealsChange} 
                            />
                            <label htmlFor="all">All</label>
                        </div>
                    </fieldset>
                </div>

                {
                    loading ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        <div className="recipes">
                        {
                            recipeList.map((recipe) => {
                                return (
                                    <RecipeCard recipe={recipe} key={recipe.id} />
                                )
                            })
                        }
                    </div>    
                    )
                }                
            </div>

    )
}

export default Home;