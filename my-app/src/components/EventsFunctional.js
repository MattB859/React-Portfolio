import React from 'react'


function EventsFunctional() {
    function clickHandler(){
        console.log("clicked the funxtional button");
    }
  return (
    <div>
        <button variant="contained" color="primary" onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional