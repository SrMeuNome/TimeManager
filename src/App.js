import React from 'react';
//import ReactDOM from 'react-dom';
import './css/main.css'
import axios from 'axios'
//import logo from './logo.svg';


function TesteTime() {
  //http://worldtimeapi.org/api/timezone/:area/:location[/:region]
  let url = 'http://worldtimeapi.org/api/timezone/America/Sao_Paulo'

  axios(url, { method: 'GET' }).then((value) => {
    let data = value.data
    console.log(data['datetime'])
  })

  return (
    <>
    </>
  )
}

function App() {
  return (
    <TesteTime />
  );
}

export default App;
