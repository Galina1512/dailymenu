import Fooding from "./Fooding";

function Card({item}) {
    return (
        <div className="card11">
            <p className='spaning'> {item.name} </p>
            <img src={item.image} width='150px' alt=''/>
            <p>{item.recipe}</p>
            <button onClick={Fooding} className="btn1"> Вернуться назад </button>
        </div>
    )
}
export default Card;