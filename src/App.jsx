import { useState } from 'react'
import Selector from './component/Selector'
import Box from './component/Box'

function App() {
  const [color, setColor] = useState(0)

  const colorHandler = (e) =>{
     setColor(e.target.value)
     
  }

  return (
      <div>
        <Selector onChangeColor={colorHandler} />
        <Box  color = {color}/>
      </div>
  )
}

export default App
