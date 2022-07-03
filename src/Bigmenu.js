import {useState} from 'react';
import React from 'react';
import {data} from './data';
import up from "./up.png";
import './App.css';


function Bigmenu(){
    const [state, setState] = useState(data);
    const [mySearch, setMySearch] = useState('');

const yourSearch = (e) => {
    setMySearch(e.target.value); 
}
    
const finalSeach = (e) => {
    e.preventDefault();
    oneDay();
}
const oneDay = (day) => {
    const newDay = data.filter(item =>
        item.day === mySearch);
        setState(newDay);
        console.log(newDay)
   
}

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

        <div className='cont1'>
            <h3 className='h3'>Можно выбрать меню на один день по его номеру</h3>
            <form onSubmit={finalSeach}>
            <input onChange={yourSearch} value={mySearch} ></input>
            </form>
        </div>

        <div className='display'>
            {state.map((item =>{
                const {day, breacfast, snack, dinner, supper} = item;
                return(
            <div key={day} className='card'>
                <h3> <span className='spaning'> День</span>  {day}</h3>
                <p><span className='spaning'>Завтрак:</span> {breacfast}</p>
                <p><span className='spaning'>Перекус: </span>{snack} </p>
                <p><span className='spaning'>Обед: </span> {dinner} </p>
                <p><span className='spaning'>Ужин: </span>{supper} </p>
            </div>
                )
            }))}
        </div>

        <div className="upp">
    <button onClick={scrollToTop } className="btnup"><img src={up} width='45px' alt='setup' className='btnupp' /> </button>
</div>
    </div>      
    )}
export default Bigmenu;