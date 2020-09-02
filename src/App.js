import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'
import request from 'request'
//import logo from './logo.svg';


function TesteTime() {
  //http://worldtimeapi.org/api/timezone/:area/:location[/:region]
  let url = 'http://worldtimeapi.org/api/timezone/America/Sao_Paulo'


  useEffect(() => {
    let JSONTime
    request(url, { json: true }, (error, resp, body) => {
      if (error) {
        console.log('Erro ao obter os dados: ' + error)
      }

      if (!error) {
        console.log(body)
        JSONTime = body
        ReactDOM.render(<h1 style={{ color: 'white' }}>{JSON.stringify(JSONTime)}</h1>, document.getElementById('teste'))
      }
    }, [])
  })
  return (
    <div id='teste'></div >
  )
}

function App() {
  return (
    <TesteTime />
  );
}

export default App;
