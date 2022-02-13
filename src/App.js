import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Bigmenu from './Bigmenu';
import Recipefilter from './Recipefilter';
import Prescript from "./Prescript";
import './App.css';
import About from "./About";

function App(){
    return <Router>
        <nav>
            <Link to='/' className="link">Правильное питание</Link>
            <Link to='/prescript' className="link">Рекомендации</Link>
            <Link to='/bigmenu' className="link">Меню</Link>
            <Link to='/recipefilter' className="link">Рецепты</Link>


        </nav>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/prescript' element={<Prescript/>}/>
            <Route path='/bigmenu' element={<Bigmenu/>}/>
?            <Route path='/recipefilter' element={<Recipefilter/>}/>

        </Routes>
    </Router>
};
export default App;