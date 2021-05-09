import React from 'react'

const Input = ({index, value, setValue}) => {
    return(
        <div>
        {index} <input value={value} 
                     onChange={setValue}/>
      </div>
    )
}

export default Input