import '../css/Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'; 
import RecipeCard from '../components/RecipeCard';

function Home() {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [mealType, setMealType] = useState("all");
    const [cultureType, setCultureType] = useState("all");
    const [showFilters, setShowFilters] = useState(false);
    // used if user enters search term while radio buttons are checked
    const [checkAllMeals, setCheckAllMeals] = useState(false);
    const [checkAllCulture, setCheckAllCulture] = useState(false);

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
        setCheckAllCulture(true);
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
        setCheckAllCulture(true);
        setMealType(event.target.value);
    }

    function handleCultureChange(event) {
        setSearchTerm("");
        setCheckAllMeals(true);
        setCultureType(event.target.value);
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

    async function getRecipesByCulture() {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/recipes/tag/${cultureType}`);
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

    function handleShowFilters() {
        setShowFilters(!showFilters);
    }

    useEffect(() => {
        getRecipes();
    }, []);

    useEffect(() => {
        setCheckAllMeals(false);
        if (mealType === "all") {
            getRecipes();
        } else {
            getRecipesByMeal();
        }
    }, [mealType]);

    useEffect(() => {
        setCheckAllCulture(false);
        if (cultureType === "all") {
            getRecipes();
        } else {
            getRecipesByCulture();
        }
    }, [cultureType]);

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
            <div className="arrow-right">
                <FiArrowRightCircle onClick={handleShowFilters} />
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
                    <legend>Filter by Cuisine:</legend>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="all" 
                            checked={cultureType === "all" || checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="all">All</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="asian" 
                            checked={cultureType === "asian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="asian">Asian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="brazilian" 
                            checked={cultureType === "brazilian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="brazilian">Brazilian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="cuban" 
                            checked={cultureType === "cuban" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="cuban">Cuban</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="greek" 
                            checked={cultureType === "greek" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="greek">Greek</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="hawaiian" 
                            checked={cultureType === "hawaiian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="hawaiian">Hawaiian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="indian" 
                            checked={cultureType === "indian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="indian">Indian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="italian" 
                            checked={cultureType === "italian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="italian">Italian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="japanese" 
                            checked={cultureType === "japanese" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="japanese">Japanese</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="korean" 
                            checked={cultureType === "korean" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="korean">Korean</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="mediterranean" 
                            checked={cultureType === "mediterranean" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="mediterranean">Mediterranean</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="mexican" 
                            checked={cultureType === "mexican" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="mexican">Mexican</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="moroccan" 
                            checked={cultureType === "moroccan" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="moroccan">Moroccan</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="pakistani" 
                            checked={cultureType === "pakistani" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="pakistani">Pakistani</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="russian" 
                            checked={cultureType === "russian" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="russian">Russian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="spanish" 
                            checked={cultureType === "spanish" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="spanish">Spanish</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="thai" 
                            checked={cultureType === "thai" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="thai">Thai</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="turkish" 
                            checked={cultureType === "turkish" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="turkish">Turkish</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="culture" 
                            value="vietnamese" 
                            checked={cultureType === "vietnamese" && !checkAllCulture} 
                            onChange={handleCultureChange} 
                        />
                        <label htmlFor="vietnamese">Vietnamese</label>
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
                                <Link to={`/${recipe.name}`} key={recipe.id} state={recipe} >
                                    <RecipeCard recipe={recipe} />    
                                </Link>
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