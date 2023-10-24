import {useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board'
import Input from './components/Input'
import Logo from "./components/Logo.js"
function App() {

  const [data,setData] = useState(["","",0])

  useEffect(()=>{
    get()
  },[])

  function get(){
    let url = 'http://localhost:25565/get';
    let options = {method: 'GET'};
    fetch(url, options)
      .then(res => res.json())
      .then(json => {setData([json[0],json[1],json[2]])})
      .catch(err => console.error('error:' + err));
  }

  function submit(value){
    let url = 'http://localhost:25565/answer';

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
      body: '{"answer":"'+ value +'","num":'+data[2]+'}'
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        if(json.isSuccess){
          get()
      }})
      .catch(err => console.error('error:' + err));
  }

  return (
    <div className="App">
      <header className="App-header">

        <Logo/>
        <Board cat={data[1]} emoji={data[0]}/>
        <Input pass={submit}/>

      </header>
    </div>
  );
  }

export default App;
