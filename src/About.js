import { tenrules } from "./tenrules";
import { textdoc } from "./textdoc";
import up from "./up.png";

function About(){

    const text1 = "Правильное питание (ПП) – одна из тех привычек, которые позволяют нам сохранять собственное здоровье, поддерживать нормальный вес и быть бодрыми каждый день.";

    return(
    <div className="about">
        <div className="zagolovok">
            <h1>Правильное питание: </h1>
            <h1>10 работающих секретов ПП</h1>
        </div>
    <div className="bloki" >   
        <div className="rigth">
            <h3>{text1} </h3>
            <div>
                <h2>БЖУ – что это</h2>
                <p> {textdoc[11]}</p>
                <p>{textdoc[12]} </p>
                <p> {textdoc[13]}</p>
                <img src="/images/2-3.jpg" className='bgu' alt='table' width='500px'/>
                <h3>Углеводы и их функции</h3>
                <p> {textdoc[14]}</p>
                <p><span className="span">  Простые углеводы (моносахариды). </span>{textdoc[15]} </p>
                <p><span className="span"> Сложные углеводы (полисахариды) </span>{textdoc[16]}</p>
                <img src="/images/carbons.jpg" className='bgu' width='500px' alt=''/>
                <h3>Для чего нужны белки?</h3>
                <p>{textdoc[0]}</p>
                <p>{textdoc[1]}</p>
                <p>{textdoc[2]}</p>
                <p>{textdoc[3]}</p>
                <p>{textdoc[4]}</p>
                <img src="/images/belki.jpg" className='bgu' width='500px' alt=''/>
                <h3>Жиры в питании человека</h3>
                <p>{textdoc[6]}</p>
                <p><span className="span"> Ненасыщенные жирные кислоты</span> {textdoc[7]}</p>
                <p><span className="span"> Насыщенные жирные кислоты</span> {textdoc[8]}</p>
                <p><span className="span"> Трансжиры</span> {textdoc[9]}</p>

            </div>   
        </div>

        <div className="left">
{tenrules.map((elem =>{
    const{numb, header, picture, article} = elem;
    return(
        <div key={numb} className='blok'>
            <h3>{numb}. {header} </h3>
            <div className="inrow"> 
                <div className="pic">        
                    <img src={picture} className='picicpic' width='150px' alt=''/>
                </div>
                <div className="art">
                    <p>{article} </p>
                </div>
            </div>
        </div>
    )
}))}
        </div>
        </div>
<div className="upp">
    <button onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})} className="btnup"><img src={up} width='45px' alt='setup' className='btnupp' /> </button>

</div>
        </div>
    )
}
export default About;