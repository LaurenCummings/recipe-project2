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
            <div className={showFilters ? "arrow-left" : "arrow-right"}>
                <FiArrowRightCircle onClick={handleShowFilters} />
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