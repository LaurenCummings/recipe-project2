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
                setRecipeList(data);
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
            Home
        </div>
    )
}

export default Home;