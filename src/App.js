import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayok] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayok(data))

  }, [])
  // const nayoks = [{ name: 'Abdullah', age: 44 }, { name: 'Ferdows', age: 33 }, { name: 'Sakil', age: 33 }];
  return (
    <div className="App">
      <NumberCounter></NumberCounter>

      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age} key={nk.id}></Nayok>)
      }



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div >
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h3>Number of movies: {count} </h3>
      <MovieDisplay movies={count + 2}></MovieDisplay>
      <MovieDisplay movies={count + 3}></MovieDisplay>
      <MovieDisplay movies={count + 4}></MovieDisplay>
      <MovieDisplay movies={count + 6}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1> Ami Nayok: {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 22} years</h3>
    </div>
  )
}

function NumberCounter() {
  const [numberCount, setNumberCount] = useState(0);
  const handleNumber = () => setNumberCount(numberCount + 1);
  return (
    <div>
      <button onClick={handleNumber}>Add Number</button>
      <h1>The number I have count: {numberCount}</h1>
      <DisplayNumber number={numberCount - 1}></DisplayNumber>
      <DisplayNumber number={numberCount - 2}></DisplayNumber>
      <DisplayNumber number={numberCount - 3}></DisplayNumber>

    </div>
  )
}

function DisplayNumber(props) {
  return <h3>The number I was counted: {props.number}</h3>
}



export default App;
