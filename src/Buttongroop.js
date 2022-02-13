function Buttongroop ({anyword}) {
    return(
        <div className="cont">
            <button onClick={()=>anyword ("breacfast") } className='btn'>Завтрак</button>
            <button onClick={()=>anyword ("snack") } className='btn'>Перекус</button>
            <button onClick={()=>anyword ("dinner") } className='btn'>Обед</button>
            <button onClick={()=>anyword ("supper") } className='btn'>Ужин</button>
        </div>
    )
}
export default Buttongroop;
