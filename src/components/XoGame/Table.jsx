import React from 'react'

function Table({grid, setGrid, gamePhase, setGamPhase, startSymbol, setStartSymbol }) {

    function shuffleGamePhase(){
        setGamPhase(prevGamePhase =>prevGamePhase = !prevGamePhase )
    }

    const handleClick = (row, col) => {
        if(grid[row][col] === 0){

            setGrid(prevGrid => {
            const newGrid = [...prevGrid];
                newGrid[row][col] = startSymbol;
                return newGrid;
            });

            shuffleGamePhase()
        }
        return
      };

  return (
    <div className='grid gap-4 grid-rows-3 '>
          {grid.map((row, rowIndex) => (
              <div key={rowIndex} className='grid gap-4 grid-cols-3 '>
                  {row.map((col, colIndex) => (
                    <div className='p-16 border-black border-[20px] bg-gray-100 hover:cursor-pointer' key={colIndex} onClick={() => handleClick(rowIndex, colIndex)}>
                          <h1 className={col === 0 ?'text-transparent' : 'flex'}>
                            {col === 1 ? 'O' : 'X'}
                          </h1>
                    </div>
                  ))}
              </div>
        ))}
    </div>
  )
}

export default Table