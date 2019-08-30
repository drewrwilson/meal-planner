import './App.css';
import React from 'react';
import Header from './components/Header.js';
import allRecipes from './data/all-recipes.json'
import allDiets from './data/diets.json';
import RecipesApp from './components/RecipesApp.js';
import Footer from './components/Footer.js';

const startingDiet   = 'omnivore'
const startingBudget = 100

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <RecipesApp recipes={allRecipes} diets={allDiets} startingDiet={startingDiet} startingBudget={startingBudget} />
        <Footer />
      </div>
    );
  }

}

export default App;
