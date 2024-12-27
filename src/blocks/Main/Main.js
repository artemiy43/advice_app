import './Main.css'
// import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from 'react';
function Main(pros) {
  const nodeRef = useRef(null)
  // const [inProp, setInProp] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    pros.getAdvice();
    // setInProp(true)
    // nodeRef.current.classList.toggle('animate')
    // setTimeout(()=> nodeRef.current.classList.toggle('animate'), 3000)
  };


    return (
        <div className="main">
          <div className='main__text-container'>
          <p ref={nodeRef} className="main__text">{pros.advice}</p>
          </div>
          <form className="main__form" onSubmit={handleSubmit}>
            <button type="submit" className='main__button'>Get new advice</button>
          </form>
        </div>
      );
}

export default Main;