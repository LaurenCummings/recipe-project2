import '../css/Home.css';
import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

function Home() {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    useEffect(() => {
        getRecipes();
    }, []);

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
                    <p>Filter by</p>
                    <p>Filter by</p>
                    <p>Filter by</p>
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