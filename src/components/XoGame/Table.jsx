import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { MarkerO, MarkerX } from './elements/marker'

function Table({grid, setGrid, gamePhase, setGamPhase, startSymbol, setStartSymbol }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const [onHoverGrid, setOnHoverGrid] = React.useState([[0,0,0],[0,0,0],[0,0,0]])
    
    function shuffleGamePhase(){
        setGamPhase(prevGamePhase =>prevGamePhase = !prevGamePhase )
    }

    function handleClick(row, col){
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

    function handleVisible(row,col){
        if(onHoverGrid[row][col] === 0){
            setOnHoverGrid(prevGrid => {
            const newGrid = [...prevGrid];
                newGrid[row][col] = startSymbol;
                return newGrid;
            });
        }
        return
    }

    function resetVisible(){
        setOnHoverGrid([[0,0,0],[0,0,0],[0,0,0]]);
        return
    }

    // console.log(onHoverGrid)

  return (
    <div className='grid gap-4 grid-rows-3 '>
          {grid.map((row, rowIndex) => (
              <div key={rowIndex} className='grid gap-4 grid-cols-3 '>
                  {row.map((col, colIndex) => (
                    <div className='flex justify-center items-center w-16 h-16 p-16 border-black border-[20px] bg-gray-100 hover:cursor-pointer' 
                        key={colIndex} 
                        onClick={() => handleClick(rowIndex, colIndex)}
                        onMouseEnter={() => {setIsVisible(true),handleVisible(rowIndex, colIndex)}}
                        onMouseLeave={() => {setIsVisible(false), resetVisible()}}
                        >
                        {/* onhover visible mark */}
                        <div>
                            { onHoverGrid[rowIndex][colIndex] === 1 && grid[rowIndex][colIndex] === 0 ? <MarkerO size={40} width={5} color='#E9D5FF'/> : null}
                            { onHoverGrid[rowIndex][colIndex] === 2 && grid[rowIndex][colIndex] === 0 ? <MarkerX size={60} width={6} color='#BFDBFE'/> : null}
                        </div>
                          <h1 className={col === 0 ?'hidden' : 'visible '}>
                            {col === 1 ?  
                                <MarkerO size={40} width={5}/> : <MarkerX size={60} width={6}/>}
                          </h1>
                    </div>
                  ))}
              </div>
        ))}
    </div>
  )
}

export default Table