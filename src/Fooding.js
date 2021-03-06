import { useState } from "react";
import up from "./up.png";

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
};

function Fooding({eat}) {
    const [showMore, setShowMore] = useState (false);
    return(
        <div>

<div className='display'>
{eat.map((item => {
    const{id, name, image, recipe} = item;
    return(
        <div key={id} className='card1'>
            <p className='spaning'> {name} </p>
            <img src={image} width='150px' alt=''/>
            <p>{showMore ? recipe : recipe.substring(0, 75) + "..." }
            <button onClick={()=>setShowMore(!showMore) } className="btn1"> {showMore ? "Показать меньше" :"Показать больше" } </button>
            </p>
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
 export default Fooding;