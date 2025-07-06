import { useLocation } from 'react-router-dom';

function RecipePage() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div>
            <h2>{recipe.name}</h2>
        </div>
    )
}

export default RecipePage;