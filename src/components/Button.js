import React, { useState } from 'react'

const Button = () => {

    const [toggle , setToggle] = useState(false)
  return (
    <div>
        <button onClick={ () => setToggle(!toggle)}>Button from child</button>

        { toggle && <h3>Toggle</h3>}
    </div>
  )
}

export default Button