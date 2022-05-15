import React from 'react'
import './Home.css'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
  const { counter } = useContext(CounterContext)


  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor */}
      <ChangeCounter />
    </div>
  )
}

export default Home