import React from 'react';
import '../App.css';

class RecipesApp extends React.Component {

  constructor(props) {
    super(props);

    //set initial state from parent
    this.state = {
      diet: this.props.startingDiet,
      budget: this.props.startingBudget,
    };
  }

  //prevent an enter key from submitting the form
  handleSubmit = (e) => {
      e.preventDefault();
  }

  //update state when budget changes
  handleBudgetChange = (e) => {
    e.preventDefault();

    //handle input validation here.
    // for the sake of this example, I am only checking for a '$' character in
    // the input and removing it before converting the string to a Number. If
    // this were a real production project, I would do more advanced input
    // validation here.
    const newBudget = Number(e.target.value.replace('$', ''))

    this.setState({
      budget: newBudget //convert string to number
    });
  }

  //update state when diet changes
  handleDietChange = (e) => {
    e.preventDefault();
    this.setState({
      diet: e.target.value
    })
  }

  //calculates a recipe's total price by totally all its ingredients' prices
  //
  //assumption: the price in the recipe is the price for the quantity of the
  //            ingredients in the recipe. In the real world, this isn't the
  //            case so if this were to become a real app this would need to
  //            be calculated.
  calculateRecipePrice = (recipe) => {
    return recipe.ingredients.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0).toFixed(2);
  }

  //renders an element for a single recipe
  renderRecipeIngredients = (recipe) => {
    //loop through ingredients, returning an li item
    return recipe.ingredients.map(ingredient => {
      return <li key={`ingredient-${ingredient.id}`}>{ingredient.quantity}g {ingredient.name} <em>(price: ${ingredient.price.toFixed(2)})</em></li>
    });
  }

  //render a dropdown list of diets from the component props
  renderDietOptions = () => {
    let dietsElements = [];
    this.props.diets.forEach((diet) => {
      dietsElements.push(<option key={`diet-${diet.id}`} value={diet.tagName}>{diet.name}</option>);
    });
    return dietsElements;
  }

  //render a dropdown element for selecting diet
  renderDietSelector () {
    return (
      <select name="diet" id="diet" value={this.state.diet} onChange={this.handleDietChange}>
      <option value="choose" disabled>Choose your diet</option>
      {this.renderDietOptions()}
      </select>
    );
  }

  //render the inputs for filtering the recipes
  renderSearchBox() {
    return (
      <div className='search-box'>
        <h1>Enter your diet & budget</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            {this.renderDietSelector()}
        </p>
        <p>
          <input type="text" id="budget" defaultValue={this.state.budget} onChange={this.handleBudgetChange}/>
            <br /><label>Your weekly budget</label>
        </p>
      </form>
      </div>
    );
  }

  //render a list of recipes
  renderRecipes = () => {
    const recipes = this.filterRecipes();

    if (recipes.length < 1) {
      return (
        <div className='text-center'>
          <h3>Phewy! Didn't find any recipes</h3>
        </div>
      );
    } else {
      //loop through recipes, returning a component for each one
      return recipes.map((recipe) => {
        return (
          <div key={`recipe-${recipe.id}`}>

            <hr />
            <div className='text-center'>
              <h2>{recipe.name}</h2>
            </div>
            <div className='wrapper'>
              <div className='text-center'>
                <img src={recipe.img} className='recipeThumbnail' alt={recipe.name} />
              </div>
              <div>
                <h5>Cost to make: ${this.calculateRecipePrice(recipe)}</h5>
                <h5>Description:</h5>
                <p>
                  {recipe.description}
                </p>
                <h5>Ingredients:</h5>
                <ul>
                  {this.renderRecipeIngredients(recipe)}
                  </ul>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  //filter down the recipes array down to only recipes that meet the diet
  // constraint and also the budget constraint
  filterRecipes = () => {
    return this.props.recipes.filter(recipe => {
      //check if recipes conform to selected diet
      for (let i=0; i<recipe.ingredients.length; i++) {
        if (!recipe.ingredients[i].diets.includes(this.state.diet)) {
          return false;
        }
      }
      //check if the recipe is within budget, if so return it
      return this.calculateRecipePrice(recipe) < this.state.budget
        ? true
        : false;
      });
  }

  //render a quick summary of the results
  renderSummary = () => {
    return (
      <div>
        <p>
          The following recipes are tagged with <em>{this.state.diet}</em> and each cost less than $<em>{this.state.budget}</em>
        </p>
      </div>
    );
  }

  //render the whole component
  render() {

    return (
      <div className='recipe-wrapper'>
        <div className='search-box'>
          {this.renderSearchBox()}
        </div>
        <div className='recipes-box'>
          <div className='text-center'>
            <h1>Recipes</h1>
            <div>{this.renderSummary()}</div>
          </div>
            {this.renderRecipes()}
        </div>
      </div>
    );
  }
}

export default RecipesApp;
