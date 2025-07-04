import '../css/RecipeCard.css';

function RecipeCard( {recipe} ) {
    return (
        <div className="recipe">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
        </div>
    )
}

export default RecipeCard;