import { useState, useEffect } from 'react';

function Home() {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);

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

    useEffect(() => {
        getRecipes();
    }, []);

    console.log(recipeList);

    return (
        <div>
            {
                loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="recipes">
                    {
                        recipeList.map((item) => {
                            return (
                                <img src={item.image} alt={item.name} />    
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