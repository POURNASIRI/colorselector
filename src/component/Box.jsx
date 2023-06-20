

import React from 'react'

function Box({color}) {
  return (
    <div style={{width:"200px", height:"200px", backgroundColor:color, display:'flex', alignItems:"center", justifyContent:"center",border:"1px solid #ccc", borderRadius:"10px", marginTop:"10px"}}>
        Box
    </div>
  )
}

export default Box