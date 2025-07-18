import '../css/Sidebar.css';

function Sidebar({ mealType, cultureType, checkAllMeals, checkAllCulture, setSearchTerm, setMealType, setCultureType, setCheckAllCulture, setCheckAllMeals }) {

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
    
    return (
        <div className="sidebar">
            <fieldset>
                <legend>Filter by Meal:</legend>
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
    )
}

export default Sidebar;