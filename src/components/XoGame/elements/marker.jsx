import React from 'react'

function MarkerO({size, width, fill, color}) {
    const style = {
        fill: fill || 'transparent',
        stroke: color || '#C084FC',
        strokeWidth: width || '6',
      };
    
    return (
    <svg width="100" height="100" >
        <circle cx="50" cy="50" r={size || "40"} style={style}/>
    </svg>
    );
}

function MarkerX({size, width, color}) {
    const style = {
        stroke: color || '#60A5FA',
        strokeWidth: width || '6',
        strokeLinecap: 'round',
    };

    return (
    <svg width={size || "80"} height={size || "80"} >
        <line x1="0" y1="0" x2={size || "80"} y2={size || "80"} style={style} />
        <line x1={size || "80"} y1="0" x2="0" y2={size || "80"}  style={style} />
    </svg>
    );
}

export{
    MarkerO,
    MarkerX
} 