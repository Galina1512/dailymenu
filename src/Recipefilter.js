import {useState} from 'react';
import React from 'react';
import {recipes} from './recipes';
import Buttongroop from './Buttongroop';
import './App.css';
import Fooding from './Fooding';

function Recipefilter () {
    const [recipe, setRecipe] = useState(recipes);

    const changmenu = (ganre) =>{
        const newMenu = recipes.filter(element => 
            element.ganre === ganre);
            setRecipe(newMenu);
    }

    return(
<div>
<Buttongroop anyword = {changmenu}/>
<Fooding eat = {recipe}/>
</div>
    )
}
export default Recipefilter;
