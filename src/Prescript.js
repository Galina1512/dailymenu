import { useState } from 'react';
import { referens } from './referens';
import { textdoc } from "./textdoc";
import { recomendation } from "./recomendation";

import iconto from './icon-to.png';
import iconfrom from './icon-from.png';
import up from "./up.png";

function Prescript(){
    const [pravilo, setPravilo] = useState(0);
    const {id, rool, pic} = referens[pravilo];

    const[recomend, setRecomend] = useState(0);
    const {idi, recom, fotki} = recomendation[recomend]; 
    
    const ttt = "Главные правила";

    const previousPravilo = () =>{
        setPravilo((pravilo=>{
            pravilo --;
          if (pravilo <0) {
            pravilo = referens.length -1}
            return pravilo;
        }))
      }
      
      const nextPravilo =()=>{
        setPravilo((pravilo=>{
            pravilo ++;
          if (pravilo> referens.length-1){
            pravilo = 0;
          }
          return pravilo;
        }))
      }
//  ============================
      const prevPravilo = () =>{
        setRecomend((recomend=>{
          recomend --;
          if (recomend <0) {
            recomend = recomendation.length -1}
            return recomend
        }))
      }
      
      const nexttPravilo =()=>{
        setRecomend((recomend=>{
          recomend ++;
          if (recomend> recomendation.length-1){
            recomend = 0;
          }
          return recomend;
        }))
      }

    
    return(
<div className="forefon">
<div className='science'>
<h3 className='white'>На заметку</h3>
<p className='white'>{textdoc[17]} </p>
</div>


<div>
<h2 className='h2 whitezag'>{ttt}</h2>
</div>

<div className='card2'>
<button onClick={previousPravilo}><img src = {iconfrom} width='20px' alt=''/></button>

    <img src={pic} width='150px' height='200px' alt='tema'/>
    <div className='card2-2'>
        <div className='card2-1'>
            <hr/>
            <h3 className='h3'>{id} </h3>
            <hr/>
        </div>
        <h3 className='h3'>{rool} </h3>
    </div>
    <button onClick={nextPravilo}><img src = {iconto} width='20px' alt=''/></button>
</div>


<div>
<h2 className='h2 whitezag'>Рекомендации по еде</h2>
</div>
        {/* ========      ======= */}
<div className='card2'>
<button onClick={prevPravilo}><img src = {iconfrom} width='20px' alt=''/></button>

    <div className='card2-2'>
        <div className='card2-1'>
            <hr/>
            <h3 className='h3'>{idi} </h3>
            <hr/>
        </div>
        <h3 className='h3'>{recom} </h3>
    </div>
    <img src={fotki} width='150px' height='200px' alt='tema'/>

    <button onClick={nexttPravilo}><img src = {iconto} width='20px' alt=''/></button>
</div>

<br/>


<div className="upp">
<button onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})} className="btnup"><img src={up} width='45px' alt='setup' className='btnupp' /> </button>
</div>


</div>
    )
}
export default Prescript;