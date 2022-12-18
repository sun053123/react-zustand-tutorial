import React from 'react'

function Table({grid, setGrid, setMoveCount}) {

    // const colortemp = ['bg-red-300', 'bg-pink-300', 'bg-yellow-300']

    const handleClick = (row, col) =>{
        console.log(row, col)
        
        let nullField = {
            x: null,
            y: null,
        }
        // check top/down , left,right is null
        function checkNullField(){
        // check top/down
            if(row > 0 && grid[row - 1][col] === null){
                return nullField = {x: row - 1, y: col}
            }

            if(row < 3 && grid[row + 1][col] === null){
                return nullField = {x: row + 1, y: col}
            }
            
        // check left/right
            if(col > 0 && grid[row][col - 1] === null){
                return nullField = {x: row, y: col - 1}
            }
            if(col < 3 && grid[row][col + 1] === null){
                return nullField = {x: row , y: col + 1}
            }
        }
        checkNullField()

        console.log(nullField)
        // swap null to row, col
        if(nullField.x != null && nullField.y != null){
            console.log('swap')
            let newGrid = [...grid];
            newGrid[nullField.x][nullField.y] = grid[row][col];
            newGrid[row][col] = null;
        // setMoveCount +1
            setMoveCount(prev => prev + 1);
        // setGrid
            setGrid(prev => prev = newGrid);
        }
    }

  return (
    <div className='grid grid-rows-4'>
          {grid.map((row, rowIndex) => (
              <div key={rowIndex} className='grid grid-cols-4'>
                  {row.map((col, colIndex) => (
                    <div className={col === null ?'flex justify-center items-center w-16 h-16 p-16 bg-gray-100 hover:cursor-pointer' : 'flex justify-center items-center w-16 h-16 p-16 bg-red-100 hover:cursor-pointer'} 
                        key={colIndex} 
                        onClick={() =>handleClick(rowIndex, colIndex)}
                        >
                        {col}
                    </div>
                  ))}
              </div>
        ))}
    </div>
  )
}

export default Table