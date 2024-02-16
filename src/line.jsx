import { VALUES } from "./App"


export function Line({line, setLine, setTurn, turn}) {
  const handleCellClick = (id) => {
    setLine({...line, [id]: {id, value: turn} })
    setTurn(turn => turn === VALUES.X ? VALUES.O : VALUES.X)
  }

  return (
    <div className="lineWrapper">
      {
        Object.values(line).map(({id, value}) => {
          return (
            <div 
              key={id} 
              className="cellWrapper"
              onClick={() => handleCellClick(id)}
            >
              {value === VALUES.X && 'X'}
              {value === VALUES.O && 'O'}
            </div>
          )
        })
      }
    </div>
  )
}