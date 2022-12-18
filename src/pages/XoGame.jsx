import React from 'react'

import Header from '../components/XoGame/Header'
import Table from '../components/XoGame/Table'
import Score from '../components/XoGame/Score'
import Popup from '../components/XoGame/Popup';

function XoGame() {
    const [grid, setGrid] = React.useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [gameCount, setGameCount]= React.useState(0)
    // O = 1
    // X = 2
    const [gamePhase, setGamPhase] = React.useState(true)
    const [startSymbol, setStartSymbol] = React.useState(1)

    const [XplayerScore, setXplayerScore] = React.useState(0);
    const [OplayerScore, setOplayerScore] = React.useState(0);

    const [togglePopup, setTogglePopup] = React.useState(false)

    React.useEffect(() => {
        if(gamePhase){
            setStartSymbol(1)
        }else{
            setStartSymbol(2)
        }
    }, [gamePhase])

    function XplayerWin(){
        setXplayerScore(prev => prev = prev+1)
        setGrid([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
        setGameCount(prevState => prevState++)
        setGamPhase(true)
        setTogglePopup(true)
        return
    }

    function OplayerWin(){
        setOplayerScore(prev => prev = prev+1)
        setGrid([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
        setGameCount(prevState => prevState++)
        setGamPhase(true)
        setTogglePopup(true)
        return
    }

    React.useEffect(()=> {
        // col ,row
        for(let indexFocus = 0; indexFocus <= grid.length; indexFocus++){
            // check row
            if (grid[indexFocus]?.every(row  => row === 1)){
                OplayerWin()
                return
            }
            if (grid[indexFocus]?.every(row  => row === 2)){
                XplayerWin()
                return
            }
            
             // check col
            if (grid.every(row  => row[indexFocus] === 1)){
                OplayerWin()
                return
            }
            if (grid.every(row  => row[indexFocus] === 2)){
                XplayerWin()
                return
            }

            //check cross 
            // left 
            if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1){
                OplayerWin()
                return
            }
            if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2){
                XplayerWin()
                return
            }

            // right
            if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1){
                OplayerWin()
                return
            }
            if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2){
                XplayerWin()
                return
            }

            // no field 
            if (grid.flat().every(e  => e !== 0)){
                setGrid([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
                setGameCount(prevState => prevState++)
                setGamPhase(true)
                setTogglePopup(true)
                return
            }
        }

    },[grid])

    console.log("player score =", `x : ${XplayerScore}`, `o : ${OplayerScore}`)

    console.log(gamePhase, startSymbol)
    return (
        <div className={ 'bg-gray-700 flex flex-col justify-center items-center h-screen'}>
            <div className={togglePopup ? 'visible' : 'hidden'}>
                <Popup setTogglePopup={setTogglePopup} setGamPhase={setGamPhase}/>
            </div>
            <Header startSymbol={startSymbol}/>
            <Table grid={grid} setGrid={setGrid} gamePhase={gamePhase} setGamPhase={setGamPhase} startSymbol={startSymbol} setStartSymbol={setStartSymbol}/>
            <Score />
      </div>
    );
}

export default XoGame