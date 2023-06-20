import React from 'react'



const Selector = ({onChangeColor}) => {


  return (
      <select onChange={onChangeColor} className="selector">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="gold">Gold</option>
            <option value="blue">Blue</option>
            <option value="white">white</option>
        </select>
  )
}

export default Selector