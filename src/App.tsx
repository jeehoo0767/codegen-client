import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useGetBoard} from "./rest/generated/board";

function App() {
  const {data} = useGetBoard({end_date: "2021-10-10", start_date: "2021-10-10"})
  useEffect(() => {
    // axios.get('http://localhost:8080/board').then(res => {
    //   console.log(res)
    // })
    console.log(data)
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
