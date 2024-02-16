import { useState } from 'react'
import './App.css'
import { Line } from './line'

export const VALUES = {
  X: 'x',
  O: 'o',
}

const LINE1 = {
  a1: {
    id: 'a1',
    value: null
  },
  a2: {
    id: 'a2',
    value: null
  },
  a3: {
    id: 'a3',
    value: null
  },
}

const LINE2 = {
  b1: {
    id: 'b1',
    value: null
  },
  b2: {
    id: 'b2',
    value: null
  },
  b3: {
    id: 'b3',
    value: null
  },
}

const LINE3 = {
  c1: {
    id: 'c1',
    value: null
  },
  c2: {
    id: 'c2',
    value: null
  },
  c3: {
    id: 'c3',
    value: null
  },
}

function App() {
  const [line1, setLine1] = useState(LINE1)
  const [line2, setLine2] = useState(LINE2)
  const [line3, setLine3] = useState(LINE3)
  const [turn, setTurn] = useState(VALUES.X)

  const reset = () => {
    setLine1(LINE1)
    setLine2(LINE2)
    setLine3(LINE3)
    setTurn(VALUES.X)
  }

  return (
    <div>
      <h1 className='turn'>Turn: {turn}</h1>
      <Line line={line1} setTurn={setTurn} setLine={setLine1} turn={turn} />
      <Line line={line2} setTurn={setTurn} setLine={setLine2} turn={turn} />
      <Line line={line3} setTurn={setTurn} setLine={setLine3} turn={turn} />

      <br/>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default App
