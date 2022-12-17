import React from 'react'

function Header({startSymbol}) {
  return (
    <div>
        <h1 className='text-3xl text-white font-mono font-bold flex'>This phase is <a className={startSymbol === 1 ?'text-red-500 ml-4' : 'text-blue-500 ml-4'}>{`${startSymbol === 1 ? 'O' : 'X'}`}</a></h1>
    </div>
  )
}

export default Header