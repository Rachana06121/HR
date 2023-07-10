import React from 'react'

export default function Taxtform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        
    }

    const handleOnChange = ()=>{
      console.log("On change")
    }
  return (
    <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">

        <textarea className="from-control" value={Text} onChange={handleOnChange} id="Mytext" rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

    </div>

  )
}
