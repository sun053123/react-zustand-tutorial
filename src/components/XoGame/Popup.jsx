import React from 'react'

function Popup({setTogglePopup, setGamPhase}) {

    function handlePopupStartFromO(){
        setGamPhase(true)
        setTogglePopup(prevState => prevState = !prevState)
    }

    function handlePopupStartFromX(){
        setGamPhase(false)
        setTogglePopup(prevState => prevState = !prevState)
    }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-75 z-50">
      <div className="h-1/2 w-1/2 mx-auto my-12 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center p-6">
        <h1 className='text-3xl font-bold font-mono'>
            Pick Who start first ?
        </h1>
        
        <button className="mt-6 bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handlePopupStartFromO}>
          Start From O
        </button>
        <button className="mt-6 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handlePopupStartFromX}>
          Start From X
        </button>

      </div>
    </div>
  )
}

export default Popup