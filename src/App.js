import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/person/Person';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))
  },[])
  return(
    <div>
      <h2>Visiting Every Country Of The World !!!</h2>
      <h3>Availabe : {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return(
    <div>
      <h3>Name:{props.name}</h3>
      <h4>Population: {props.population}</h4>
    </div>
  )
}

export default App;
