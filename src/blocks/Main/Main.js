import './Main.css'
function Main(pros) {
  function handleSubmit(e) {
    e.preventDefault();
    pros.getAdvice();
  };


    return (
        <div className="main">
          <p className="main__text">{pros.advice}</p>
          <form className="main__form" onSubmit={handleSubmit}>
            <button type="submit" className='main__button'>Get advice</button>
          </form>
        </div>
      );
}

export default Main;