import './App.css';
import Header from '../Header/Header';
import { api } from "../api";
import React, { useEffect } from "react";
import Main from '../Main/Main'
function App() {

  const [advice, setAdvice] = React.useState('');

  useEffect(()=> {
    api.getAdvice()
    .then((res) => {
      setAdvice(res.slip.advice);
    })
    .catch(err => {
      console.log(err);
    });
  },[])

  function getAdvice() {
    api.getAdvice()
    .then((res) => {
      setAdvice(res.slip.advice);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <Header />
      <Main getAdvice={getAdvice} advice={advice}/>
    </div>
  );
}

export default App;
