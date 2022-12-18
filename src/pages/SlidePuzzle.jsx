import React from 'react'
import Table from '../components/SlidePuzzle/Table';
import Timer from '../components/SlidePuzzle/Timer';

function SlidePuzzle() {
    const [seconds, setSeconds] = React.useState(0);
    const intervalRef = React.useRef();

    const [grid, setGrid] = React.useState([[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]])
    const [moveCount, setMoveCount] = React.useState(0);
    const [toggleWinPopup, setToggleWinPopup] = React.useState(false);

    React.useEffect(() => {
      intervalRef.current = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

      //random number on table
      randDomNumberArray()
      return () => clearInterval(intervalRef.current);

    }, []);

    React.useEffect(() => {
        // check win
        function arrayEqual(arrFlat, aMock){
            return JSON.stringify(arrFlat)==JSON.stringify(aMock);
        }
        
        const arrIsEqual = arrayEqual(grid.flat(),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]);

        if(arrIsEqual){
            // win
            setToggleWinPopup(true)
            console.log('you win')
            randDomNumberArray()
        }
        return
    }, [grid])

    function randDomNumberArray(){
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        
        let p = 0
        const Tgrid = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
        for (let i = 0; i < grid.length; i++) {
            Tgrid[i] = [];
            for (let j = 0; j < grid.length; j++) {
                Tgrid[i][j] = values[p]
                p++
            }
        }
        setGrid(prev => prev = Tgrid)

    }

    function cheaterButton(){
        console.log('cheat acctivated')
        setGrid([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,null,15]])
    }
    
  return (
    <div className={ 'bg-gray-700 flex flex-col justify-center items-center h-screen'}>
        <Timer />
        <Table grid={grid} setGrid={setGrid} setMoveCount={setMoveCount}/>
        <button className='bg-red-500 p-3 rounded-lg' onClick={() => cheaterButton()}>
            cheat eiei
        </button>
    </div>
  )
}

export default SlidePuzzle