import React from 'react'

const DisplayBoxes = (props) => {
    
    console.log(props.allBoxes)
    return (
        
        <div className = "d-flex align-items-center display-items-center flex-wrap-wrap">
            {props.allBoxes.map((box, i) => (
            <div key= {i} className="m-3" style={{backgroundColor: box.color, width: box.size, height: box.size}}></div> 
            ))}
        </div>
    )
}

export default DisplayBoxes
