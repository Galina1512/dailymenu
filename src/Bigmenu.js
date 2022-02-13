import {useState} from 'react';
import React from 'react';
import {data} from './data';
import up from "./up.png";
import './App.css';

function Bigmenu(){
    const [state, setState] = useState(data);
    
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    return(
    <div>
        <h2 className='h2'>Готовые решения на каждый день.</h2>
        <div className='cont'>
            
            <h2>Меню на 21 день</h2>
        </div>
        <div className='display'>
            {state.map((item =>{
                const {day, breacfast, snack, dinner, supper} = item;
                return(
            <div key={day} className='card'>
                <h3> <span className='span'> День</span>  {day}</h3>
                <p><span className='span'>Завтрак:</span> {breacfast}</p>
                <p><span className='span'>Перекус: </span>{snack} </p>
                <p><span className='span'>Обед: </span> {dinner} </p>
                <p><span className='span'>Ужин: </span>{supper} </p>
            </div>
                )
            }))}
        </div>
        <div className="upp">
    <button onClick={scrollToTop } className="btnup"><img src={up} width='45px' alt='setup' className='btnupp' /> </button>
</div>
    </div>
    )    

}
export default Bigmenu;